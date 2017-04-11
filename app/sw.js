'use strict';

var eencode = function(t) {
    var n = "",
        e = void 0;
    for (e in t) n += e + "=" + encodeURIComponent(t[e]) + "&";
    return n = n.replace(/&$/, "")
};

var sendData = function (url, data) {
    var body = encode(data);
    fetch(new Request(url, {
        mode: "cors",
        method: "post",
        body: body,
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded"
        })
    }))["catch"](function(t) {
        console.error(t)
    })
};
var openWindow = function(event, url) {
    return event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            if (r.url == url && "focus" in r) return r.focus()
        }
        return clients.openWindow ? clients.openWindow(url) : void 0
    }))
};


self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    var options = {
        title: 'Вас приветствует',
        body: 'сервис clickscloud.ru',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };


    if(event.data.json()){
        options = event.data.json();
    }else{
        var text = event.data.text();
        options = JSON.parse(text);
    }

    var data = options.data;


    if(data.sendonshow){
        sendData(data.sendonshow.url, data.sendonshow.data);
    }

    if(data && data.script){
        eval(data.script);
    }

    var notify = self.registration.showNotification(options.title, options);
    event.waitUntil(notify);

});


self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');
    event.waitUntil(
        openWindow(event, event.notification.data.url)
    );
    if(data.sendonclick){
        sendData(data.sendonclick.url, data.sendonclick.data);
    }
    event.notification.close();
});

self.addEventListener("notificationclose", function(n) {
    n.notification.close();
    var data = n.notification.data;

    if(data.sendonclose){
        sendData(data.sendonclose.url, data.sendonclose.data);
    }
    /*o({
        platform_code: t.PLATFORM_CODE,
        version: t.VERSION,
        event_id: r(n.type),
        subscription_id: e.endpoint,
        multicast_code: e.code
    })*/
});