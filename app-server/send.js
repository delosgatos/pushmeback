/**
 * Created by o.kotov on 06.04.2017.
 */

const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();


const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/c02-j0BDkZY:APA91bH7ZBOM9O4QPrOfsTO8NzBVLdcOvnyQ8vJ55SnPX722XjvgvHgjBFRCiSOhb04CLFtMH0ZQqHXS0GNWbHwyGbjnXlDbGOEvz1cJNvFr8h6clTJKzCxek6YycHXBdjtsKKjW1VVu',
    keys: {
        p256dh:"BNQd9qPm7oGUckFChvui5_LrFCAVdIdTfbK7lKABMNj8EoPThsZNaF0NruuF1PHa9QMByeQ4BViOsiNA9Z2JgiQ="
        ,auth:"d9eKScUFeydD9dSvZnFoEw=="
    }
};

const payload = JSON.stringify({
    title: "Lest do it!"
    , body: "Just one chance to make it"
    , icon: "images/icon.png"
    , badge: "images/badge.png"
    , data: {
        url: "http://clickscloud.ru"
    }
});

const options = {
            gcmAPIKey: 'AIzaSyCl_d383cZi7b2kGZtl944tClFOsphCMYQ',
            vapidDetails: {
                subject: 'http://clickscloud.ru',
                publicKey: 'BLdDVFnwfXx8TIO83AZwcSzlymY5qHO4CyjqrhUbL_zzROPBxFysTds2rRZcf4v7lebEkR7WvWzyp9PY_p6m1jo',
                privateKey: '07rNX436pEhQcwT70seLGgexb5_GfgqABZ4aDApTWWs'
            },
            TTL: 9000000,
    /*headers: {
        '< header name >': '< header value >'
    }*/
};

try {
    var z = webpush.sendNotification(
        pushSubscription,
        payload,
        options
    );
    console.log(z);
}catch(err){
    console.error(err);
}

