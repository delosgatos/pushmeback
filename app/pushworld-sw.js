! function t(n, e, r) {
    function o(c, a) {
        if (!e[c]) {
            if (!n[c]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(c, !0);
                if (i) return i(c, !0);
                var f = new Error("Cannot find module '" + c + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var s = e[c] = {
                exports: {}
            };
            n[c][0].call(s.exports, function(t) {
                var e = n[c][1][t];
                return o(e ? e : t)
            }, s, s.exports, t, n, e, r)
        }
        return e[c].exports
    }
    for (var i = "function" == typeof require && require, c = 0; c < r.length; c++) o(r[c]);
    return o
}({
    1: [function(t, n, e) {
        "use strict";
        ! function() {
            self.addEventListener("install", function(t) {
                t.waitUntil(self.skipWaiting())
            }), self.addEventListener("activate", function(t) {
                t.waitUntil(clients.claim())
            });
            var t = {
                    PLATFORM_CODE: "6a3b64e97fb1db66044a0232d979f8f3e5813ee8007535c07c8cb1b940e4342c",
                    VERSION: "1.4.3",
                    payload: function(t) {
                        return "https://ep0.push.world/payload/" + t + "/"
                    },
                    stat: function() {
                        return "https://api.push.world/v1/event"
                    }
                },
                n = function(t) {
                    var n = t.split("/"),
                        e = n[n.length - 1];
                    return e
                },
                e = function(t) {
                    var n = "",
                        e = void 0;
                    for (e in t) n += e + "=" + encodeURIComponent(t[e]) + "&";
                    return n = n.replace(/&$/, "")
                },
                r = function(t) {
debugger;
                    return t.replace("notification", "notification_")
                },
                o = function(n) {
                    var r = e(n);
                    fetch(new Request(t.stat(), {
                        mode: "cors",
                        method: "post",
                        body: r,
                        headers: new Headers({
                            "Content-Type": "application/x-www-form-urlencoded"
                        })
                    }))["catch"](function(t) {
                        console.error(t)
                    })
                },
                i = function(t) {
                    var n = [];
                    if (t && t.length)
                        for (var e = 0; e < t.length; e++) n.push({
                            action: t[e].action,
                            url: t[e].url
                        });
                    return n
                },
                c = function(t) {
                    debugger;
                    self.registration.getNotifications().then(function(n) {
                        for (var e = 0; e < n.length; e++) {
                            var r = n[e].data.messageid;
                            r === t && n[e].close()
                        }
                    })
                },
                a = function(t, n) {
                    debugger;
                    var e = self.registration.showNotification(t.title, {
                        body: t.text,
                        icon: t.image,
                        image: t.image_large || t.img || "",
                        vibrate: t.vibrate || [300, 100, 400],
                        direction: t.direction || "auto",
                        tag: t.code,
                        badge: t.badge || "https://static.push.world/shared/android-badge-72x72.png",
                        actions: t.buttons,
                        requireInteraction: !0,
                        data: {
                            buttons: i(t.buttons),
                            messageid: t.code,
                            endpoint: n,
                            url: t.url,
                            code: t.code
                        }
                    }).then(function() {
                        t.duration && setTimeout(function() {
                            c(t.code)
                        }, 1e3 * t.duration)
                    });
                    return e
                },
                u = function(t, n) {
                    return t.waitUntil(clients.matchAll({
                        type: "window"
                    }).then(function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            if (r.url == n && "focus" in r) return r.focus()
                        }
                        if (clients.openWindow) return clients.openWindow(n)
                    }))
                };
            self.addEventListener("push", function(e) {
                e.waitUntil(registration.pushManager.getSubscription().then(function(e) {
                    var r = e && e.endpoint ? e.endpoint : "null",
                        i = t.payload(n(r));
                    return fetch(i).then(function(n) {
                        if (200 !== n.status) throw console.info("Status Code: " + n.status), new Error;
                        return n.json().then(function(n) {
                            if (n.error) throw console.error("The API returned an error.", n.error), new Error;
                            return o({
                                platform_code: t.PLATFORM_CODE,
                                version: t.VERSION,
                                event_id: "notification_view",
                                subscription_id: r,
                                multicast_code: n.code
                            }), a(n, r)
                        })
                    })["catch"](function(t) {
                        console.warn(t)
                    })
                }))
            }), self.addEventListener("notificationclick", function(n) {
                var e = n.notification.data;
                if (!n.action) return n.notification.close(), o({
                    platform_code: t.PLATFORM_CODE,
                    version: t.VERSION,
                    event_id: r(n.type),
                    subscription_id: e.endpoint,
                    action: "default",
                    multicast_code: e.code
                }), u(n, e.url);
                for (var i = 0; i < e.buttons.length; i++)
                    if (e.buttons[i].action === n.action) return o({
                        platform_code: t.PLATFORM_CODE,
                        version: t.VERSION,
                        event_id: r(n.type),
                        subscription_id: e.endpoint,
                        action: n.action,
                        multicast_code: e.code
                    }), u(n, e.buttons[i].url)
            }), self.addEventListener("notificationclose", function(n) {
                n.notification.close();
                var e = n.notification.data;
                o({
                    platform_code: t.PLATFORM_CODE,
                    version: t.VERSION,
                    event_id: r(n.type),
                    subscription_id: e.endpoint,
                    multicast_code: e.code
                })
            })
        }()
    }, {}]
}, {}, [1]);