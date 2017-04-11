! function(e) {
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0)
}([function(e, n, t) {
    "use strict";
    var i = t(4),
        o = t(1),
        r = t(2);
    if (i["default"].isBrowser())
        if (o.incrementSdkLoadCount(), o.getSdkLoadCount() > 1) r.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."), r.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. " + ("Occurred " + o.getSdkLoadCount() + " times."));
        else {
            if ("undefined" != typeof OneSignal) var a = OneSignal;
            if (o.isPushNotificationsSupported() ? t(64) : (r.debug("OneSignal: Push notifications are not supported. A stubbed version of the SDK will be initialized."), t(65)), a)
                for (var s = 0; s < a.length; s++) OneSignal.push(a[s])
        }
    else i["default"].isServiceWorker() && t(66)
}, function(e, n, t) {
    "use strict";
    function i(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return Y["default"].isBrowser() && (Q || (Q = document.createElement("textarea"))), Q ? (Q.innerHTML = e, Q.value) : e
    }
    function r() {
        return "undefined" != typeof window.Promise && (!(K.ios || K.ipod || K.iphone || K.ipad) && (!K.msedge && !K.msie && (!(K.firefox && Number(K.version) < 48 && (K.mobile || K.tablet)) && (!!(K.firefox && Number(K.version) >= 44) || (!!(K.safari && Number(K.version) >= 7.1) || !navigator.appVersion.match(/ wv/) && (!!((K.chrome || K.chromium) && Number(K.version) >= 42) || (!!(K.yandexbrowser && Number(K.version) >= 15.12) || (!!(K.opera && (K.mobile || K.tablet) && Number(K.version) >= 37 || K.opera && Number(K.version) >= 42) || !!K.vivaldi))))))))
    }
    function a(e) {
        var n = document.querySelectorAll(e);
        if (n.length > 0)
            for (var t = 0; t < n.length; t++) n[t].parentNode.removeChild(n[t])
    }
    function s() {
        return new Promise(function(e, n) {
            OneSignal.initialized ? e() : OneSignal.once(OneSignal.EVENTS.SDK_INITIALIZED, e)
        })
    }
    function l(e) {
        return JSON.stringify(e, function(e, n) {
            return "function" == typeof n ? "[Function]" : n
        }, 4)
    }
    function u(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (e) return e.apply(null, n)
    }
    function c(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        return q.debug("Called %c" + e + "(" + n.map(l).join(", ") + ")", v("code"), ".")
    }
    function d(e) {
        return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    }
    function g(e, n, t) {
        if ("string" == typeof e) document.querySelector(e).insertAdjacentHTML(n, t);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.insertAdjacentHTML(n, t)
        }
    }
    function f(e) {
        if ("string" == typeof e)
            for (var n = document.querySelector(e); n.firstChild;) n.removeChild(n.firstChild);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }
    }
    function p(e, n) {
        if ("string" == typeof e) document.querySelector(e).classList.add(n);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.classList.add(n)
        }
    }
    function h(e, n) {
        if ("string" == typeof e) document.querySelector(e).classList.remove(n);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.classList.remove(n)
        }
    }
    function b(e, n) {
        if ("string" == typeof e) return document.querySelector(e).classList.contains(n);
        if ("object" == typeof e) return e.classList.contains(n);
        throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }
    function m() {
        return K.chrome || K.yandexbrowser || K.opera || K.vivaldi || K.chromium ? $.CHROME : K.firefox ? $.FIREFOX : K.safari ? $.SAFARI : void 0
    }
    function v(e) {
        return "code" == e ? '\n    padding: 0 1px 1px 5px;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;\n    color: #444;\n    ' : "bold" == e ? "\n      font-weight: 600;\n    color: rgb(51, 51, 51);\n    " : "alert" == e ? "\n      font-weight: 600;\n    color: red;\n    " : "event" == e ? "\n    color: green;\n    " : "postmessage" == e ? "\n    color: orange;\n    " : "serviceworkermessage" == e ? "\n    color: purple;\n    " : void 0
    }
    function S(e) {
        return new Promise(function(n) {
            setTimeout(n, e)
        })
    }
    function y() {
        return Promise.resolve()
    }
    function w(e, n, t) {
        var i = new Promise(function(e) {
            return setTimeout(function() {
                return e("promise-timed-out")
            }, n)
        });
        return Promise.race([e, i]).then(function(i) {
            return "promise-timed-out" === i ? (q.info(t || "Promise " + e + " timed out after " + n + " ms."), Promise.reject(t || "Promise " + e + " timed out after " + n + " ms.")) : i
        })
    }
    function O(e, n, t) {
        return void 0 === n && (n = y()), void 0 === t && (t = y()), e ? n : t
    }
    function E() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var n = window.crypto || window.msCrypto;
            if (n) {
                var t = n.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var n = 16 * Math.random() | 0;
                return ("x" == e ? n : 3 & n | 8).toString(16)
            })
        })
    }
    function P(e, n) {
        return !!e && e.indexOf(n) !== -1
    }
    function I(e) {
        for (var n in e) e.hasOwnProperty(n) && void 0 === e[n] && delete e[n];
        return e
    }
    function T(e) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
    }
    function x(e) {
        e = e.trim();
        for (var n = ["http://www.", "https://www.", "http://", "https://", ".onesignal.com/", ".onesignal.com"], t = 0, i = n; t < i.length; t++) {
            var o = i[t];
            e = e.replace(o, "")
        }
        return e.toLowerCase()
    }
    function _(e) {
        var n = window.location.href;
        n = n.toLowerCase(), e = e.replace(/[\[\]]/g, "\\$&").toLowerCase();
        var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            i = t.exec(n);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    function k() {
        return q.warn("OneSignal: Wiping local IndexedDB data."), Promise.all([J["default"].remove("Ids"), J["default"].remove("NotificationOpened"), J["default"].remove("Options")])
    }
    function N() {
        return q.warn("OneSignal: Wiping IndexedDB data."), Promise.all([Z["default"].remove("Ids"), Z["default"].remove("NotificationOpened"), Z["default"].remove("Options")])
    }
    function C(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function R() {
        return q.warn("OneSignal: Unsubscribing from push."), Y["default"].isServiceWorker() ? self.registration.pushManager.getSubscription().then(function(e) {
            if (e) return e.unsubscribe();
            throw new Error("Cannot unsubscribe because not subscribed.")
        }) : X["default"].isUsingSubscriptionWorkaround() ? new Promise(function(e, n) {
            q.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."), OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, function(t) {
                q.debug("Unsubscribe from push succesfully remotely executed."), t.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : n("Failed to remotely unsubscribe from push.")
            })
        }) : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) {
            return e.pushManager
        }).then(function(e) {
            return e.getSubscription()
        }).then(function(e) {
            if (e) return e.unsubscribe()
        }) : Promise.resolve()
    }
    function A() {
        if (q.warn("OneSignal: Unregistering service worker."), !Y["default"].isIframe()) return navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) {
            return e.unregister()
        }) : Promise.resolve()
    }
    function M() {
        return Promise.all([R(), A()])
    }
    function D(e) {
        return new Promise(function(n) {
            return setTimeout(n, e)
        })
    }
    function U(e, n) {
        return e.substr(e.indexOf(n) + n.length)
    }
    function H(e, n, t, o) {
        if (void 0 === o && (o = !1), n || q.error("Cannot call on() with no event: ", n), t || q.error("Cannot call on() with no task: ", t), "string" == typeof e) {
            var r = document.querySelectorAll(e);
            if (r.length > 0)
                for (var a = 0; a < r.length; a++) H(r[a], n, t)
        } else if (i(e))
            for (var a = 0; a < e.length; a++) H(e[a], n, t);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            var s = function() {
                return function(n) {
                    var i = function() {
                        e.removeEventListener(n.type, s)
                    };
                    o || i(), t(n, i)
                }
            }();
            e.addEventListener(n, s)
        }
    }
    function L() {
        return window.__oneSignalSdkLoadCount || 0
    }
    function W(e, n) {
        return G(this, void 0, void 0, function() {
            return z(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise(function(t, i) {
                            OneSignal.once(e, function(e) {
                                if (n) {
                                    n(e) && t(e)
                                } else t(e)
                            })
                        })];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }
    function B() {
        window.__oneSignalSdkLoadCount = L() + 1
    }
    function V(e) {
        return e.replace(/\s/g, "").toLowerCase()
    }
    function j(e) {
        function n(e) {
            for (var n = "", t = 0; t <= 3; t++) n += d.charAt(e >> 8 * t + 4 & 15) + d.charAt(e >> 8 * t & 15);
            return n
        }
        function t(e) {
            for (var n = (e.length + 8 >> 6) + 1, t = new Array(16 * n), i = 0; i < 16 * n; i++) t[i] = 0;
            for (var i = 0; i < e.length; i++) t[i >> 2] |= e.charCodeAt(i) << i % 4 * 8;
            return t[i >> 2] |= 128 << i % 4 * 8, t[16 * n - 2] = 8 * e.length, t
        }
        function i(e, n) {
            var t = (65535 & e) + (65535 & n);
            return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
        }
        function o(e, n) {
            return e << n | e >>> 32 - n
        }
        function r(e, n, t, r, a, s) {
            return i(o(i(i(n, e), i(r, s)), a), t)
        }
        function a(e, n, t, i, o, a, s) {
            return r(n & t | ~n & i, e, n, o, a, s)
        }
        function s(e, n, t, i, o, a, s) {
            return r(n & i | t & ~i, e, n, o, a, s)
        }
        function l(e, n, t, i, o, a, s) {
            return r(n ^ t ^ i, e, n, o, a, s)
        }
        function u(e, n, t, i, o, a, s) {
            return r(t ^ (n | ~i), e, n, o, a, s)
        }
        function c(e) {
            for (var o = t(e), r = 1732584193, c = -271733879, d = -1732584194, g = 271733878, f = 0; f < o.length; f += 16) {
                var p = r,
                    h = c,
                    b = d,
                    m = g;
                r = a(r, c, d, g, o[f + 0], 7, -680876936), g = a(g, r, c, d, o[f + 1], 12, -389564586), d = a(d, g, r, c, o[f + 2], 17, 606105819), c = a(c, d, g, r, o[f + 3], 22, -1044525330), r = a(r, c, d, g, o[f + 4], 7, -176418897), g = a(g, r, c, d, o[f + 5], 12, 1200080426), d = a(d, g, r, c, o[f + 6], 17, -1473231341), c = a(c, d, g, r, o[f + 7], 22, -45705983), r = a(r, c, d, g, o[f + 8], 7, 1770035416), g = a(g, r, c, d, o[f + 9], 12, -1958414417), d = a(d, g, r, c, o[f + 10], 17, -42063), c = a(c, d, g, r, o[f + 11], 22, -1990404162), r = a(r, c, d, g, o[f + 12], 7, 1804603682), g = a(g, r, c, d, o[f + 13], 12, -40341101), d = a(d, g, r, c, o[f + 14], 17, -1502002290), c = a(c, d, g, r, o[f + 15], 22, 1236535329), r = s(r, c, d, g, o[f + 1], 5, -165796510), g = s(g, r, c, d, o[f + 6], 9, -1069501632), d = s(d, g, r, c, o[f + 11], 14, 643717713), c = s(c, d, g, r, o[f + 0], 20, -373897302), r = s(r, c, d, g, o[f + 5], 5, -701558691), g = s(g, r, c, d, o[f + 10], 9, 38016083), d = s(d, g, r, c, o[f + 15], 14, -660478335), c = s(c, d, g, r, o[f + 4], 20, -405537848), r = s(r, c, d, g, o[f + 9], 5, 568446438), g = s(g, r, c, d, o[f + 14], 9, -1019803690), d = s(d, g, r, c, o[f + 3], 14, -187363961), c = s(c, d, g, r, o[f + 8], 20, 1163531501), r = s(r, c, d, g, o[f + 13], 5, -1444681467), g = s(g, r, c, d, o[f + 2], 9, -51403784), d = s(d, g, r, c, o[f + 7], 14, 1735328473), c = s(c, d, g, r, o[f + 12], 20, -1926607734), r = l(r, c, d, g, o[f + 5], 4, -378558), g = l(g, r, c, d, o[f + 8], 11, -2022574463), d = l(d, g, r, c, o[f + 11], 16, 1839030562), c = l(c, d, g, r, o[f + 14], 23, -35309556), r = l(r, c, d, g, o[f + 1], 4, -1530992060), g = l(g, r, c, d, o[f + 4], 11, 1272893353), d = l(d, g, r, c, o[f + 7], 16, -155497632), c = l(c, d, g, r, o[f + 10], 23, -1094730640), r = l(r, c, d, g, o[f + 13], 4, 681279174), g = l(g, r, c, d, o[f + 0], 11, -358537222), d = l(d, g, r, c, o[f + 3], 16, -722521979), c = l(c, d, g, r, o[f + 6], 23, 76029189), r = l(r, c, d, g, o[f + 9], 4, -640364487), g = l(g, r, c, d, o[f + 12], 11, -421815835), d = l(d, g, r, c, o[f + 15], 16, 530742520), c = l(c, d, g, r, o[f + 2], 23, -995338651), r = u(r, c, d, g, o[f + 0], 6, -198630844), g = u(g, r, c, d, o[f + 7], 10, 1126891415), d = u(d, g, r, c, o[f + 14], 15, -1416354905), c = u(c, d, g, r, o[f + 5], 21, -57434055), r = u(r, c, d, g, o[f + 12], 6, 1700485571), g = u(g, r, c, d, o[f + 3], 10, -1894986606), d = u(d, g, r, c, o[f + 10], 15, -1051523), c = u(c, d, g, r, o[f + 1], 21, -2054922799), r = u(r, c, d, g, o[f + 8], 6, 1873313359), g = u(g, r, c, d, o[f + 15], 10, -30611744), d = u(d, g, r, c, o[f + 6], 15, -1560198380), c = u(c, d, g, r, o[f + 13], 21, 1309151649), r = u(r, c, d, g, o[f + 4], 6, -145523070), g = u(g, r, c, d, o[f + 11], 10, -1120210379), d = u(d, g, r, c, o[f + 2], 15, 718787259), c = u(c, d, g, r, o[f + 9], 21, -343485551), r = i(r, p), c = i(c, h), d = i(d, b), g = i(g, m)
            }
            return n(r) + n(c) + n(d) + n(g)
        }
        var d = "0123456789abcdef";
        return c(e)
    }
    function F(e) {
        function n(e) {
            for (var n = "", t = 7; t >= 0; t--) n += l.charAt(e >> 4 * t & 15);
            return n
        }
        function t(e) {
            for (var n = (e.length + 8 >> 6) + 1, t = new Array(16 * n), i = 0; i < 16 * n; i++) t[i] = 0;
            for (i = 0; i < e.length; i++) t[i >> 2] |= e.charCodeAt(i) << 24 - i % 4 * 8;
            return t[i >> 2] |= 128 << 24 - i % 4 * 8, t[16 * n - 1] = 8 * e.length, t
        }
        function i(e, n) {
            var t = (65535 & e) + (65535 & n);
            return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
        }
        function o(e, n) {
            return e << n | e >>> 32 - n
        }
        function r(e, n, t, i) {
            return e < 20 ? n & t | ~n & i : e < 40 ? n ^ t ^ i : e < 60 ? n & t | n & i | t & i : n ^ t ^ i
        }
        function a(e) {
            return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }
        function s(e) {
            for (var s = t(e), l = new Array(80), u = 1732584193, c = -271733879, d = -1732584194, g = 271733878, f = -1009589776, p = 0; p < s.length; p += 16) {
                for (var h = u, b = c, m = d, v = g, S = f, y = 0; y < 80; y++) {
                    y < 16 ? l[y] = s[p + y] : l[y] = o(l[y - 3] ^ l[y - 8] ^ l[y - 14] ^ l[y - 16], 1);
                    var w = i(i(o(u, 5), r(y, c, d, g)), i(i(f, l[y]), a(y)));
                    f = g, g = d, d = o(c, 30), c = u, u = w
                }
                u = i(u, h), c = i(c, b), d = i(d, m), g = i(g, v), f = i(f, S)
            }
            return n(u) + n(c) + n(d) + n(g) + n(f)
        }
        var l = "0123456789abcdef";
        return s(e)
    }
    var G = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        z = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        q = t(2),
        K = t(8),
        Y = t(4),
        J = t(13),
        Z = t(5),
        X = t(6);
    n.isArray = i;
    var Q = null;
    n.decodeHtmlEntities = o, n.isPushNotificationsSupported = r, n.removeDomElement = a, n.awaitOneSignalInitAndSupported = s, n.stringify = l, n.executeCallback = u, n.logMethodCall = c, n.isValidEmail = d, n.addDomElement = g, n.clearDomElementChildren = f, n.addCssClass = p, n.removeCssClass = h, n.hasCssClass = b;
    var $ = {
        CHROME: 5,
        SAFARI: 7,
        FIREFOX: 8
    };
    n.getDeviceTypeForBrowser = m, n.getConsoleStyle = v, n.delay = S, n.nothing = y, n.executeAndTimeoutPromiseAfter = w, n.when = O, n.guid = E, n.contains = P, n.trimUndefined = I, n.isValidUuid = T, n.normalizeSubdomain = x, n.getUrlQueryParam = _, n.wipeLocalIndexedDb = k, n.wipeIndexedDb = N, n.capitalize = C, n.unsubscribeFromPush = R, n.wipeServiceWorker = A, n.wipeServiceWorkerAndUnsubscribe = M, n.wait = D, n.substringAfter = U, n.once = H, n.getSdkLoadCount = L, n.awaitSdkEvent = W, n.incrementSdkLoadCount = B, n.prepareEmailForHashing = V, n.md5 = j, n.sha1 = F
}, function(e, n, t) {
    var i, o;
    ! function(r, a) {
        "use strict";
        i = a, o = "function" == typeof i ? i.call(n, t, n, e) : i, !(void 0 !== o && (e.exports = o))
    }(this, function() {
        "use strict";
        function e(e) {
            return typeof console !== s && (void 0 !== console[e] ? n(console, e) : void 0 !== console.log ? n(console, "log") : a)
        }
        function n(e, n) {
            var t = e[n];
            if ("function" == typeof t.bind) return t.bind(e);
            try {
                return Function.prototype.bind.call(t, e)
            } catch (i) {
                return function() {
                    return Function.prototype.apply.apply(t, [e, arguments])
                }
            }
        }
        function t(e, n, t) {
            return function() {
                typeof console !== s && (i.call(this, n, t), this[e].apply(this, arguments))
            }
        }
        function i(e, n) {
            for (var t = 0; t < l.length; t++) {
                var i = l[t];
                this[i] = t < e ? a : this.methodFactory(i, e, n)
            }
        }
        function o(n, i, o) {
            return e(n) || t.apply(this, arguments)
        }
        function r(e, n, t) {
            function r(e) {
                var n = (l[e] || "silent").toUpperCase();
                try {
                    return void(window.localStorage[d] = n)
                } catch (t) {}
                try {
                    window.document.cookie = encodeURIComponent(d) + "=" + n + ";"
                } catch (t) {}
            }
            function a() {
                var e;
                try {
                    e = window.localStorage[d]
                } catch (n) {}
                if (typeof e === s) try {
                    var t = window.document.cookie,
                        i = t.indexOf(encodeURIComponent(d) + "=");
                    i && (e = /^([^;]+)/.exec(t.slice(i))[1])
                } catch (n) {}
                return void 0 === c.levels[e] && (e = void 0), e
            }
            var u, c = this,
                d = "loglevel";
            e && (d += ":" + e), c.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            }, c.methodFactory = t || o, c.getLevel = function() {
                return u
            }, c.setLevel = function(n, t) {
                if ("string" == typeof n && void 0 !== c.levels[n.toUpperCase()] && (n = c.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= c.levels.SILENT)) throw "log.setLevel() called with invalid level: " + n;
                if (u = n, t !== !1 && r(n), i.call(c, n, e), typeof console === s && n < c.levels.SILENT) return "No console available for logging"
            }, c.setDefaultLevel = function(e) {
                a() || c.setLevel(e, !1)
            }, c.enableAll = function(e) {
                c.setLevel(c.levels.TRACE, e)
            }, c.disableAll = function(e) {
                c.setLevel(c.levels.SILENT, e)
            };
            var g = a();
            null == g && (g = null == n ? "WARN" : n), c.setLevel(g, !1)
        }
        var a = function() {},
            s = "undefined",
            l = ["trace", "debug", "info", "warn", "error"],
            u = new r,
            c = {};
        u.getLogger = function(e) {
            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
            var n = c[e];
            return n || (n = c[e] = new r(e, u.getLevel(), u.methodFactory)), n
        };
        var d = typeof window !== s ? window.log : void 0;
        return u.noConflict = function() {
            return typeof window !== s && window.log === u && (window.log = d), u
        }, u
    })
}, function(e, n, t) {
    "use strict";
    var i = t(2),
        o = t(4),
        r = t(1),
        a = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        s = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        l = {
            notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
            subscriptionChange: "onesignal.subscription.changed",
            customPromptClick: "onesignal.prompt.custom.clicked"
        },
        u = function() {
            function e() {}
            return e.trigger = function(n, t, u) {
                if (void 0 === u && (u = null), !r.contains(a, n)) {
                    var c = t;
                    if (u) var d = r.capitalize(o["default"].getEnv()) + " в¬ё " + r.capitalize(u);
                    else var d = r.capitalize(o["default"].getEnv());
                    c || c === !1 ? i.debug("(" + d + ") В» %c" + n + ":", r.getConsoleStyle("event"), c) : i.debug("(" + d + ") В» %c" + n, r.getConsoleStyle("event"))
                }
                if (o["default"].isBrowser()) {
                    if (n === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    OneSignal.emit(n, t)
                }
                if (l.hasOwnProperty(n)) {
                    var g = l[n];
                    e._triggerLegacy(g, t)
                }
                if (o["default"].isBrowser() && (o["default"].isPopup() || o["default"].isIframe())) {
                    opener || parent ? r.contains(s, n) && (o["default"].isPopup() ? OneSignal.popupPostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                            eventName: n,
                            eventData: t
                        }) : OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                            eventName: n,
                            eventData: t
                        })) : i.error("Could not send event '" + n + "' back to host page because no creator (opener or parent) found!")
                }
            }, e._triggerLegacy = function(e, n) {
                var t = new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                });
                window.dispatchEvent(t)
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = u
}, function(e, n, t) {
    "use strict";
    var i = function() {
        function e() {}
        return Object.defineProperty(e, "SERVICE_WORKER", {
            get: function() {
                return "ServiceWorker"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "HOST", {
            get: function() {
                return "host"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "POPUP", {
            get: function() {
                return "popup"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "IFRAME", {
            get: function() {
                return "iFrame"
            },
            enumerable: !0,
            configurable: !0
        }), e.isEs6DebuggingModule = function() {
            return !1
        }, e.getEnv = function() {
            return "undefined" != typeof window ? window === window.top ? location.href.indexOf("initOneSignal") !== -1 || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.indexOf(".localhost") !== -1 && e.isDev()) ? e.POPUP : e.HOST : "/webPushIframe" === location.pathname || "/webPushModal" === location.pathname ? e.IFRAME : e.CUSTOM_SUBDOMAIN : "undefined" != typeof WorkerLocation && location instanceof WorkerLocation ? e.SERVICE_WORKER : void 0
        }, e.isServiceWorker = function() {
            return e.getEnv() === e.SERVICE_WORKER
        }, e.isHost = function() {
            return e.getEnv() === e.HOST
        }, e.isPopup = function() {
            return e.getEnv() === e.POPUP
        }, Object.defineProperty(e, "CUSTOM_SUBDOMAIN", {
            get: function() {
                return "custom_subdomain"
            },
            enumerable: !0,
            configurable: !0
        }), e.isIframe = function() {
            return e.getEnv() === e.IFRAME
        }, e.isBrowser = function() {
            return "undefined" != typeof window
        }, e.isStaging = function() {
            return !1
        }, e.isDev = function() {
            return !1
        }, e.isTest = function() {
            return !1
        }, e.isCustomSubdomain = function() {
            return e.getEnv() === e.CUSTOM_SUBDOMAIN
        }, Object.defineProperty(e, "TRADITIONAL_CHINESE_LANGUAGE_TAG", {
            get: function() {
                return ["tw", "hant"]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "SIMPLIFIED_CHINESE_LANGUAGE_TAG", {
            get: function() {
                return ["cn", "hans"]
            },
            enumerable: !0,
            configurable: !0
        }), e.getLanguage = function(n) {
            var t = n || navigator.language;
            if (t) {
                t = t.toLowerCase();
                var i = t.split("-");
                if ("zh" == i[0]) {
                    for (var o = 0, r = e.TRADITIONAL_CHINESE_LANGUAGE_TAG; o < r.length; o++) {
                        var a = r[o];
                        if (i.indexOf(a) !== -1) return "zh-Hant"
                    }
                    for (var s = 0, l = e.SIMPLIFIED_CHINESE_LANGUAGE_TAG; s < l.length; s++) {
                        var u = l[s];
                        if (i.indexOf(u) !== -1) return "zh-Hans"
                    }
                    return "zh-Hant"
                }
                return i[0].substring(0, 2)
            }
            return "en"
        }, e.supportsServiceWorkers = function() {
            return "serviceWorker" in navigator
        }, e
    }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = i
}, function(e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        o = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        r = t(19),
        a = t(18),
        s = t(3),
        l = t(13),
        u = t(4),
        c = t(51),
        d = t(55),
        g = t(50),
        f = t(53),
        p = t(54),
        h = t(6),
        b = function() {
            function e() {}
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        REBUILT: "dbRebuilt",
                        RETRIEVED: "dbRetrieved",
                        SET: "dbSet",
                        REMOVED: "dbRemoved"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e._getReturnHelper = function(e, n, t) {
                switch (e) {
                    case "Options":
                        return t && n ? t.value : t && !n ? t : null;
                    case "Ids":
                        return t && n ? t.id : t && !n ? t : null;
                    case "NotificationOpened":
                        return t && n ? {
                            data: t.data,
                            timestamp: t.timestamp
                        } : t && !n ? t : null;
                    default:
                        return t ? t : null
                }
            }, e.get = function(n, t) {
                return new Promise(function(i) {
                    return u["default"].isServiceWorker() || !h["default"].isUsingSubscriptionWorkaround() ? l["default"].get(n, t).then(function(o) {
                        var r = e._getReturnHelper(n, t, o);
                        s["default"].trigger(e.EVENTS.RETRIEVED, {
                            table: n,
                            key: t,
                            result: r
                        }), i(r)
                    }) : void OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: n,
                        key: t
                    }], function(o) {
                        var r = o.data[0];
                        s["default"].trigger(e.EVENTS.RETRIEVED, {
                            table: n,
                            key: t,
                            result: r
                        }), i(r)
                    })
                })
            }, e.put = function(n, t) {
                return new Promise(function(i, o) {
                    return u["default"].isServiceWorker() || !h["default"].isUsingSubscriptionWorkaround() ? l["default"].put(n, t).then(function() {
                        s["default"].trigger(e.EVENTS.SET, t), i()
                    }) : void OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: n,
                        keypath: t
                    }], function(r) {
                        r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? (s["default"].trigger(e.EVENTS.SET, t), i()) : o("(Database) Attempted remote IndexedDB put(" + n + ", " + t + "), but did not get success response.")
                    })
                })
            }, e.remove = function(n, t) {
                return new Promise(function(i, o) {
                    return u["default"].isServiceWorker() || !h["default"].isUsingSubscriptionWorkaround() ? l["default"].remove(n, t).then(function() {
                        s["default"].trigger(e.EVENTS.REMOVED, [n, t]), i()
                    }) : void OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                        table: n,
                        keypath: t
                    }], function(r) {
                        r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? (s["default"].trigger(e.EVENTS.REMOVED, [n, t]), i()) : o("(Database) Attempted remote IndexedDB remove(" + n + ", " + t + "), but did not get success response.")
                    })
                })
            }, e.getAppConfig = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r, a;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = new g.AppConfig, t = n, [4, e.get("Ids", "appId")];
                            case 1:
                                return t.appId = o.sent(), i = n, [4, e.get("Options", "subdomain")];
                            case 2:
                                return i.subdomain = o.sent(), r = n, [4, e.get("Options", "autoRegister")];
                            case 3:
                                return r.autoRegister = o.sent(), a = n, [4, e.get("Options", "serviceWorkerConfig")];
                            case 4:
                                return a.serviceWorkerConfig = o.sent(), [2, n]
                        }
                    })
                })
            }, e.setAppConfig = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return n.appId ? [4, e.put("Ids", {
                                    type: "appId",
                                    id: n.appId
                                })] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return n.subdomain ? [4, e.put("Options", {
                                    key: "subdomain",
                                    value: n.subdomain
                                })] : [3, 4];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return n.autoRegister ? [4, e.put("Options", {
                                    key: "autoRegister",
                                    value: n.autoRegister
                                })] : [3, 6];
                            case 5:
                                t.sent(), t.label = 6;
                            case 6:
                                return n.serviceWorkerConfig ? [4, e.put("Options", {
                                    key: "serviceWorkerConfig",
                                    value: n.serviceWorkerConfig
                                })] : [3, 8];
                            case 7:
                                t.sent(), t.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.getAppState = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r, a;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = new c.AppState, t = n, [4, e.get("Options", "defaultUrl")];
                            case 1:
                                return t.defaultNotificationUrl = o.sent(), i = n, [4, e.get("Options", "defaultTitle")];
                            case 2:
                                return i.defaultNotificationTitle = o.sent(), r = n, [4, e.get("Options", "isPushEnabled")];
                            case 3:
                                return r.lastKnownPushEnabled = o.sent(), a = n, [4, e.get("NotificationOpened")];
                            case 4:
                                return a.clickedNotifications = o.sent(), [2, n]
                        }
                    })
                })
            }, e.setAppState = function(n) {
                return i(this, void 0, void 0, function() {
                    var t, i, r, a, s;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n.defaultNotificationUrl ? [4, e.put("Options", {
                                    key: "defaultUrl",
                                    value: n.defaultNotificationUrl
                                })] : [3, 2];
                            case 1:
                                o.sent(), o.label = 2;
                            case 2:
                                return n.defaultNotificationTitle ? [4, e.put("Options", {
                                    key: "defaultTitle",
                                    value: n.defaultNotificationTitle
                                })] : [3, 4];
                            case 3:
                                o.sent(), o.label = 4;
                            case 4:
                                return null == n.lastKnownPushEnabled ? [3, 6] : [4, e.put("Options", {
                                    key: "isPushEnabled",
                                    value: n.lastKnownPushEnabled
                                })];
                            case 5:
                                o.sent(), o.label = 6;
                            case 6:
                                if (!n.clickedNotifications) return [3, 12];
                                t = Object.keys(n.clickedNotifications), i = 0, r = t, o.label = 7;
                            case 7:
                                return i < r.length ? (a = r[i], s = n.clickedNotifications[a], s ? [4, e.put("NotificationOpened", {
                                    url: a,
                                    data: s.data,
                                    timestamp: s.timestamp
                                })] : [3, 9]) : [3, 12];
                            case 8:
                                return o.sent(), [3, 11];
                            case 9:
                                return null !== s ? [3, 11] : [4, e.remove("NotificationOpened", a)];
                            case 10:
                                o.sent(), o.label = 11;
                            case 11:
                                return i++, [3, 7];
                            case 12:
                                return [2]
                        }
                    })
                })
            }, e.getServiceWorkerConfig = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r, a;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = new f.ServiceWorkerConfig, t = n, [4, e.get("Options", "workerScope")];
                            case 1:
                                return t.scope = o.sent(), i = n, [4, e.get("Options", "workerName")];
                            case 2:
                                return i.workerName = o.sent(), r = n, [4, e.get("Options", "updaterWorkerName")];
                            case 3:
                                return r.updaterWorkerName = o.sent(), a = n, [4, e.get("Options", "workerFilePath")];
                            case 4:
                                return a.workerFilePath = o.sent(), [2, n]
                        }
                    })
                })
            }, e.setServiceWorkerConfig = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return n.scope ? [4, e.put("Options", {
                                    key: "workerScope",
                                    value: n.scope
                                })] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return n.workerName ? [4, e.put("Options", {
                                    key: "workerName",
                                    value: n.workerName
                                })] : [3, 4];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return n.updaterWorkerName ? [4, e.put("Options", {
                                    key: "updaterWorkerName",
                                    value: n.updaterWorkerName
                                })] : [3, 6];
                            case 5:
                                t.sent(), t.label = 6;
                            case 6:
                                return n.workerFilePath ? [4, e.put("Options", {
                                    key: "workerFilePath",
                                    value: n.workerFilePath
                                })] : [3, 8];
                            case 7:
                                t.sent(), t.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.getServiceWorkerState = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = new p.ServiceWorkerState, t = n, [4, e.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION")];
                            case 1:
                                return t.workerVersion = o.sent(), i = n, [4, e.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION")];
                            case 2:
                                return i.updaterWorkerVersion = o.sent(), r = n, [4, e.get("Ids", "backupNotification")];
                            case 3:
                                return r.backupNotification = o.sent(), [2, n]
                        }
                    })
                })
            }, e.setServiceWorkerState = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return n.workerVersion ? [4, e.put("Ids", {
                                    type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                                    id: n.workerVersion
                                })] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return n.updaterWorkerVersion ? [4, e.put("Ids", {
                                    type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                                    id: n.updaterWorkerVersion
                                })] : [3, 4];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return n.backupNotification ? [4, e.put("Ids", {
                                    type: "backupNotification",
                                    id: n.backupNotification
                                })] : [3, 6];
                            case 5:
                                t.sent(), t.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, e.getSubscription = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r, a, s;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = new d.Subscription, t = n, [4, e.get("Ids", "userId")];
                            case 1:
                                return t.deviceId = o.sent(), i = n, [4, e.get("Options", "subscriptionEndpoint")];
                            case 2:
                                return i.pushEndpoint = o.sent(), r = n, [4, e.get("Ids", "registrationId")];
                            case 3:
                                return r.pushToken = o.sent(), [4, e.get("Options", "optedOut")];
                            case 4:
                                return a = o.sent(), [4, e.get("Options", "subscription")];
                            case 5:
                                return s = o.sent(), null != a ? n.optedOut = a : null == s ? n.optedOut = !1 : n.optedOut = !s, [2, n]
                        }
                    })
                })
            }, e.setSubscription = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return n.deviceId ? [4, e.put("Ids", {
                                    type: "userId",
                                    id: n.deviceId
                                })] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return n.pushEndpoint ? [4, e.put("Options", {
                                    key: "subscriptionEndpoint",
                                    value: n.pushEndpoint
                                })] : [3, 4];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return n.pushToken ? [4, e.put("Ids", {
                                    type: "registrationId",
                                    id: n.pushToken
                                })] : [3, 6];
                            case 5:
                                t.sent(), t.label = 6;
                            case 6:
                                return null == n.optedOut ? [3, 8] : [4, e.put("Options", {
                                    key: "optedOut",
                                    value: n.optedOut
                                })];
                            case 7:
                                t.sent(), t.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.rebuild = function() {
                return Promise.all([e.remove("Ids"), e.remove("NotificationOpened"), e.remove("Options")])
            }, e.printIds = function() {
                return Promise.all([e.get("Ids", "appId"), e.get("Ids", "registrationId"), e.get("Ids", "userId")]).then(function(e) {
                    var n = e[0],
                        t = e[1],
                        i = e[2];
                    console.table ? console.table({
                        "OneSignal Database IDs": {
                            "App ID": n,
                            "Registration ID": t,
                            "User ID": i
                        }
                    }) : (log.info("App ID:", n), log.info("Registration ID:", t), log.info("User ID:", i))
                })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = b, a.merge(b, new r)
}, function(e, n, t) {
    "use strict";
    var i = t(4),
        o = t(2),
        r = t(3),
        a = t(5),
        s = t(8),
        l = t(1),
        u = t(10),
        c = t(17),
        d = t(12),
        g = t(34),
        f = t(36),
        p = function() {
            function e() {}
            return e.shouldResetUserSubscription = function() {
                return Promise.all([OneSignal.config.dangerouslyResetUserSubscriptions, a["default"].get("Options", "userSubscriptionResetToken"), e.isUsingSubscriptionWorkaround()]).then(function(e) {
                    var n = e[0],
                        t = e[1],
                        i = e[2];
                    return n && t !== OneSignal.config.dangerouslyResetUserSubscriptions && !i;
                })
            }, e.checkAndWipeUserSubscription = function() {
                return Promise.all([OneSignal.isPushNotificationsEnabled(), e.shouldResetUserSubscription()]).then(function(e) {
                    var n = e[0];
                    if (e[1]) return o.warn("OneSignal: Resetting user subscription. Wiping IndexedDB, unsubscribing from, and resubscribing to push..."), sessionStorage.clear(), a["default"].rebuild().then(function() {
                        return a["default"].put("Options", {
                            key: "pageTitle",
                            value: document.title
                        })
                    }).then(function() {
                        return l.unsubscribeFromPush()
                    }).then(function() {
                        return a["default"].put("Options", {
                            key: "userSubscriptionResetToken",
                            value: OneSignal.config.dangerouslyResetUserSubscriptions
                        })
                    }).then(function() {
                        return n ? (OneSignal.__doNotShowWelcomeNotification = !0, o.warn("Wiped subscription and attempting to resubscribe."), a["default"].put("Ids", {
                            type: "appId",
                            id: OneSignal.config.appId
                        })) : void Promise.reject("Wiped subscription, but not resubscribing because user was not originally subscribed.")
                    }).then(function() {
                        OneSignal.registerForPushNotifications()
                    })
                })
            }, e.registerForW3CPush = function(e) {
                return o.debug("Called %cregisterForW3CPush(" + JSON.stringify(e) + ")", l.getConsoleStyle("code")), a["default"].get("Ids", "registrationId").then(function(n) {
                    n && e.fromRegisterFor && "granted" == window.Notification.permission && null != navigator.serviceWorker.controller || navigator.serviceWorker.getRegistration().then(function(e) {
                        var n = "";
                        if (OneSignal.config.path && (n = OneSignal.config.path), "undefined" == typeof e) c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH);
                        else if (e.active) {
                            var t = e.active.scriptURL;
                            l.contains(t, n + OneSignal.SERVICE_WORKER_PATH) ? a["default"].get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION").then(function(e) {
                                e ? e != OneSignal._VERSION ? (o.info("Installing new service worker (" + e + " -> " + OneSignal._VERSION + ")"), c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_UPDATER_PATH)) : c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH) : c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_UPDATER_PATH)
                            }) : l.contains(t, n + OneSignal.SERVICE_WORKER_UPDATER_PATH) ? a["default"].get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION").then(function(e) {
                                e ? e != OneSignal._VERSION ? (o.info("Installing new service worker (" + e + " -> " + OneSignal._VERSION + ")"), c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH)) : c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_UPDATER_PATH) : c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH)
                            }) : (o.info("Unregistering previous service worker:", e), e.unregister().then(function(e) {
                                o.info("Result of unregistering:", e), c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH)
                            }))
                        } else null == e.installing && c["default"].registerServiceWorker(n + OneSignal.SERVICE_WORKER_PATH)
                    })
                })
            }, e.enableNotifications = function(n) {
                return o.debug("Called %cenableNotifications()", l.getConsoleStyle("code")), "PushManager" in window ? "denied" === window.Notification.permission ? void o.warn("The user has blocked notifications.") : (o.debug("Calling %cnavigator.serviceWorker.ready() ...", l.getConsoleStyle("code")), void navigator.serviceWorker.ready.then(function(n) {
                    o.debug("Finished calling %cnavigator.serviceWorker.ready", l.getConsoleStyle("code")), u["default"].establishServiceWorkerChannel(n), e.subscribeForPush(n)
                })) : (o.info("Push messaging is not supported. No PushManager."), void u["default"].beginTemporaryBrowserSession())
            }, e.isUsingSubscriptionWorkaround = function() {
                if (!OneSignal.config) throw new Error("(" + i["default"].getEnv() + ") isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.");
                return !s.safari && (!(e.isLocalhostAllowedAsSecureOrigin() && "localhost" === location.hostname || "127.0.0.1" === location.hostname) && (i["default"].isHost() && (!!OneSignal.config.subdomainName || "http:" === location.protocol)))
            }, e.isLocalhostAllowedAsSecureOrigin = function() {
                return OneSignal.config && OneSignal.config.allowLocalhostAsSecureOrigin === !0
            }, e.subscribeForPush = function(e) {
                o.debug("Called %c_subscribeForPush()", l.getConsoleStyle("code"));
                var n = "";
                OneSignal.getNotificationPermission().then(function(e) {
                    n = e
                }).then(function() {
                    return o.debug("Calling %cServiceWorkerRegistration.pushManager.subscribe()", l.getConsoleStyle("code")), r["default"].trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED), u["default"].requestNotificationPermissionPromise()
                }).then(function(n) {
                    if ("granted" !== n) throw new g["default"];
                    return l.executeAndTimeoutPromiseAfter(e.pushManager.subscribe({
                        userVisibleOnly: !0
                    }), 15e3, "A possible Chrome bug (https://bugs.chromium.org/p/chromium/issues/detail?id=623062) is preventing this subscription from completing.")
                }).then(function(e) {
                    o.debug("Finished calling %cServiceWorkerRegistration.pushManager.subscribe()", l.getConsoleStyle("code")), o.debug("Subscription details:", e), OneSignal._sessionInitAlreadyRunning = !1, sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", window.Notification.permission), u["default"].getAppId().then(function(n) {
                        o.debug("Finished subscribing for push via pushManager.subscribe().");
                        var t = {};
                        if (e) {
                            if ("undefined" != typeof e.subscriptionId ? t.endpointOrToken = e.subscriptionId : t.endpointOrToken = e.endpoint, e.getKey) {
                                var i = null;
                                try {
                                    i = e.getKey("p256dh")
                                } catch (r) {}
                                var a = null;
                                try {
                                    a = e.getKey("auth")
                                } catch (r) {}
                                if (i) {
                                    var s = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                                    t.p256dh = s
                                }
                                if (a) {
                                    var l = btoa(String.fromCharCode.apply(null, new Uint8Array(a)));
                                    t.auth = l
                                }
                            }
                        } else o.warn("Could not subscribe your browser for push notifications.");
                        OneSignal._thisIsThePopup ? OneSignal.popupPostmam.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {
                            subscriptionInfo: t
                        }, function(e) {
                            if (e.data.progress === !0) {
                                o.debug("Got message from host page that remote reg. is in progress, closing popup.");
                                opener || parent;
                                opener && window.close()
                            } else o.debug("Got message from host page that remote reg. could not be finished.")
                        }) : u["default"].registerWithOneSignal(n, t)
                    })
                })["catch"](function(e) {
                    if (OneSignal._sessionInitAlreadyRunning = !1, "Registration failed - no sender id provided" === e.message || "Registration failed - manifest empty or missing" === e.message) {
                        if (document.querySelector("link[rel=manifest]")) {
                            var n = document.querySelector("link[rel=manifest]").parentNode.tagName.toLowerCase(),
                                t = document.querySelector("link[rel=manifest]").outerHTML,
                                i = document.querySelector("link[rel=manifest]").href;
                            if ("head" !== n) o.warn("OneSignal: Your manifest %c" + t, l.getConsoleStyle("code"), "must be referenced in the <head> tag to be detected properly. It is currently referenced in <${manifestParentTagname}>. Please see step 3.1 at https://documentation.onesignal.com/docs/web-push-sdk-setup-https.");
                            else {
                                var r = new URL(i).origin,
                                    a = location.origin;
                                a !== r ? o.warn("OneSignal: Your manifest is being served from " + r + ", which is " + ("different from the current page's origin of " + a + ". Please serve your ") + "manifest from the same origin as your page's. If you are using a content delivery network (CDN), please add an exception so that the manifest is not served by your CDN. WordPress users, please see https://documentation.onesignal.com/docs/troubleshooting-web-push#section-wordpress-cdn-support.") : o.warn("OneSignal: Please check your manifest at " + i + ". The %cgcm_sender_id", l.getConsoleStyle("code"), "field is missing or invalid, and a valid value is required. Please see step 2 at https://documentation.onesignal.com/docs/web-push-sdk-setup-https.")
                            }
                        } else "https:" === location.protocol && o.warn("OneSignal: You must reference a %cmanifest.json", l.getConsoleStyle("code"), "in the <head> of your page. Please see step 2 at https://documentation.onesignal.com/docs/web-push-sdk-setup-https.")
                    } else o.error("Error while subscribing for push:", e);
                    OneSignal.getNotificationPermission().then(function(e) {
                        "default" === e && (d["default"].triggerNotificationPermissionChanged(!0), f["default"].markHttpsNativePromptDismissed()), OneSignal._usingNativePermissionHook || d["default"].triggerNotificationPermissionChanged(), opener && OneSignal._thisIsThePopup && window.close()
                    }), opener && OneSignal._thisIsThePopup && window.close()
                })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = p
}, function(e, n, t) {
    "use strict";
    var i = t(4);
    n.DEV_HOST = "https://oregon:3001", n.DEV_FRAME_HOST = "https://washington.localhost:3001", n.DEV_PREFIX = "Dev-", n.PROD_HOST = "https://onesignal.com", n.STAGING_HOST = "https://onesignal-staging.pw", n.STAGING_FRAME_HOST = "https://washington.onesignal-staging.pw", n.STAGING_PREFIX = "Staging-";
    var o;
    n.HOST_URL = o;
    var r;
    n.API_URL = r, i["default"].isDev() ? (n.HOST_URL = o = n.DEV_HOST, n.API_URL = r = n.DEV_HOST + "/api/v1/") : i["default"].isStaging() ? (n.HOST_URL = o = n.STAGING_HOST, n.API_URL = r = n.STAGING_HOST + "/api/v1/") : (n.HOST_URL = o = n.PROD_HOST, n.API_URL = r = n.PROD_HOST + "/api/v1/")
}, function(e, n, t) {
    ! function(n, i) {
        "undefined" != typeof e && e.exports ? e.exports = i() : t(75)(n, i)
    }("bowser", function() {
        function e(e) {
            function n(n) {
                var t = e.match(n);
                return t && t.length > 1 && t[1] || ""
            }
            function t(n) {
                var t = e.match(n);
                return t && t.length > 1 && t[2] || ""
            }
            var i, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                r = /like android/i.test(e),
                s = !r && /android/i.test(e),
                l = /nexus\s*[0-6]\s*/i.test(e),
                u = !l && /nexus\s*[0-9]+/i.test(e),
                c = /CrOS/.test(e),
                d = /silk/i.test(e),
                g = /sailfish/i.test(e),
                f = /tizen/i.test(e),
                p = /(web|hpw)os/i.test(e),
                h = /windows phone/i.test(e),
                b = (/SamsungBrowser/i.test(e), !h && /windows/i.test(e)),
                m = !o && !d && /macintosh/i.test(e),
                v = !s && !g && !f && !p && /linux/i.test(e),
                S = n(/edge\/(\d+(\.\d+)?)/i),
                y = n(/version\/(\d+(\.\d+)?)/i),
                w = /tablet/i.test(e),
                O = !w && /[^-]mobi/i.test(e),
                E = /xbox/i.test(e);
            /opera/i.test(e) ? i = {
                name: "Opera",
                opera: a,
                version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr|opios/i.test(e) ? i = {
                name: "Opera",
                opera: a,
                version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
            } : /SamsungBrowser/i.test(e) ? i = {
                name: "Samsung Internet for Android",
                samsungBrowser: a,
                version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(e) ? i = {
                name: "Opera Coast",
                coast: a,
                version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(e) ? i = {
                name: "Yandex Browser",
                yandexbrowser: a,
                version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(e) ? i = {
                name: "UC Browser",
                ucbrowser: a,
                version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(e) ? i = {
                name: "Maxthon",
                maxthon: a,
                version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(e) ? i = {
                name: "Epiphany",
                epiphany: a,
                version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(e) ? i = {
                name: "Puffin",
                puffin: a,
                version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(e) ? i = {
                name: "Sleipnir",
                sleipnir: a,
                version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(e) ? i = {
                name: "K-Meleon",
                kMeleon: a,
                version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : h ? (i = {
                name: "Windows Phone",
                windowsphone: a
            }, S ? (i.msedge = a, i.version = S) : (i.msie = a, i.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? i = {
                name: "Internet Explorer",
                msie: a,
                version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : c ? i = {
                name: "Chrome",
                chromeos: a,
                chromeBook: a,
                chrome: a,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(e) ? i = {
                name: "Microsoft Edge",
                msedge: a,
                version: S
            } : /vivaldi/i.test(e) ? i = {
                name: "Vivaldi",
                vivaldi: a,
                version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
            } : g ? i = {
                name: "Sailfish",
                sailfish: a,
                version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(e) ? i = {
                name: "SeaMonkey",
                seamonkey: a,
                version: n(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(e) ? (i = {
                name: "Firefox",
                firefox: a,
                version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (i.firefoxos = a)) : d ? i = {
                name: "Amazon Silk",
                silk: a,
                version: n(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(e) ? i = {
                name: "PhantomJS",
                phantom: a,
                version: n(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(e) ? i = {
                name: "SlimerJS",
                slimer: a,
                version: n(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? i = {
                name: "BlackBerry",
                blackberry: a,
                version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : p ? (i = {
                name: "WebOS",
                webos: a,
                version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(e) && (i.touchpad = a)) : /bada/i.test(e) ? i = {
                name: "Bada",
                bada: a,
                version: n(/dolfin\/(\d+(\.\d+)?)/i)
            } : f ? i = {
                name: "Tizen",
                tizen: a,
                version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
            } : /qupzilla/i.test(e) ? i = {
                name: "QupZilla",
                qupzilla: a,
                version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
            } : /chromium/i.test(e) ? i = {
                name: "Chromium",
                chromium: a,
                version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
            } : /chrome|crios|crmo/i.test(e) ? i = {
                name: "Chrome",
                chrome: a,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : s ? i = {
                name: "Android",
                version: y
            } : /safari|applewebkit/i.test(e) ? (i = {
                name: "Safari",
                safari: a
            }, y && (i.version = y)) : o ? (i = {
                name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
            }, y && (i.version = y)) : i = /googlebot/i.test(e) ? {
                name: "Googlebot",
                googlebot: a,
                version: n(/googlebot\/(\d+(\.\d+))/i) || y
            } : {
                name: n(/^(.*)\/(.*) /),
                version: t(/^(.*)\/(.*) /)
            }, !i.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (i.name = i.name || "Blink", i.blink = a) : (i.name = i.name || "Webkit", i.webkit = a), !i.version && y && (i.version = y)) : !i.opera && /gecko\//i.test(e) && (i.name = i.name || "Gecko", i.gecko = a, i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)), i.msedge || !s && !i.silk ? o ? (i[o] = a, i.ios = a) : m ? i.mac = a : E ? i.xbox = a : b ? i.windows = a : v && (i.linux = a) : i.android = a;
            var P = "";
            i.windowsphone ? P = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (P = n(/os (\d+([_\s]\d+)*) like mac os x/i), P = P.replace(/[_\s]/g, ".")) : s ? P = n(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? P = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? P = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? P = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (P = n(/tizen[\/\s](\d+(\.\d+)*)/i)), P && (i.osversion = P);
            var I = P.split(".")[0];
            return w || u || "ipad" == o || s && (3 == I || I >= 4 && !O) || i.silk ? i.tablet = a : (O || "iphone" == o || "ipod" == o || s || l || i.blackberry || i.webos || i.bada) && (i.mobile = a), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = a : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = a : i.x = a, i
        }
        function n(e) {
            return e.split(".").length
        }
        function t(e, n) {
            var t, i = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, n);
            for (t = 0; t < e.length; t++) i.push(n(e[t]));
            return i
        }
        function i(e) {
            for (var i = Math.max(n(e[0]), n(e[1])), o = t(e, function(e) {
                var o = i - n(e);
                return e += new Array(o + 1).join(".0"), t(e.split("."), function(e) {
                    return new Array(20 - e.length).join("0") + e
                }).reverse()
            }); --i >= 0;) {
                if (o[0][i] > o[1][i]) return 1;
                if (o[0][i] !== o[1][i]) return -1;
                if (0 === i) return 0
            }
        }
        function o(n, t, o) {
            var r = s;
            "string" == typeof t && (o = t, t = void 0), void 0 === t && (t = !1), o && (r = e(o));
            var a = "" + r.version;
            for (var l in n)
                if (n.hasOwnProperty(l) && r[l]) return i([a, n[l]]) < 0;
            return t
        }
        function r(e, n, t) {
            return !o(e, n, t)
        }
        var a = !0,
            s = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
        return s.test = function(e) {
            for (var n = 0; n < e.length; ++n) {
                var t = e[n];
                if ("string" == typeof t && t in s) return !0
            }
            return !1
        }, s.isUnsupportedBrowser = o, s.compareVersions = i, s.check = r, s._detect = e, s
    })
}, function(e, n) {
    "use strict";
    function t(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    function i() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
            if ("0123456789" !== Object.getOwnPropertyNames(n).map(function(e) {
                    return n[e]
                }).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                i[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (o) {
            return !1
        }
    }
    var o = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
    e.exports = i() ? Object.assign : function(e, n) {
        for (var i, a, s = t(e), l = 1; l < arguments.length; l++) {
            i = Object(arguments[l]);
            for (var u in i) o.call(i, u) && (s[u] = i[u]);
            if (Object.getOwnPropertySymbols) {
                a = Object.getOwnPropertySymbols(i);
                for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (s[a[c]] = i[a[c]])
            }
        }
        return s
    }
}, function(e, n, t) {
    (function(e) {
        "use strict";
        var i = this && this.__awaiter || function(e, n, t, i) {
                    return new(t || (t = Promise))(function(o, r) {
                        function a(e) {
                            try {
                                l(i.next(e))
                            } catch (n) {
                                r(n)
                            }
                        }
                        function s(e) {
                            try {
                                l(i["throw"](e))
                            } catch (n) {
                                r(n)
                            }
                        }
                        function l(e) {
                            e.done ? o(e.value) : new t(function(n) {
                                n(e.value)
                            }).then(a, s)
                        }
                        l((i = i.apply(e, n)).next())
                    })
                },
            o = this && this.__generator || function(e, n) {
                    function t(e) {
                        return function(n) {
                            return i([e, n])
                        }
                    }
                    function i(t) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, a && (t = [0, a.value]), t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = n.call(e, s)
                        } catch (i) {
                            t = [6, i], r = 0
                        } finally {
                            o = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                    var o, r, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return {
                        next: t(0),
                        "throw": t(1),
                        "return": t(2)
                    }
                },
            r = t(7),
            a = t(4),
            s = t(15),
            l = t(2),
            u = t(3),
            c = t(5),
            d = t(8),
            g = t(1),
            f = t(9),
            p = t(28),
            h = t(26),
            b = t(49),
            m = t(16),
            v = t(6),
            S = t(12),
            y = function() {
                function n() {}
                return n.fixWordpressManifestIfMisplaced = function() {
                    var e = document.querySelectorAll("link[rel=manifest]");
                    if (e && !(e.length <= 1))
                        for (var n = 0; n < e.length; n++) {
                            var t = e[n],
                                i = t.href;
                            g.contains(i, "gcm_sender_id") && (document.querySelector("head").insertBefore(t, document.querySelector("head").children[0]), l.info("OneSignal: Moved the WordPress push <manifest> to the first element in <head>."))
                        }
                }, n.getNotificationTypeFromOptIn = function(e) {
                    return 1 == e || null == e ? 1 : -2
                }, n.getNotificationPermission = function(e) {
                    return g.awaitOneSignalInitAndSupported().then(function() {
                        return new Promise(function(n, t) {
                            v["default"].isUsingSubscriptionWorkaround() ? OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                                safariWebId: e
                            }, function(e) {
                                n(e.data)
                            }) : d.safari ? e ? n(window.safari.pushNotification.permission(e).permission) : l.debug("OneSignal: Invalid init option safari_web_id %c" + e, g.getConsoleStyle("code"), ". Please pass in a valid safari_web_id to OneSignal init.") : n(window.Notification.permission)
                        })
                    })
                }, n.beginTemporaryBrowserSession = function() {
                    if (l.debug("OneSignal: Marking browser session as continuing."), sessionStorage.setItem("ONE_SIGNAL_SESSION", "true"), a["default"].isPopup()) {
                        if (!OneSignal.popupPostmam) return;
                        OneSignal.popupPostmam.message(OneSignal.POSTMAM_COMMANDS.BEGIN_BROWSING_SESSION)
                    }
                }, n.isUsingHttpPermissionRequest = function() {
                    return OneSignal.config.httpPermissionRequest && 1 == OneSignal.config.httpPermissionRequest.enable && (a["default"].isIframe() || a["default"].isHost() && v["default"].isUsingSubscriptionWorkaround())
                }, n.isUsingCustomHttpPermissionRequestPostModal = function() {
                    return OneSignal.config.httpPermissionRequest && 1 == OneSignal.config.httpPermissionRequest.useCustomModal
                }, n.wasHttpsNativePromptDismissed = function() {
                    return "dismissed" === h.get("onesignal-notification-prompt")
                }, n.markHttpPopoverShown = function() {
                    sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
                }, n.isHttpPromptAlreadyShown = function() {
                    return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
                }, n.isContinuingBrowserSession = function() {
                    return "true" == sessionStorage.getItem("ONE_SIGNAL_SESSION")
                }, n.registerWithOneSignal = function(e, t) {
                    var i = g.getDeviceTypeForBrowser();
                    return Promise.all([OneSignal.getUserId(), OneSignal.getSubscription()]).then(function(o) {
                        var r = o[0],
                            l = o[1],
                            u = r ? "players/" + r + "/on_session" : "players",
                            g = {
                                app_id: e,
                                device_type: i,
                                language: a["default"].getLanguage(),
                                timezone: (new Date).getTimezoneOffset() * -60,
                                device_model: navigator.platform + " " + d.name,
                                device_os: d.version,
                                sdk: OneSignal._VERSION,
                                notification_types: n.getNotificationTypeFromOptIn(l)
                            };
                        if (t) {
                            g.identifier = t.endpointOrToken;
                            var f = t.endpointOrToken.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "");
                            c["default"].put("Ids", {
                                type: "registrationId",
                                id: f
                            }), t.auth && (g.web_auth = t.auth), t.p256dh && (g.web_p256 = t.p256dh)
                        }
                        return s["default"].post(u, g)
                    }).then(function(e) {
                        var t = e.id;
                        if (n.beginTemporaryBrowserSession(), t) return c["default"].put("Ids", {
                            type: "userId",
                            id: t
                        })
                    }).then(function() {
                        u["default"].trigger(OneSignal.EVENTS.REGISTERED), v["default"].isUsingSubscriptionWorkaround() || S["default"].checkAndTriggerSubscriptionChanged()
                    })
                }, n.checkAndTriggerNotificationPermissionChanged = function() {
                    Promise.all([c["default"].get("Options", "notificationPermission"), OneSignal.getNotificationPermission()]).then(function(e) {
                        var n = e[0],
                            t = e[1];
                        n !== t && S["default"].triggerNotificationPermissionChanged().then(function() {
                            return c["default"].put("Options", {
                                key: "notificationPermission",
                                value: t
                            })
                        })
                    })
                }, n.requestNotificationPermissionPromise = function() {
                    return new Promise(function(e) {
                        return window.Notification.requestPermission(e)
                    })
                }, n.showNotifyButton = function() {
                    a["default"].isBrowser() && !OneSignal.notifyButton && (OneSignal.config.notifyButton = OneSignal.config.notifyButton || {}, OneSignal.config.bell && (f(OneSignal.config.bell, OneSignal.config.notifyButton), f(OneSignal.config.notifyButton, OneSignal.config.bell)), OneSignal.config.notifyButton.displayPredicate && "function" == typeof OneSignal.config.notifyButton.displayPredicate ? Promise.resolve(OneSignal.config.notifyButton.displayPredicate()).then(function(e) {
                        e !== !1 ? (OneSignal.notifyButton = new m["default"](OneSignal.config.notifyButton), OneSignal.notifyButton.create()) : l.debug("Notify button display predicate returned false so not showing the notify button.")
                    }) : (OneSignal.notifyButton = new m["default"](OneSignal.config.notifyButton), OneSignal.notifyButton.create()))
                }, n.getPrefixedServiceWorkerNameForEnv = function() {
                    a["default"].isDev() ? (OneSignal.SERVICE_WORKER_PATH = r.DEV_PREFIX + "OneSignalSDKWorker.js", OneSignal.SERVICE_WORKER_UPDATER_PATH = r.DEV_PREFIX + "OneSignalSDKUpdaterWorker.js") : a["default"].isStaging() && (OneSignal.SERVICE_WORKER_PATH = r.STAGING_PREFIX + "OneSignalSDKWorker.js", OneSignal.SERVICE_WORKER_UPDATER_PATH = r.STAGING_PREFIX + "OneSignalSDKUpdaterWorker.js")
                }, n.checkAndDoHttpPermissionRequest = function() {
                    var e = this;
                    l.debug("Called %ccheckAndDoHttpPermissionRequest()", g.getConsoleStyle("code")), this.isUsingHttpPermissionRequest() && (OneSignal.config.autoRegister ? OneSignal.showHttpPermissionRequest({
                        _sdkCall: !0
                    }).then(function(n) {
                        "granted" !== n || e.isUsingCustomHttpPermissionRequestPostModal() || (l.debug("Showing built-in post HTTP permission request in-page modal because permission is granted and not using custom modal."), e.showHttpPermissionRequestPostModal(OneSignal.config.httpPermissionRequest))
                    }) : u["default"].trigger(OneSignal.EVENTS.TEST_INIT_OPTION_DISABLED))
                }, n.getNotificationIcons = function() {
                    var t = "";
                    return n.getAppId().then(function(e) {
                        return e ? t = OneSignal._API_URL + "apps/" + e + "/icon" : Promise.reject(null)
                    }, function() {
                        l.debug("No app ID, not getting notification icon for notify button.")
                    }).then(function(n) {
                        return e(n)
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        if (e.errors) throw l.error("API call %c" + t, g.getConsoleStyle("code"), "failed with:", e.errors), new Error("Failed to get notification icons.");
                        return e
                    })
                }, n.establishServiceWorkerChannel = function(e) {
                    OneSignal._channel && (OneSignal._channel.off("data"), OneSignal._channel.off("notification.displayed"), OneSignal._channel.off("notification.clicked")), OneSignal._channel = p.at(e ? e.active : null), OneSignal._channel.on("data", function(e, n) {
                        l.debug("%c" + g.capitalize(a["default"].getEnv()) + " в¬ё ServiceWorker:", g.getConsoleStyle("serviceworkermessage"), n, e)
                    }), OneSignal._channel.on("notification.displayed", function(e, n) {
                        u["default"].trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, n)
                    }), OneSignal._channel.on("notification.clicked", function(e, n) {
                        return i(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return 0 !== OneSignal.getListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED).length ? [3, 2] : (l.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."), [4, c["default"].put("NotificationOpened", {
                                            url: n.url,
                                            data: n,
                                            timestamp: Date.now()
                                        })]);
                                    case 1:
                                        return e.sent(), [3, 3];
                                    case 2:
                                        u["default"].trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, n), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }), OneSignal._channel.on("command.redirect", function(e, n) {
                        l.debug(a["default"].getEnv() + " Picked up command.redirect to " + n + ", forwarding to host page.", OneSignal.iframePostmam), OneSignal.iframePostmam && OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, n)
                    }), OneSignal._channel.on("notification.dismissed", function(e, n) {
                        u["default"].trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, n)
                    })
                }, n.getNormalizedSubdomain = function(e) {
                    if (e) return g.normalizeSubdomain(e)
                }, n.getPromptOptionsQueryString = function() {
                    var e = OneSignal.config.promptOptions,
                        t = "";
                    if (e)
                        for (var i = n.getPromptOptionsPostHash(), o = 0, r = Object.keys(i); o < r.length; o++) {
                            var a = r[o],
                                s = i[a];
                            t += "&" + a + "=" + s
                        }
                    return t
                }, n.showHttpPermissionRequestPostModal = function(e) {
                    OneSignal.httpPermissionRequestPostModal = new b["default"](e), OneSignal.httpPermissionRequestPostModal.create()
                }, n.getPromptOptionsPostHash = function() {
                    var e = OneSignal.config.promptOptions;
                    if (e) {
                        for (var n = {
                            exampleNotificationTitleDesktop: "exampleNotificationTitle",
                            exampleNotificationMessageDesktop: "exampleNotificationMessage",
                            exampleNotificationTitleMobile: "exampleNotificationTitle",
                            exampleNotificationMessageMobile: "exampleNotificationMessage"
                        }, t = 0, i = Object.keys(n); t < i.length; t++) {
                            var o = i[t],
                                r = n[o];
                            e[o] && (e[r] = e[o])
                        }
                        for (var a = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], s = {}, l = 0; l < a.length; l++) {
                            var u = a[l],
                                c = e[u],
                                d = encodeURIComponent(c);
                            (c || c === !1 || "" === c) && (s[u] = d)
                        }
                    }
                    return s
                }, n.triggerCustomPromptClicked = function(e) {
                    u["default"].trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
                        result: e
                    })
                }, n.autoCorrectSubdomain = function(e) {
                    var t = n.getNormalizedSubdomain(e);
                    return t !== e && l.info("Auto-corrected subdomain '" + e + "' to '" + t + "'."), t
                }, n.createHiddenDomIFrame = function(e, n) {
                    var t = document.createElement("iframe");
                    return t.style.display = "none", e || (e = "about:blank"), t.src = e, n && (t.name = n), document.body.appendChild(t), t
                }, n.createHiddenSubscriptionDomModal = function(e) {
                    var n = document.createElement("div");
                    n.setAttribute("id", "OneSignal-iframe-modal"), n.setAttribute("style", "display:none !important"), n.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>', document.body.appendChild(n);
                    var t = document.createElement("style");
                    t.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }", document.getElementsByTagName("head")[0].appendChild(t);
                    var i = document.createElement("iframe");
                    return i.className = "OneSignal-permission-iframe", i.setAttribute("frameborder", "0"), i.width = OneSignal._windowWidth.toString(), i.height = OneSignal._windowHeight.toString(), i.src = e, document.getElementById("notif-permission").appendChild(i), i
                }, n.showSubscriptionDomModal = function() {
                    document.getElementById("OneSignal-iframe-modal").setAttribute("style", "")
                }, n.openWindowViaPost = function(e, n, t) {
                    var i = document.createElement("form");
                    i.action = e, i.method = "POST", i.target = "onesignal-http-popup";
                    var o = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                        r = void 0 != window.screenTop ? window.screenTop : screen.top,
                        a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                        s = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                        l = OneSignal._windowWidth,
                        u = OneSignal._windowHeight,
                        c = a / 2 - l / 2 + o,
                        d = s / 2 - u / 2 + r;
                    t && (t.childWidth && (l = t.childWidth), t.childHeight && (u = t.childHeight), t.left && (c = t.left), t.top && (d = t.top));
                    var g = window.open("about:blank", "onesignal-http-popup", "'scrollbars=yes, width=" + l + ", height=" + u + ", top=" + d + ", left=" + c);
                    if (n)
                        for (var f in n) {
                            var p = document.createElement("textarea");
                            p.name = f, p.value = "object" == typeof n[f] ? JSON.stringify(n[f]) : n[f], i.appendChild(p)
                        }
                    return i.style.display = "none", document.body.appendChild(i), i.submit(), document.body.removeChild(i), g
                }, n.openSubdomainPopup = function(e, t, i) {
                    return n.openWindowViaPost(e, t, i)
                }, n.getAppId = function() {
                    return OneSignal.config.appId ? Promise.resolve(OneSignal.config.appId) : c["default"].get("Ids", "appId")
                }, n
            }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = y
    }).call(n, t(25))
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(63),
        r = function(e) {
            function n(n) {
                return e.call(this, n) || this
            }
            return i(n, e), n
        }(o);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = r
}, function(e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        o = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        r = t(15),
        a = t(2),
        s = t(14),
        l = t(3),
        u = t(5),
        c = t(1),
        d = t(10),
        g = function() {
            function e() {}
            return e.onNotificationPermissionChange = function(n) {
                e.checkAndTriggerSubscriptionChanged()
            }, e.onInternalSubscriptionSet = function(e) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        return s["default"].put("subscription.optedOut", e), [2]
                    })
                })
            }, e.checkAndTriggerSubscriptionChanged = function() {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return c.logMethodCall("checkAndTriggerSubscriptionChanged"), [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return n = o.sent(), [4, u["default"].getAppState()];
                            case 2:
                                return t = o.sent(), i = t.lastKnownPushEnabled, (r = null === i || n !== i) ? (a.info("The user's subscription state changed from " + ((null === i ? "(not stored)" : i) + " вџ¶ " + n)), t.lastKnownPushEnabled = n, [4, u["default"].setAppState(t)]) : [2];
                            case 3:
                                return o.sent(), e.triggerSubscriptionChanged(n), [2]
                        }
                    })
                })
            }, e._onSubscriptionChanged = function(e) {
                return OneSignal.__doNotShowWelcomeNotification ? void a.debug("Not showing welcome notification because user state was reset.") : void(e === !0 && Promise.all([OneSignal.getUserId(), d["default"].getAppId()]).then(function(e) {
                    var n = e[0],
                        t = e[1],
                        i = OneSignal.config.welcomeNotification,
                        o = void 0 !== i && i.disable === !0,
                        s = void 0 !== i && void 0 !== i.title && null !== i.title ? i.title : "",
                        u = void 0 !== i && void 0 !== i.message && null !== i.message && i.message.length > 0 ? i.message : "Thanks for subscribing!",
                        d = new URL(location.href).origin + "?_osp=do_not_open",
                        g = i && i.url && i.url.length > 0 ? i.url : d;
                    s = c.decodeHtmlEntities(s), u = c.decodeHtmlEntities(u), o || (a.debug("Sending welcome notification."), r["default"].sendNotification(t, [n], {
                        en: s
                    }, {
                        en: u
                    }, g, null, {
                        __isOneSignalWelcomeNotification: !0
                    }, void 0), l["default"].trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                        title: s,
                        message: u,
                        url: g
                    }))
                }))
            }, e.onDatabaseRebuilt = function() {
                OneSignal._isNewVisitor = !0
            }, e.triggerNotificationPermissionChanged = function(e) {
                void 0 === e && (e = !1);
                var n, t;
                return Promise.all([OneSignal.getNotificationPermission(), u["default"].get("Options", "notificationPermission")]).then(function(i) {
                    var o = i[0],
                        r = i[1];
                    if (n = o, t = o !== r || e) return u["default"].put("Options", {
                        key: "notificationPermission",
                        value: o
                    })
                }).then(function() {
                    t && l["default"].trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                        to: n
                    })
                })
            }, e.triggerSubscriptionChanged = function(e) {
                l["default"].trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e)
            }, e.fireStoredNotificationClicks = function(e) {
                return void 0 === e && (e = document.URL), i(this, void 0, void 0, function() {
                    function n(e) {
                        return i(this, void 0, void 0, function() {
                            var n, t, i, r;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, u["default"].getAppState()];
                                    case 1:
                                        return n = o.sent(), n.clickedNotifications[e.url] = null, [4, u["default"].setAppState(n)];
                                    case 2:
                                        return o.sent(), t = e.data, i = e.timestamp, i && (r = (Date.now() - i) / 1e3 / 60, r > 5) ? [2] : (l["default"].trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, t), [2])
                                }
                            })
                        })
                    }
                    var t, r, a, s, c, d, g, f;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, u["default"].getAppState()];
                            case 1:
                                return t = i.sent(), [4, u["default"].get("Options", "notificationClickHandlerMatch")];
                            case 2:
                                if (r = i.sent(), "origin" !== r) return [3, 7];
                                a = 0, s = Object.keys(t.clickedNotifications), i.label = 3;
                            case 3:
                                return a < s.length ? (c = s[a], new URL(c).origin !== location.origin ? [3, 5] : (d = t.clickedNotifications[c], [4, n(d)])) : [3, 6];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return a++, [3, 3];
                            case 6:
                                return [3, 11];
                            case 7:
                                return g = t.clickedNotifications[e], g ? [4, n(g)] : [3, 9];
                            case 8:
                                return i.sent(), [3, 11];
                            case 9:
                                return g || !e.endsWith("/") ? [3, 11] : (f = e.substring(0, e.length - 1), g = t.clickedNotifications[f], g ? [4, n(g)] : [3, 11]);
                            case 10:
                                i.sent(), i.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = g
}, function(e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        o = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        r = t(2),
        a = t(19),
        s = t(18),
        l = t(3),
        u = t(1),
        c = t(5),
        d = function() {
            function e() {}
            return e.getInstance = function() {
                return new Promise(function(n, t) {
                    if (e._instance) n(e._instance);
                    else {
                        try {
                            var i = indexedDB.open("ONE_SIGNAL_SDK_DB", 1)
                        } catch (o) {}
                        i.onsuccess = function(t) {
                            var i = t.target,
                                o = i.result;
                            e._instance ? (o.close(), n(e._instance)) : (e._instance = o, n(o))
                        }, i.onerror = function(e) {
                            var n = e.target.error;
                            u.contains(n.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || u.contains(n.message, "A mutation operation was attempted on a database that did not allow mutations") ? (r.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6"), e.preventDefault()) : (r.error("OneSignal: Unable to open IndexedDB.", n.name + ": " + n.message), t(e))
                        }, i.onupgradeneeded = function(e) {
                            r.info("OneSignal: IndexedDB is being rebuilt or upgraded.", e);
                            var n = e.target.result;
                            n.createObjectStore("Ids", {
                                keyPath: "type"
                            }), n.createObjectStore("NotificationOpened", {
                                keyPath: "url"
                            }), n.createObjectStore("Options", {
                                keyPath: "key"
                            }), l["default"].trigger(c["default"].EVENTS.REBUILT, null, null)
                        }, i.onversionchange = function(e) {
                            r.debug("The database is about to be deleted.")
                        }
                    }
                })
            }, e.get = function(n, t) {
                return i(this, void 0, void 0, function() {
                    var i;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, e.getInstance()];
                            case 1:
                                return i = o.sent(), t ? [2, new Promise(function(e, o) {
                                    var r = i.transaction(n).objectStore(n).get(t);
                                    r.onsuccess = function() {
                                        e(r.result)
                                    }, r.onerror = function() {
                                        o(r.error)
                                    }
                                })] : [2, new Promise(function(e, t) {
                                    var o = {},
                                        r = i.transaction(n).objectStore(n).openCursor();
                                    r.onsuccess = function(n) {
                                        var t = n.target.result;
                                        if (t) {
                                            o[t.key] = t.value, t["continue"]()
                                        } else e(o)
                                    }, r.onerror = function(e) {
                                        t(r.error)
                                    }
                                })]
                        }
                    })
                })
            }, e.put = function(n, t) {
                return e.getInstance().then(function(e) {
                    return new Promise(function(i, o) {
                        try {
                            var a = e.transaction([n], "readwrite").objectStore(n).put(t);
                            a.onsuccess = function(e) {
                                i(t)
                            }, a.onerror = function(e) {
                                r.error("Database PUT Transaction Error:", e), o(e)
                            }
                        } catch (s) {
                            r.error("Database PUT Error:", s), o(s)
                        }
                    })
                })
            }, e.remove = function(n, t) {
                if (t) var i = "delete";
                else var i = "clear";
                return e.getInstance().then(function(e) {
                    return new Promise(function(o, a) {
                        try {
                            var s = e.transaction([n], "readwrite").objectStore(n)[i](t);
                            s.onsuccess = function(e) {
                                o(t)
                            }, s.onerror = function(e) {
                                r.error("Database REMOVE Transaction Error:", e), a(e)
                            }
                        } catch (l) {
                            r.error("Database REMOVE Error:", l), a(l)
                        }
                    })
                })
            }, e.rebuild = function() {
                return Promise.all([e.remove("Ids"), e.remove("NotificationOpened"), e.remove("Options")])
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = d, s.merge(d, new a)
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e.put = function(n, t) {
            return void 0 === e.store[n] && (e.store[n] = [null, null]), e.store[n].push(t), e.store[n].length == e.LIMIT + 1 && e.store[n].shift(), e.store[n]
        }, e.get = function(n) {
            return void 0 === e.store[n] && (e.store[n] = [null, null]), e.store[n]
        }, e.getFirst = function(n) {
            return e.get(n)[0]
        }, e.getLast = function(n) {
            return e.get(n)[1]
        }, e.remove = function(n) {
            delete e.store[n]
        }, e.isEmpty = function(n) {
            var t = e.get(n);
            return null === t[0] && null === t[1]
        }, e
    }();
    t.store = {}, t.LIMIT = 2, Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = t
}, function(e, n, t) {
    (function(e) {
        "use strict";
        var i = t(7),
            o = t(2),
            r = t(1),
            a = t(9),
            s = function() {
                function n() {}
                return n.get = function(e, t, i) {
                    return n.call("GET", e, t, i)
                }, n.post = function(e, t, i) {
                    return n.call("POST", e, t, i)
                }, n.put = function(e, t, i) {
                    return n.call("PUT", e, t, i)
                }, n["delete"] = function(e, t, i) {
                    return n.call("DELETE", e, t, i)
                }, n.call = function(t, o, r, a) {
                    var s = new Headers;
                    if (s.append("SDK-Version", "onesignal/web/120100"), s.append("Content-Type", "application/json;charset=UTF-8"), a)
                        for (var l = 0, u = Object.keys(a); l < u.length; l++) {
                            var c = u[l];
                            s.append(c, a[c])
                        }
                    var d = {
                        method: t || "NO_METHOD_SPECIFIED",
                        headers: s,
                        cache: "no-cache"
                    };
                    r && (d.body = JSON.stringify(r));
                    var g;
                    return e(i.API_URL + o, d).then(function(e) {
                        return g = e.status, e.json()
                    }).then(function(e) {
                        return g >= 200 && g < 300 ? e : "no-user-id-error" !== n.identifyError(e) ? Promise.reject(e) : void 0
                    })
                }, n.identifyError = function(e) {
                    if (!e || !e.errors) return "no-error";
                    var n = e.errors;
                    return r.contains(n, "No user with this id found") || r.contains(n, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
                }, n.getUserIdFromSubscriptionIdentifier = function(e, t, i) {
                    return n.post("players", {
                        app_id: e,
                        device_type: t,
                        identifier: i
                    }).then(function(e) {
                        return e && e.id ? e.id : null
                    })["catch"](function(e) {
                        return o.debug("Error getting user ID from subscription identifier:", e), null
                    })
                }, n.getPlayer = function(e, t) {
                    return n.get("players/" + t + "?app_id=" + e)
                }, n.updatePlayer = function(e, t, i) {
                    return n.put("players/" + t, a({
                        app_id: e
                    }, i))
                }, n.sendNotification = function(e, t, i, o, a, s, l, u) {
                    var c = {
                        app_id: e,
                        contents: o,
                        include_player_ids: t,
                        isAnyWeb: !0,
                        data: l,
                        web_buttons: u
                    };
                    return i && (c.headings = i), a && (c.url = a), s && (c.chrome_web_icon = s, c.firefox_icon = s), r.trimUndefined(c), n.post("notifications", c)
                }, n
            }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = s
    }).call(n, t(25))
}, function(e, n, t) {
    "use strict";
    var i = t(1),
        o = t(2),
        r = t(3),
        a = t(8),
        s = t(5),
        l = t(10),
        u = t(45),
        c = t(42),
        d = t(43),
        g = t(44),
        f = t(31),
        p = t(6),
        h = t(68),
        b = function() {
            function e(n) {
                var o = void 0 === n ? {} : n,
                    r = o.enable,
                    a = void 0 !== r && r,
                    s = o.size,
                    u = void 0 === s ? "medium" : s,
                    c = o.position,
                    d = void 0 === c ? "bottom-right" : c,
                    g = o.theme,
                    p = void 0 === g ? "default" : g,
                    h = o.showLauncherAfter,
                    b = void 0 === h ? 10 : h,
                    m = o.showBadgeAfter,
                    v = void 0 === m ? 300 : m,
                    S = o.text,
                    y = void 0 === S ? {
                        "tip.state.unsubscribed": "Subscribe to notifications",
                        "tip.state.subscribed": "You're subscribed to notifications",
                        "tip.state.blocked": "You've blocked notifications",
                        "message.prenotify": "Click to subscribe to notifications",
                        "message.action.subscribing": "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
                        "message.action.subscribed": "Thanks for subscribing!",
                        "message.action.resubscribed": "You're subscribed to notifications",
                        "message.action.unsubscribed": "You won't receive notifications again",
                        "dialog.main.title": "Manage Site Notifications",
                        "dialog.main.button.subscribe": "SUBSCRIBE",
                        "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
                        "dialog.blocked.title": "Unblock Notifications",
                        "dialog.blocked.message": "Follow these instructions to allow notifications:"
                    } : S,
                    w = o.prenotify,
                    O = void 0 === w || w,
                    E = o.showCredit,
                    P = void 0 === E || E,
                    I = o.colors,
                    T = void 0 === I ? null : I,
                    x = o.offset,
                    _ = void 0 === x ? null : x,
                    k = this;
                if (this.options = {
                        enable: a,
                        size: u,
                        position: d,
                        theme: p,
                        showLauncherAfter: b,
                        showBadgeAfter: v,
                        text: y,
                        prenotify: O,
                        showCredit: P,
                        colors: T,
                        offset: _
                    }, t(69), this.options.enable) {
                    if (!i.contains(["small", "medium", "large"], this.options.size)) throw new Error("Invalid size " + this.options.size + " for notify button. Choose among 'small', 'medium', or 'large'.");
                    if (!i.contains(["bottom-left", "bottom-right"], this.options.position)) throw new Error("Invalid position " + this.options.position + " for notify button. Choose either 'bottom-left', or 'bottom-right'.");
                    if (!i.contains(["default", "inverse"], this.options.theme)) throw new Error("Invalid theme " + this.options.theme + " for notify button. Choose either 'default', or 'inverse'.");
                    if (this.options.showLauncherAfter < 0) throw new Error("Invalid delay duration of " + this.options.showLauncherAfter + " for showing the notify button. Choose a value above 0.");
                    if (this.options.showBadgeAfter < 0) throw new Error("Invalid delay duration of " + this.options.showBadgeAfter + " for showing the notify button's badge. Choose a value above 0.");
                    this.size = this.options.size, this.position = this.options.position, this.text = this.options.text, this.text["tip.state.unsubscribed"] || (this.text["tip.state.unsubscribed"] = "Subscribe to notifications"), this.text["tip.state.subscribed"] || (this.text["tip.state.subscribed"] = "You're subscribed to notifications"), this.text["tip.state.blocked"] || (this.text["tip.state.blocked"] = "You've blocked notifications"), this.text["message.prenotify"] || (this.text["message.prenotify"] = "Click to subscribe to notifications"), this.text["message.action.subscribed"] || (this.text["message.action.subscribed"] = "Thanks for subscribing!"), this.text["message.action.resubscribed"] || (this.text["message.action.resubscribed"] = "You're subscribed to notifications"), this.text["message.action.subscribing"] || (this.text["message.action.subscribing"] = "Click <strong>{{prompt.native.grant}}</strong> to receive notifications"), this.text["message.action.unsubscribed"] || (this.text["message.action.unsubscribed"] = "You won't receive notifications again"), this.text["dialog.main.title"] || (this.text["dialog.main.title"] = "Manage Site Notifications"), this.text["dialog.main.button.subscribe"] || (this.text["dialog.main.button.subscribe"] = "SUBSCRIBE"), this.text["dialog.main.button.unsubscribe"] || (this.text["dialog.main.button.unsubscribe"] = "UNSUBSCRIBE"), this.text["dialog.blocked.title"] || (this.text["dialog.blocked.title"] = "Unblock Notifications"), this.text["dialog.blocked.message"] || (this.text["dialog.blocked.message"] = "Follow these instructions to allow notifications:"), this.substituteText(), this.state = e.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, OneSignal.on(e.EVENTS.SUBSCRIBE_CLICK, function() {
                        k.dialog.subscribeButton.disabled = !0, k._ignoreSubscriptionState = !0, OneSignal.setSubscription(!0).then(function() {
                            return k.dialog.subscribeButton.disabled = !1, k.dialog.hide()
                        }).then(function() {
                            return k.message.display(f["default"].TYPES.MESSAGE, k.text["message.action.resubscribed"], f["default"].TIMEOUT)
                        }).then(function() {
                            return k._ignoreSubscriptionState = !1, k.launcher.clearIfWasInactive(), k.launcher.inactivate()
                        }).then(function() {
                            return k.updateState()
                        })
                    }), OneSignal.on(e.EVENTS.UNSUBSCRIBE_CLICK, function() {
                        k.dialog.unsubscribeButton.disabled = !0, OneSignal.setSubscription(!1).then(function() {
                            return k.dialog.unsubscribeButton.disabled = !1, k.dialog.hide()
                        }).then(function() {
                            return k.launcher.clearIfWasInactive(), k.launcher.activate()
                        }).then(function() {
                            return k.message.display(f["default"].TYPES.MESSAGE, k.text["message.action.unsubscribed"], f["default"].TIMEOUT)
                        }).then(function() {
                            return k.updateState()
                        })
                    }), OneSignal.on(e.EVENTS.HOVERING, function() {
                        return k.hovering = !0, k.launcher.activateIfInactive(), k.message.shown || k.dialog.shown ? void(k.hovering = !1) : k.message.contentType === f["default"].TYPES.MESSAGE ? void(k.hovering = !1) : void new Promise(function(e, n) {
                            return k.message.queued.length > 0 ? k.message.dequeue().then(function(n) {
                                k.message.content = n, k.message.contentType = f["default"].TYPES.QUEUED, e()
                            }) : (k.message.content = i.decodeHtmlEntities(k.message.getTipForState()), k.message.contentType = f["default"].TYPES.TIP, e(), void 0)
                        }).then(function() {
                            return k.message.show()
                        }).then(function() {
                            k.hovering = !1
                        })
                    }), OneSignal.on(e.EVENTS.HOVERED, function() {
                        k.message.contentType !== f["default"].TYPES.MESSAGE && k.dialog.hidden && (k.hovering && (k.hovering = !1, k.message.waitUntilShown().then(function() {
                            return i.delay(f["default"].TIMEOUT)
                        }).then(function() {
                            return k.message.hide()
                        }).then(function() {
                            k.launcher.wasInactive && k.dialog.hidden && (k.launcher.inactivate(), k.launcher.wasInactive = null)
                        })), k.message.shown && k.message.hide().then(function() {
                            k.launcher.wasInactive && k.dialog.hidden && (k.launcher.inactivate(), k.launcher.wasInactive = null)
                        }))
                    }), OneSignal.on(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(n) {
                        1 == n && (k.badge.shown && k.options.prenotify && k.badge.hide(), null === k.dialog.notificationIcons && l["default"].getNotificationIcons().then(function(e) {
                            k.dialog.notificationIcons = e
                        })), OneSignal.getNotificationPermission(function(t) {
                            k.setState(n ? e.STATES.SUBSCRIBED : "denied" === t ? e.STATES.BLOCKED : e.STATES.UNSUBSCRIBED, k._ignoreSubscriptionState)
                        })
                    }), OneSignal.on(e.EVENTS.STATE_CHANGED, function(n) {
                        n.to === e.STATES.SUBSCRIBED ? k.launcher.inactivate() : (n.to === e.STATES.UNSUBSCRIBED || e.STATES.BLOCKED) && k.launcher.activate()
                    }), OneSignal.on(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, function(e, n) {
                        k.updateState()
                    }), this.updateState()
                }
            }
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        STATE_CHANGED: "notifyButtonStateChange",
                        LAUNCHER_CLICK: "notifyButtonLauncherClick",
                        BELL_CLICK: "notifyButtonButtonClick",
                        SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
                        UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
                        HOVERING: "notifyButtonHovering",
                        HOVERED: "notifyButtonHover"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "STATES", {
                get: function() {
                    return {
                        UNINITIALIZED: "uninitialized",
                        SUBSCRIBED: "subscribed",
                        UNSUBSCRIBED: "unsubscribed",
                        BLOCKED: "blocked"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "TEXT_SUBS", {
                get: function() {
                    return {
                        "prompt.native.grant": {
                            "default": "Allow",
                            chrome: "Allow",
                            firefox: "Always Receive Notifications",
                            safari: "Allow"
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.substituteText = function() {
                for (var n in this.text)
                    if (this.text.hasOwnProperty(n)) {
                        var t = this.text[n],
                            o = a.name.toLowerCase();
                        for (var r in e.TEXT_SUBS)
                            if (e.TEXT_SUBS.hasOwnProperty(r)) {
                                var s = e.TEXT_SUBS[r],
                                    l = s[o];
                                t && i.contains(t, "{{") && (this.text[n] = t.replace("{{" + r + "}}", void 0 !== l ? l : s["default"]))
                            }
                    }
            }, e.prototype.showDialogProcedure = function() {
                var e = this;
                this.dialog.shown || this.dialog.show().then(function() {
                    i.once(document, "click", function(n, t) {
                        e.dialog.element.contains(n.target) || (t(), e.dialog.shown && e.dialog.hide().then(function(n) {
                            e.launcher.inactivateIfWasInactive()
                        }))
                    }, !0)
                })
            }, e.prototype.create = function() {
                var e = this;
                this.options.enable && (this.container && i.removeDomElement("#onesignal-bell-container"), i.addDomElement("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'), i.addDomElement(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'), i.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'), i.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'), i.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'), i.addDomElement(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'), i.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'), i.addDomElement(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'), i.addDomElement(this.button.selector, "beforeEnd", h), Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getSubscription(), s["default"].get("Options", "popoverDoNotPrompt")]).then(function(n) {
                    var t = n[0],
                        r = n[1],
                        a = n[2],
                        s = t ? "small" : e.options.size;
                    e.launcher.resize(s).then(function() {
                        if ("bottom-left" === e.options.position) i.addCssClass(e.container, "onesignal-bell-container-bottom-left"), i.addCssClass(e.launcher.selector, "onesignal-bell-launcher-bottom-left");
                        else {
                            if ("bottom-right" !== e.options.position) throw new Error("Invalid OneSignal notify button position " + e.options.position);
                            i.addCssClass(e.container, "onesignal-bell-container-bottom-right"), i.addCssClass(e.launcher.selector, "onesignal-bell-launcher-bottom-right")
                        }
                        if ("default" === e.options.theme) i.addCssClass(e.launcher.selector, "onesignal-bell-launcher-theme-default");
                        else {
                            if ("inverse" !== e.options.theme) throw new Error("Invalid OneSignal notify button theme " + e.options.theme);
                            i.addCssClass(e.launcher.selector, "onesignal-bell-launcher-theme-inverse")
                        }
                        e.applyOffsetIfSpecified(), e.setCustomColorsIfSpecified(), e.patchSafariSvgFilterBug(), o.info("Showing the notify button."), (t ? e.launcher.inactivate() : i.nothing()).then(function() {
                            return OneSignal.getSubscription()
                        }).then(function(n) {
                            return !t && n || null !== e.dialog.notificationIcons ? i.nothing() : l["default"].getNotificationIcons().then(function(n) {
                                e.dialog.notificationIcons = n
                            })
                        }).then(function() {
                            return i.delay(e.options.showLauncherAfter)
                        }).then(function() {
                            return !p["default"].isUsingSubscriptionWorkaround() || !r || a === !0 || t || OneSignal.config.autoRegister !== !0 || l["default"].isHttpPromptAlreadyShown() || l["default"].isUsingHttpPermissionRequest() ? e.launcher.show() : (o.debug("Not showing notify button because popover will be shown."), i.nothing())
                        }).then(function() {
                            return i.delay(e.options.showBadgeAfter)
                        }).then(function() {
                            return e.options.prenotify && !t && OneSignal._isNewVisitor ? e.message.enqueue(e.text["message.prenotify"]).then(function() {
                                return e.badge.show()
                            }) : i.nothing()
                        }).then(function() {
                            return e.initialized = !0
                        })
                    })
                }))
            }, e.prototype.patchSafariSvgFilterBug = function() {
                if (!(a.safari && Number(a.version) >= 9.1)) {
                    var e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
                        n = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                        t = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                    this.graphic.setAttribute("style", "filter: " + e + "; -webkit-filter: " + e + ";"), this.badge.element.setAttribute("style", "filter: " + n + "; -webkit-filter: " + n + ";"), this.dialog.element.setAttribute("style", "filter: " + t + "; -webkit-filter: " + t + ";")
                }
                a.safari && this.badge.element.setAttribute("style", "display: none;")
            }, e.prototype.applyOffsetIfSpecified = function() {
                var e = this.options.offset;
                e && (this.launcher.element.style.cssText = "", e.bottom && (this.launcher.element.style.cssText += "bottom: " + e.bottom + ";"), "bottom-right" === this.options.position ? e.right && (this.launcher.element.style.cssText += "right: " + e.right + ";") : "bottom-left" === this.options.position && e.left && (this.launcher.element.style.cssText += "left: " + e.left + ";"))
            }, e.prototype.setCustomColorsIfSpecified = function() {
                var e = this.dialog.element.querySelector("button.action"),
                    n = this.button.element.querySelector(".pulse-ring");
                this.graphic.querySelector(".background").style.cssText = "";
                for (var t = this.graphic.querySelectorAll(".foreground"), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.style.cssText = ""
                }
                if (this.graphic.querySelector(".stroke").style.cssText = "", this.badge.element.style.cssText = "", e && (e.style.cssText = "", e.style.cssText = ""), n && (n.style.cssText = ""), this.options.colors) {
                    var r = this.options.colors;
                    if (r["circle.background"] && (this.graphic.querySelector(".background").style.cssText += "fill: " + r["circle.background"]), r["circle.foreground"]) {
                        for (var a = this.graphic.querySelectorAll(".foreground"), i = 0; i < a.length; i++) {
                            var o = a[i];
                            o.style.cssText += "fill: " + r["circle.foreground"]
                        }
                        this.graphic.querySelector(".stroke").style.cssText += "stroke: " + r["circle.foreground"]
                    }
                    r["badge.background"] && (this.badge.element.style.cssText += "background: " + r["badge.background"]), r["badge.bordercolor"] && (this.badge.element.style.cssText += "border-color: " + r["badge.bordercolor"]), r["badge.foreground"] && (this.badge.element.style.cssText += "color: " + r["badge.foreground"]), e && (r["dialog.button.background"] && (this.dialog.element.querySelector("button.action").style.cssText += "background: " + r["dialog.button.background"]), r["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action").style.cssText += "color: " + r["dialog.button.foreground"]), r["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: " + r["dialog.button.background.hovering"] + " !important; }"), r["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: " + r["dialog.button.background.active"] + " !important; }")), n && r["pulse.color"] && (this.button.element.querySelector(".pulse-ring").style.cssText = "border-color: " + r["pulse.color"])
                }
            }, e.prototype.addCssToHead = function(e, n) {
                if (!document.getElementById(e)) {
                    var t = document.createElement("style");
                    t.id = e, t.type = "text/css", t.appendChild(document.createTextNode(n)), document.head.appendChild(t)
                }
            }, e.prototype.updateState = function() {
                var n = this;
                Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission()]).then(function(t) {
                    var i = t[0],
                        o = t[1];
                    n.setState(i ? e.STATES.SUBSCRIBED : e.STATES.UNSUBSCRIBED), "denied" === o && n.setState(e.STATES.BLOCKED)
                })
            }, e.prototype.setState = function(n, t) {
                void 0 === t && (t = !1);
                var i = this.state;
                this.state = n, i === n || t || r["default"].trigger(e.EVENTS.STATE_CHANGED, {
                    from: i,
                    to: n
                })
            }, Object.defineProperty(e.prototype, "container", {
                get: function() {
                    return document.querySelector("#onesignal-bell-container")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "graphic", {
                get: function() {
                    return this.button.element.querySelector("svg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "launcher", {
                get: function() {
                    return this._launcher || (this._launcher = new u["default"](this)), this._launcher
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "button", {
                get: function() {
                    return this._button || (this._button = new d["default"](this)), this._button
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "badge", {
                get: function() {
                    return this._badge || (this._badge = new c["default"]), this._badge
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function() {
                    return this._message || (this._message = new f["default"](this)), this._message
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dialog", {
                get: function() {
                    return this._dialog || (this._dialog = new g["default"](this)), this._dialog
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "subscribed", {
                get: function() {
                    return this.state === e.STATES.SUBSCRIBED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "unsubscribed", {
                get: function() {
                    return this.state === e.STATES.UNSUBSCRIBED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "blocked", {
                get: function() {
                    return this.state === e.STATES.BLOCKED
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = b
}, function(e, n, t) {
    "use strict";
    var i = t(7),
        o = t(4),
        r = t(2),
        a = t(5),
        s = t(1),
        l = t(6),
        u = function() {
            function e() {}
            return e.applyServiceWorkerEnvPrefixes = function() {
                o["default"].isDev() ? (OneSignal.SERVICE_WORKER_PATH = i.DEV_PREFIX + "OneSignalSDKWorker.js", OneSignal.SERVICE_WORKER_UPDATER_PATH = i.DEV_PREFIX + "OneSignalSDKUpdaterWorker.js") : o["default"].isStaging() && (OneSignal.SERVICE_WORKER_PATH = i.STAGING_PREFIX + "OneSignalSDKWorker.js", OneSignal.SERVICE_WORKER_UPDATER_PATH = i.STAGING_PREFIX + "OneSignalSDKUpdaterWorker.js")
            }, e.closeNotifications = function() {
                navigator.serviceWorker && !l["default"].isUsingSubscriptionWorkaround() && navigator.serviceWorker.getRegistration().then(function(e) {
                    if (void 0 === e || !e.active) throw new Error("There is no active service worker.");
                    OneSignal._channel && OneSignal._channel.emit("data", "notification.closeall")
                })
            }, e.updateServiceWorker = function() {
                var e = sessionStorage.getItem("onesignal-update-serviceworker-completed");
                if (!navigator.serviceWorker || !o["default"].isHost() || "https:" !== location.protocol || "true" == e) return void r.debug("Skipping service worker update for existing session.");
                try {
                    sessionStorage.setItem("onesignal-update-serviceworker-completed", "true")
                } catch (n) {
                    r.error(n)
                }
                return navigator.serviceWorker.getRegistration().then(function(e) {
                    var n = "";
                    if (OneSignal.config.path && (n = OneSignal.config.path), e && e.active) {
                        var t = e.active.scriptURL;
                        if (s.contains(t, n + OneSignal.SERVICE_WORKER_PATH)) return r.debug("(Service Worker Update)", "The main service worker is active."), a["default"].get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION").then(function(e) {
                            return e ? (r.debug("(Service Worker Update)", "Stored service worker version v" + e + "."), e != OneSignal._VERSION ? (r.debug("(Service Worker Update)", "New service worker version exists:", OneSignal._VERSION), r.info("Upgrading service worker (v" + e + " -> v" + OneSignal._VERSION + ")"), navigator.serviceWorker.register(n + OneSignal.SERVICE_WORKER_UPDATER_PATH, OneSignal.SERVICE_WORKER_PARAM)) : (r.debug("(Service Worker Update)", "You already have the latest service worker version."), null)) : (r.debug("(Service Worker Update)", "No stored service worker version. Reinstalling the service worker."), navigator.serviceWorker.register(n + OneSignal.SERVICE_WORKER_UPDATER_PATH, OneSignal.SERVICE_WORKER_PARAM))
                        });
                        if (s.contains(t, n + OneSignal.SERVICE_WORKER_UPDATER_PATH)) return r.debug("(Service Worker Update)", "The alternate service worker is active."), a["default"].get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION").then(function(e) {
                            return e ? (r.debug("(Service Worker Update)", "Stored service worker version v" + e + "."), e != OneSignal._VERSION ? (r.debug("(Service Worker Update)", "New service worker version exists:", OneSignal._VERSION), r.info("Upgrading new service worker (v" + e + " -> v" + OneSignal._VERSION + ")"), navigator.serviceWorker.register(n + OneSignal.SERVICE_WORKER_PATH, OneSignal.SERVICE_WORKER_PARAM)) : (r.debug("(Service Worker Update)", "You already have the latest service worker version."), null)) : (r.debug("(Service Worker Update)", "No stored service worker version. Reinstalling the service worker."), navigator.serviceWorker.register(n + OneSignal.SERVICE_WORKER_PATH, OneSignal.SERVICE_WORKER_PARAM))
                        })
                    }
                })
            }, e.registerServiceWorker = function(n) {
                r.debug("Called %cregisterServiceWorker(" + JSON.stringify(n, null, 4) + ")", s.getConsoleStyle("code")), navigator.serviceWorker.register(n, OneSignal.SERVICE_WORKER_PARAM).then(l["default"].enableNotifications, e.registerError)
            }, e.registerError = function(e) {
                r.error("ServiceWorker registration", e)
            }, e.isServiceWorkerActive = function(e) {
                function n(e) {
                    return e.active && "activated" === e.active.state && (s.contains(e.active.scriptURL, "OneSignalSDKWorker") || s.contains(e.active.scriptURL, "OneSignalSDKUpdaterWorker"))
                }
                return "serviceWorker" in navigator && new Promise(function(t, i) {
                        if (l["default"].isUsingSubscriptionWorkaround() || o["default"].isIframe()) e && e(!1), t(!1);
                        else {
                            var r = !1;
                            navigator.serviceWorker.getRegistrations ? navigator.serviceWorker.getRegistrations().then(function(i) {
                                for (var o = 0, a = i; o < a.length; o++) {
                                    n(a[o]) && (r = !0)
                                }
                                e && e(r), t(r)
                            }) : navigator.serviceWorker.ready.then(function(i) {
                                n(i) && (r = !0), e && e(r), t(r)
                            })
                        }
                    })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = u
}, function(e, n, t) {
    var i, o;
    ! function(r, a, s) {
        i = s, o = "function" == typeof i ? i.call(n, t, n, e) : i, !(void 0 !== o && (e.exports = o))
    }("heir", this, function() {
        "use strict";
        var e = {
            inherit: function(n, t, i) {
                (n.prototype = e.createObject(t.prototype)).constructor = n, (i || "undefined" == typeof i) && (n._super = t.prototype)
            },
            createObject: Object.create || function(e) {
                var n = function() {};
                return n.prototype = e, new n
            },
            mixin: function(n, t) {
                return e.merge(n.prototype, t)
            },
            merge: function(e, n) {
                var t;
                for (t in n) e[t] = n[t]
            },
            hasOwn: function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
        };
        return e
    })
}, function(e, n, t) {
    var i;
    ! function(n) {
        "use strict";
        function o() {}
        function r(e, n) {
            for (var t = e.length; t--;)
                if (e[t].listener === n) return t;
            return -1
        }
        function a(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        function s(e) {
            return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && s(e.listener)
        }
        var l = o.prototype,
            u = n.EventEmitter;
        l.getListeners = function(e) {
            var n, t, i = this._getEvents();
            if (e instanceof RegExp) {
                n = {};
                for (t in i) i.hasOwnProperty(t) && e.test(t) && (n[t] = i[t])
            } else n = i[e] || (i[e] = []);
            return n
        }, l.flattenListeners = function(e) {
            var n, t = [];
            for (n = 0; n < e.length; n += 1) t.push(e[n].listener);
            return t
        }, l.getListenersAsObject = function(e) {
            var n, t = this.getListeners(e);
            return t instanceof Array && (n = {}, n[e] = t), n || t
        }, l.addListener = function(e, n) {
            if (!s(n)) throw new TypeError("listener must be a function");
            var t, i = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (t in i) i.hasOwnProperty(t) && r(i[t], n) === -1 && i[t].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, l.on = a("addListener"), l.addOnceListener = function(e, n) {
            return this.addListener(e, {
                listener: n,
                once: !0
            })
        }, l.once = a("addOnceListener"), l.defineEvent = function(e) {
            return this.getListeners(e), this
        }, l.defineEvents = function(e) {
            for (var n = 0; n < e.length; n += 1) this.defineEvent(e[n]);
            return this
        }, l.removeListener = function(e, n) {
            var t, i, o = this.getListenersAsObject(e);
            for (i in o) o.hasOwnProperty(i) && (t = r(o[i], n), t !== -1 && o[i].splice(t, 1));
            return this
        }, l.off = a("removeListener"), l.addListeners = function(e, n) {
            return this.manipulateListeners(!1, e, n)
        }, l.removeListeners = function(e, n) {
            return this.manipulateListeners(!0, e, n)
        }, l.manipulateListeners = function(e, n, t) {
            var i, o, r = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof n || n instanceof RegExp)
                for (i = t.length; i--;) r.call(this, n, t[i]);
            else
                for (i in n) n.hasOwnProperty(i) && (o = n[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
            return this
        }, l.removeEvent = function(e) {
            var n, t = typeof e,
                i = this._getEvents();
            if ("string" === t) delete i[e];
            else if (e instanceof RegExp)
                for (n in i) i.hasOwnProperty(n) && e.test(n) && delete i[n];
            else delete this._events;
            return this
        }, l.removeAllListeners = a("removeEvent"), l.emitEvent = function(e, n) {
            var t, i, o, r, a, s = this.getListenersAsObject(e);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (t = s[r].slice(0), o = 0; o < t.length; o++) i = t[o], i.once === !0 && this.removeListener(e, i.listener), a = i.listener.apply(this, n || []), a === this._getOnceReturnValue() && this.removeListener(e, i.listener);
            return this
        }, l.trigger = a("emitEvent"), l.emit = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, n)
        }, l.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, l._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, l._getEvents = function() {
            return this._events || (this._events = {})
        }, o.noConflict = function() {
            return n.EventEmitter = u, o
        }, i = function() {
            return o
        }.call(n, t, n, e), !(void 0 !== i && (e.exports = i))
    }(this || {})
}, function(e, n) {
    e.exports = function(e, n) {
        return Array.prototype.slice.call(e, n)
    }
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(1),
        r = t(2),
        a = t(3),
        s = t(22),
        l = t(9),
        u = function(e) {
            function n(n, t, i, o, r, a, s, l, u) {
                void 0 === a && (a = "shown"), void 0 === s && (s = "active"), void 0 === l && (l = ["opacity", "transform"]), void 0 === u && (u = null);
                var c = e.call(this, n, t, i, a, l) || this;
                return c.selector = n, c.showClass = t, c.hideClass = i, c.activeClass = o, c.inactiveClass = r, c.state = a, c.activeState = s, c.targetTransitionEvents = l, c.nestedContentSelector = u, c
            }
            return i(n, e), n.prototype.activate = function() {
                var e = this;
                return this.inactive && this.shown ? new Promise(function(t) {
                    if (e.activeState = "activating", a["default"].trigger(n.EVENTS.ACTIVATING, e), e.inactiveClass && o.removeCssClass(e.element, e.inactiveClass), e.activeClass && o.addCssClass(e.element, e.activeClass), !e.shown) return r.debug("Ending activate() transition (alternative)."), e.activeState = "active", a["default"].trigger(n.EVENTS.ACTIVE, e), t(e);
                    if (0 == e.targetTransitionEvents.length) return t(e);
                    var i = setTimeout(function() {
                        r.debug("Element did not completely activate (state: " + e.state + ", activeState: " + e.activeState + ").")
                    }, e.transitionCheckTimeout);
                    o.once(e.element, "transitionend", function(r, s) {
                        if (r.target === e.element && o.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), s(), e.activeState = "active", a["default"].trigger(n.EVENTS.ACTIVE, e), t(e)
                    }, !0)
                }) : Promise.resolve(this)
            }, n.prototype.inactivate = function() {
                var e = this;
                return this.active ? new Promise(function(t) {
                    if (e.activeState = "inactivating", a["default"].trigger(n.EVENTS.INACTIVATING, e), e.activeClass && o.removeCssClass(e.element, e.activeClass), e.inactiveClass && o.addCssClass(e.element, e.inactiveClass), !e.shown) return e.activeState = "inactive", a["default"].trigger(n.EVENTS.INACTIVE, e), t(e);
                    if (0 == e.targetTransitionEvents.length) return t(e);
                    var i = setTimeout(function() {
                        r.debug("Element did not completely inactivate (state: " + e.state + ", activeState: " + e.activeState + ").")
                    }, e.transitionCheckTimeout);
                    o.once(e.element, "transitionend", function(r, s) {
                        if (r.target === e.element && o.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), s(), e.activeState = "inactive", a["default"].trigger(n.EVENTS.INACTIVE, e), t(e)
                    }, !0)
                }) : Promise.resolve(this)
            }, n.prototype.waitUntilActive = function() {
                var e = this;
                return this.active ? Promise.resolve(this) : new Promise(function(t) {
                    OneSignal.once(n.EVENTS.ACTIVE, function(n) {
                        if (n === e) return t(e)
                    }, !0)
                })
            }, n.prototype.waitUntilInactive = function() {
                var e = this;
                return this.inactive ? Promise.resolve(this) : new Promise(function(t) {
                    OneSignal.once(n.EVENTS.INACTIVE, function(n) {
                        if (n === e) return t(e)
                    }, !0)
                })
            }, Object.defineProperty(n, "EVENTS", {
                get: function() {
                    return l({}, s["default"].EVENTS, {
                        ACTIVATING: "activeAnimatedElementActivating",
                        ACTIVE: "activeAnimatedElementActive",
                        INACTIVATING: "activeAnimatedElementInactivating",
                        INACTIVE: "activeAnimatedElementInactive"
                    })
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "activating", {
                get: function() {
                    return "activating" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "active", {
                get: function() {
                    return "active" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "inactivating", {
                get: function() {
                    return "inactivating" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "inactive", {
                get: function() {
                    return "inactive" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), n
        }(s["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = u
}, function(e, n, t) {
    "use strict";
    var i = t(1),
        o = t(2),
        r = t(3),
        a = function() {
            function e(e, n, t, i, o, r, a) {
                void 0 === i && (i = "shown"), void 0 === o && (o = ["opacity", "transform"]), void 0 === r && (r = null), void 0 === a && (a = 500), this.selector = e, this.showClass = n, this.hideClass = t, this.state = i, this.targetTransitionEvents = o, this.nestedContentSelector = r, this.transitionCheckTimeout = a
            }
            return e.prototype.show = function() {
                var n = this;
                return this.hidden ? new Promise(function(t) {
                    if (n.state = "showing", r["default"].trigger(e.EVENTS.SHOWING, n), n.hideClass && i.removeCssClass(n.element, n.hideClass), n.showClass && i.addCssClass(n.element, n.showClass), 0 == n.targetTransitionEvents.length) return t(n);
                    var a = setTimeout(function() {
                        o.debug("Element did not completely show (state: " + n.state + ").")
                    }, n.transitionCheckTimeout);
                    i.once(n.element, "transitionend", function(o, s) {
                        if (o.target === n.element && i.contains(n.targetTransitionEvents, o.propertyName)) return clearTimeout(a), s(), n.state = "shown", r["default"].trigger(e.EVENTS.SHOWN, n), t(n)
                    }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.hide = function() {
                var n = this;
                return this.shown ? new Promise(function(t) {
                    return n.state = "hiding", r["default"].trigger(e.EVENTS.HIDING, n), n.showClass && i.removeCssClass(n.element, n.showClass), n.hideClass && i.addCssClass(n.element, n.hideClass), 0 == n.targetTransitionEvents.length ? t(n) : void i.once(n.element, "transitionend", function(a, s) {
                        var l = setTimeout(function() {
                            o.debug("Element did not completely hide (state: " + n.state + ").")
                        }, n.transitionCheckTimeout);
                        if (a.target === n.element && i.contains(n.targetTransitionEvents, a.propertyName)) return clearTimeout(l), s(), n.state = "hidden", r["default"].trigger(e.EVENTS.HIDDEN, n), t(n)
                    }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.waitUntilShown = function() {
                var n = this;
                return "shown" === this.state ? Promise.resolve(this) : new Promise(function(t) {
                    OneSignal.once(e.EVENTS.SHOWN, function(e) {
                        if (e === n) return t(n)
                    }, !0)
                })
            }, e.prototype.waitUntilHidden = function() {
                var n = this;
                return "hidden" === this.state ? Promise.resolve(this) : new Promise(function(t) {
                    OneSignal.once(e.EVENTS.HIDDEN, function(e) {
                        if (e === n) return t(n)
                    }, !0)
                })
            }, Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        SHOWING: "animatedElementShowing",
                        SHOWN: "animatedElementShown",
                        HIDING: "animatedElementHiding",
                        HIDDEN: "animatedElementHidden"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "content", {
                get: function() {
                    return this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML : this.element.innerHTML
                },
                set: function(e) {
                    this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML = e : this.element.innerHTML = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "element", {
                get: function() {
                    return document.querySelector(this.selector)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "showing", {
                get: function() {
                    return "showing" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shown", {
                get: function() {
                    return "shown" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hiding", {
                get: function() {
                    return "hiding" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hidden", {
                get: function() {
                    return "hidden" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = a
}, function(e, n, t) {
    "use strict";
    var i, o = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        r = t(11),
        a = t(37);
    ! function(e) {
        e[e.MissingAppId = 0] = "MissingAppId", e[e.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", e[e.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", e[e.UnsupportedEnvironment = 3] = "UnsupportedEnvironment"
    }(i = n.InvalidStateReason || (n.InvalidStateReason = {}));
    var InvalidStateError = function(e) {
        function InvalidStateError(n, t) {
            var o;
            switch (n) {
                case i.MissingAppId:
                    o = e.call(this, "Missing required app ID.") || this;
                    break;
                case i.RedundantPermissionMessage:
                    var r = "";
                    t.permissionPromptType && (r = "(" + a.PermissionPromptType[t.permissionPromptType] + ")"), o = e.call(this, "Another permission message " + r + " is being displayed.") || this;
                    break;
                case i.PushPermissionAlreadyGranted:
                    o = e.call(this, "Push permission has already been granted.") || this;
                    break;
                case i.UnsupportedEnvironment:
                    o = e.call(this, "The current environment does not support this operation.") || this
            }
            return o.reason = i[n], o
        }
        return o(InvalidStateError, e), InvalidStateError
    }(r["default"]);
    n.InvalidStateError = InvalidStateError
}, function(e, n) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], n = 0; n < this.length; n++) {
                var t = this[n];
                t[2] ? e.push("@media " + t[2] + "{" + t[1] + "}") : e.push(t[1])
            }
            return e.join("")
        }, e.i = function(n, t) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < n.length; o++) {
                var a = n[o];
                "number" == typeof a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a))
            }
        }, e
    }
}, function(e, n) {
    (function(n) {
        (function() {
            ! function(e) {
                "use strict";
                function n(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }
                function t(e) {
                    return "string" != typeof e && (e = String(e)), e
                }
                function i(e) {
                    var n = {
                        next: function() {
                            var n = e.shift();
                            return {
                                done: void 0 === n,
                                value: n
                            }
                        }
                    };
                    return h.iterable && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                }
                function o(e) {
                    this.map = {}, e instanceof o ? e.forEach(function(e, n) {
                        this.append(n, e)
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(n) {
                            this.append(n, e[n])
                        }, this)
                }
                function r(e) {
                    return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
                }
                function a(e) {
                    return new Promise(function(n, t) {
                        e.onload = function() {
                            n(e.result)
                        }, e.onerror = function() {
                            t(e.error)
                        }
                    })
                }
                function s(e) {
                    var n = new FileReader;
                    return n.readAsArrayBuffer(e), a(n)
                }
                function l(e) {
                    var n = new FileReader;
                    return n.readAsText(e), a(n)
                }
                function u() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, "string" == typeof e) this._bodyText = e;
                        else if (h.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (h.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (h.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                        else if (e) {
                            if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e)) throw new Error("unsupported BodyInit type")
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : h.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, h.blob ? (this.blob = function() {
                        var e = r(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this.blob().then(s)
                    }, this.text = function() {
                        var e = r(this);
                        if (e) return e;
                        if (this._bodyBlob) return l(this._bodyBlob);
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }) : this.text = function() {
                        var e = r(this);
                        return e ? e : Promise.resolve(this._bodyText)
                    }, h.formData && (this.formData = function() {
                        return this.text().then(g)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                function c(e) {
                    var n = e.toUpperCase();
                    return b.indexOf(n) > -1 ? n : e
                }
                function d(e, n) {
                    n = n || {};
                    var t = n.body;
                    if (d.prototype.isPrototypeOf(e)) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, n.headers || (this.headers = new o(e.headers)), this.method = e.method, this.mode = e.mode, t || (t = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = e;
                    if (this.credentials = n.credentials || this.credentials || "omit", !n.headers && this.headers || (this.headers = new o(n.headers)), this.method = c(n.method || this.method || "GET"), this.mode = n.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && t) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(t)
                }
                function g(e) {
                    var n = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var t = e.split("="),
                                i = t.shift().replace(/\+/g, " "),
                                o = t.join("=").replace(/\+/g, " ");
                            n.append(decodeURIComponent(i), decodeURIComponent(o))
                        }
                    }), n
                }
                function f(e) {
                    var n = new o;
                    return (e.getAllResponseHeaders() || "").trim().split("\n").forEach(function(e) {
                        var t = e.trim().split(":"),
                            i = t.shift().trim(),
                            o = t.join(":").trim();
                        n.append(i, o)
                    }), n
                }
                function p(e, n) {
                    n || (n = {}), this.type = "default", this.status = n.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = n.statusText, this.headers = n.headers instanceof o ? n.headers : new o(n.headers), this.url = n.url || "", this._initBody(e)
                }
                if (!e.fetch) {
                    var h = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };
                    o.prototype.append = function(e, i) {
                        e = n(e), i = t(i);
                        var o = this.map[e];
                        o || (o = [], this.map[e] = o), o.push(i)
                    }, o.prototype["delete"] = function(e) {
                        delete this.map[n(e)]
                    }, o.prototype.get = function(e) {
                        var t = this.map[n(e)];
                        return t ? t[0] : null
                    }, o.prototype.getAll = function(e) {
                        return this.map[n(e)] || []
                    }, o.prototype.has = function(e) {
                        return this.map.hasOwnProperty(n(e))
                    }, o.prototype.set = function(e, i) {
                        this.map[n(e)] = [t(i)]
                    }, o.prototype.forEach = function(e, n) {
                        Object.getOwnPropertyNames(this.map).forEach(function(t) {
                            this.map[t].forEach(function(i) {
                                e.call(n, i, t, this)
                            }, this)
                        }, this)
                    }, o.prototype.keys = function() {
                        var e = [];
                        return this.forEach(function(n, t) {
                            e.push(t)
                        }), i(e)
                    }, o.prototype.values = function() {
                        var e = [];
                        return this.forEach(function(n) {
                            e.push(n)
                        }), i(e)
                    }, o.prototype.entries = function() {
                        var e = [];
                        return this.forEach(function(n, t) {
                            e.push([t, n])
                        }), i(e)
                    }, h.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
                    var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    d.prototype.clone = function() {
                        return new d(this)
                    }, u.call(d.prototype), u.call(p.prototype), p.prototype.clone = function() {
                        return new p(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new o(this.headers),
                            url: this.url
                        })
                    }, p.error = function() {
                        var e = new p(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var m = [301, 302, 303, 307, 308];
                    p.redirect = function(e, n) {
                        if (m.indexOf(n) === -1) throw new RangeError("Invalid status code");
                        return new p(null, {
                            status: n,
                            headers: {
                                location: e
                            }
                        })
                    }, e.Headers = o, e.Request = d, e.Response = p, e.fetch = function(e, n) {
                        return new Promise(function(t, i) {
                            function o() {
                                return "responseURL" in a ? a.responseURL : /^X-Request-URL:/m.test(a.getAllResponseHeaders()) ? a.getResponseHeader("X-Request-URL") : void 0
                            }
                            var r;
                            r = d.prototype.isPrototypeOf(e) && !n ? e : new d(e, n);
                            var a = new XMLHttpRequest;
                            a.onload = function() {
                                var e = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: f(a),
                                    url: o()
                                };
                                t(new p("response" in a ? a.response : a.responseText, e))
                            }, a.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, a.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, a.open(r.method, r.url, !0), "include" === r.credentials && (a.withCredentials = !0), "responseType" in a && h.blob && (a.responseType = "blob"), r.headers.forEach(function(e, n) {
                                a.setRequestHeader(n, e)
                            }), a.send("undefined" == typeof r._bodyInit ? null : r._bodyInit)
                        })
                    }, e.fetch.polyfill = !0
                }
            }("undefined" != typeof self ? self : this), e.exports = n.fetch
        }).call(n)
    }).call(n, function() {
        return this
    }())
}, function(e, n, t) {
    var i, o;
    ! function(r) {
        var a = !1;
        if (i = r, o = "function" == typeof i ? i.call(n, t, n, e) : i, !(void 0 !== o && (e.exports = o)), a = !0, e.exports = r(), a = !0, !a) {
            var s = window.Cookies,
                l = window.Cookies = r();
            l.noConflict = function() {
                return window.Cookies = s, l
            }
        }
    }(function() {
        function e() {
            for (var e = 0, n = {}; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t) n[i] = t[i]
            }
            return n
        }
        function n(t) {
            function i(n, o, r) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (r = e({
                                path: "/"
                            }, i.defaults, r), "number" == typeof r.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                        }
                        try {
                            a = JSON.stringify(o), /^[\{\[]/.test(a) && (o = a)
                        } catch (l) {}
                        return o = t.write ? t.write(o, n) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", o, r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                    }
                    n || (a = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
                        var g = u[d].split("="),
                            f = g.slice(1).join("=");
                        '"' === f.charAt(0) && (f = f.slice(1, -1));
                        try {
                            var p = g[0].replace(c, decodeURIComponent);
                            if (f = t.read ? t.read(f, p) : t(f, p) || f.replace(c, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (l) {}
                            if (n === p) {
                                a = f;
                                break
                            }
                            n || (a[p] = f)
                        } catch (l) {}
                    }
                    return a
                }
            }
            return i.set = i, i.get = function(e) {
                return i.call(i, e)
            }, i.getJSON = function() {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function(n, t) {
                i(n, "", e(t, {
                    expires: -1
                }))
            }, i.withConverter = n, i
        }
        return n(function() {})
    })
}, function(e, n, t) {
    function i(e, n) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                o = f[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(u(i.parts[r], n))
            } else {
                for (var a = [], r = 0; r < i.parts.length; r++) a.push(u(i.parts[r], n));
                f[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function o(e) {
        for (var n = [], t = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                r = o[0],
                a = o[1],
                s = o[2],
                l = o[3],
                u = {
                    css: a,
                    media: s,
                    sourceMap: l
                };
            t[r] ? t[r].parts.push(u) : n.push(t[r] = {
                id: r,
                parts: [u]
            })
        }
        return n
    }
    function r(e, n) {
        var t = b(),
            i = S[S.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? t.insertBefore(n, i.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), S.push(n);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            t.appendChild(n)
        }
    }
    function a(e) {
        e.parentNode.removeChild(e);
        var n = S.indexOf(e);
        n >= 0 && S.splice(n, 1)
    }
    function s(e) {
        var n = document.createElement("style");
        return n.type = "text/css", r(e, n), n
    }
    function l(e) {
        var n = document.createElement("link");
        return n.rel = "stylesheet", r(e, n), n
    }
    function u(e, n) {
        var t, i, o;
        if (n.singleton) {
            var r = v++;
            t = m || (m = s(n)), i = c.bind(null, t, r, !1), o = c.bind(null, t, r, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = l(n), i = g.bind(null, t), o = function() {
            a(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = s(n), i = d.bind(null, t), o = function() {
            a(t)
        });
        return i(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    i(e = n)
                } else o()
            }
    }
    function c(e, n, t, i) {
        var o = t ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(n, o);
        else {
            var r = document.createTextNode(o),
                a = e.childNodes;
            a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(r, a[n]) : e.appendChild(r)
        }
    }
    function d(e, n) {
        var t = n.css,
            i = n.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = t;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }
    function g(e, n) {
        var t = n.css,
            i = n.sourceMap;
        i && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([t], {
                type: "text/css"
            }),
            r = e.href;
        e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
    }
    var f = {},
        p = function(e) {
            var n;
            return function() {
                return "undefined" == typeof n && (n = e.apply(this, arguments)), n
            }
        },
        h = p(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        b = p(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        m = null,
        v = 0,
        S = [];
    e.exports = function(e, n) {
        n = n || {}, "undefined" == typeof n.singleton && (n.singleton = h()), "undefined" == typeof n.insertAt && (n.insertAt = "bottom");
        var t = o(e);
        return i(t, n),
            function(e) {
                for (var r = [], a = 0; a < t.length; a++) {
                    var s = t[a],
                        l = f[s.id];
                    l.refs--, r.push(l)
                }
                if (e) {
                    i(o(e), n)
                }
                for (var a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (0 === l.refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete f[l.id]
                    }
                }
            }
    };
    var y = function() {
        var e = [];
        return function(n, t) {
            return e[n] = t, e.filter(Boolean).join("\n")
        }
    }()
}, function(e, n, t) {
    "use strict";
    function i() {
        throw new Error("Swivel couldn't detect ServiceWorker support. Please feature detect before using Swivel in your web pages!")
    }
    var o, r = t(72),
        a = t(73);
    o = "serviceWorker" in navigator ? r() : "clients" in self ? a() : {
        on: i,
        once: i,
        off: i,
        emit: i,
        broadcast: i
    }, e.exports = o
}, function(e, n, t) {
    (function(e, i) {
        function o(e, n) {
            this._id = e, this._clearFn = n
        }
        var r = t(67).nextTick,
            a = Function.prototype.apply,
            s = Array.prototype.slice,
            l = {},
            u = 0;
        n.setTimeout = function() {
            return new o(a.call(setTimeout, window, arguments), clearTimeout)
        }, n.setInterval = function() {
            return new o(a.call(setInterval, window, arguments), clearInterval)
        }, n.clearTimeout = n.clearInterval = function(e) {
            e.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, n.enroll = function(e, n) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = n
        }, n.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, n._unrefActive = n.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var n = e._idleTimeout;
            n >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, n))
        }, n.setImmediate = "function" == typeof e ? e : function(e) {
            var t = u++,
                i = !(arguments.length < 2) && s.call(arguments, 1);
            return l[t] = !0, r(function() {
                l[t] && (i ? e.apply(null, i) : e.call(null), n.clearImmediate(t))
            }), t
        }, n.clearImmediate = "function" == typeof i ? i : function(e) {
            delete l[e]
        }
    }).call(n, t(29).setImmediate, t(29).clearImmediate)
}, function(e, n, t) {
    "use strict";
    var i = t(1),
        o = t(19),
        r = t(18),
        a = t(4),
        s = t(7),
        l = t(9),
        u = t(2),
        c = function() {
            function e(e, n, t) {
                if (this.windowReference = e, this.sendToOrigin = n, this.receiveFromOrigin = t, !window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
                if (!n || !t) throw new Error("Invalid origin. Must be set.");
                r.merge(this, new o), this.channel = new MessageChannel, this.messagePort = null, this.isListening = !1, this.isConnected = !1, this.replies = {}
            }
            return Object.defineProperty(e, "HANDSHAKE_MESSAGE", {
                get: function() {
                    return "onesignal.postmam.handshake"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "CONNECTED_MESSAGE", {
                get: function() {
                    return "onesignal.postmam.connected"
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.listen = function() {
                return u.trace("(Postmam) Called listen()."), this.isListening ? void u.debug("(Postmam) Already listening for Postmam connections.") : void(a["default"].isBrowser() && (this.isListening = !0, u.debug("(Postmam) Listening for Postmam connections.", this), window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this))))
            }, e.prototype.startPostMessageReceive = function() {
                window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
            }, e.prototype.stopPostMessageReceive = function() {
                window.removeEventListener("message", this.onWindowPostMessageReceived)
            }, e.prototype.destroy = function() {
                this.stopPostMessageReceive(), this.removeEvent()
            }, e.prototype.onWindowPostMessageReceived = function(n) {
                if (this.isSafeOrigin(n.origin)) {
                    var t = n.data,
                        i = t.id,
                        o = t.command,
                        r = t.data,
                        a = t.source;
                    if (o === e.CONNECTED_MESSAGE) return this.emit("connect"), void(this.isConnected = !0);
                    var s = {
                            id: i,
                            command: o,
                            data: r,
                            source: a
                        },
                        c = l({
                            reply: this.reply.bind(this, s)
                        }, s);
                    if (this.replies.hasOwnProperty(i)) {
                        u.info("(Postmam) This message is a reply.");
                        this.replies[i].bind(window)(c) === !1 && delete this.replies[i]
                    } else this.emit(o, c)
                }
            }, e.prototype.onWindowMessagePostmanConnectReceived = function(n) {
                if (u.trace("(Postmam) (" + a["default"].getEnv() + ") Window postmessage for Postman connect received:", n), this.isSafeOrigin(n.origin)) {
                    return n.data.handshake !== e.HANDSHAKE_MESSAGE ? void u.info("(Postmam) Got a postmam message, but not our expected handshake:", n.data) : (u.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", n.data), window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived), this.messagePort = n.ports[0], this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), u.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."), this.messagePort.start(), this.isConnected = !0, u.info("(Postmam) (" + a["default"].getEnv() + ") Connected."), this.message(e.CONNECTED_MESSAGE), this.emit("connect"), void 0)
                }
            }, e.prototype.connect = function() {
                u.info("(Postmam) (" + a["default"].getEnv() + ") Establishing a connection to " + this.sendToOrigin + "."), this.messagePort = this.channel.port1, this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), this.messagePort.start(), this.windowReference.postMessage({
                    handshake: e.HANDSHAKE_MESSAGE
                }, this.sendToOrigin, [this.channel.port2])
            }, e.prototype.onMessageReceived = function(n) {
                if (!n.data) return void u.debug("(" + a["default"].getEnv() + ") Received an empty Postmam message:", n);
                var t = n.data,
                    i = t.id,
                    o = t.command,
                    r = t.data,
                    s = t.source;
                if (o === e.CONNECTED_MESSAGE) return this.emit("connect"), void(this.isConnected = !0);
                var c = {
                        id: i,
                        command: o,
                        data: r,
                        source: s
                    },
                    d = l({
                        reply: this.reply.bind(this, c)
                    }, c);
                if (this.replies.hasOwnProperty(i)) {
                    this.replies[i].bind(window)(d) === !1 && delete this.replies[i]
                } else this.emit(o, d)
            }, e.prototype.reply = function(e, n, t) {
                var i = {
                    id: e.id,
                    command: e.command,
                    data: n,
                    source: a["default"].getEnv(),
                    isReply: !0
                };
                "function" == typeof t && (this.replies[i.id] = t), this.messagePort.postMessage(i)
            }, e.prototype.postMessage = function(e, n, t) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" == typeof n) return void u.debug("You passed a function to data, did you mean to pass null?");
                var o = {
                    id: i.guid(),
                    command: e,
                    data: n,
                    source: a["default"].getEnv()
                };
                "function" == typeof t && (this.replies[o.id] = t), this.windowReference.postMessage(o, "*")
            }, e.prototype.message = function(e, n, t) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" == typeof n) return void u.debug("You passed a function to data, did you mean to pass null?");
                var o = {
                    id: i.guid(),
                    command: e,
                    data: n,
                    source: a["default"].getEnv()
                };
                "function" == typeof t && (this.replies[o.id] = t), this.messagePort.postMessage(o)
            }, e.prototype.generateSafeOrigins = function(e) {
                var n = [e];
                try {
                    var t = new URL(e),
                        i = t.host.replace("www.", "");
                    "https:" === t.protocol ? (n.push("https://" + i), n.push("https://www." + i)) : "http:" === t.protocol && (n.push("http://" + i), n.push("http://www." + i), n.push("https://" + i), n.push("https://www." + i))
                } catch (o) {}
                return n
            }, e.prototype.isSafeOrigin = function(e) {
                if (OneSignal.config) var n = OneSignal.config.subdomainName;
                else var n = "test";
                var t = this.generateSafeOrigins(this.receiveFromOrigin);
                return "https://onesignal.com" === e || e === "https://" + (n || "") + ".onesignal.com" || a["default"].isDev() && e === s.DEV_FRAME_HOST || a["default"].isStaging() && e === s.STAGING_FRAME_HOST || "*" === this.receiveFromOrigin || i.contains(t, e)
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = c
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(1),
        r = t(2),
        a = t(22),
        s = t(16),
        l = function(e) {
            function n(n) {
                var t = e.call(this, ".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body") || this;
                return t.bell = n, t.contentType = "", t.queued = [], t
            }
            return i(n, e), Object.defineProperty(n, "TIMEOUT", {
                get: function() {
                    return 2500
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n, "TYPES", {
                get: function() {
                    return {
                        TIP: "tip",
                        MESSAGE: "message",
                        QUEUED: "queued"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.display = function(e, n, t) {
                var i = this;
                return void 0 === t && (t = 0), r.debug("Calling %cdisplay(" + e + ", " + n + ", " + t + ").", o.getConsoleStyle("code")), (this.shown ? this.hide() : o.nothing()).then(function() {
                    i.content = o.decodeHtmlEntities(n), i.contentType = e
                }).then(function() {
                    return i.show()
                }).then(function() {
                    return o.delay(t)
                }).then(function() {
                    return i.hide()
                }).then(function() {
                    i.content = i.getTipForState(), i.contentType = "tip"
                })
            }, n.prototype.getTipForState = function() {
                return this.bell.state === s["default"].STATES.UNSUBSCRIBED ? this.bell.text["tip.state.unsubscribed"] : this.bell.state === s["default"].STATES.SUBSCRIBED ? this.bell.text["tip.state.subscribed"] : this.bell.state === s["default"].STATES.BLOCKED ? this.bell.text["tip.state.blocked"] : void 0
            }, n.prototype.enqueue = function(e, n) {
                var t = this;
                return void 0 === n && (n = !1), this.queued.push(o.decodeHtmlEntities(e)), new Promise(function(e) {
                    t.bell.badge.shown ? t.bell.badge.hide().then(function() {
                        return t.bell.badge.increment()
                    }).then(function() {
                        return t.bell.badge.show()
                    }).then(e) : (t.bell.badge.increment(), t.bell.initialized ? t.bell.badge.show().then(e) : e())
                })
            }, n.prototype.dequeue = function(e) {
                var n = this,
                    t = this.queued.pop(e);
                return new Promise(function(e) {
                    n.bell.badge.shown ? n.bell.badge.hide().then(function() {
                        return n.bell.badge.decrement()
                    }).then(function(e) {
                        return e > 0 ? n.bell.badge.show() : Promise.resolve(n)
                    }).then(e(t)) : (n.bell.badge.decrement(), e(t))
                })
            }, n
        }(a["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = l
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(11),
        AlreadySubscribedError = function(e) {
            function AlreadySubscribedError() {
                return e.call(this, "This operation can only be performed when the user is not subscribed.") || this
            }
            return i(AlreadySubscribedError, e), AlreadySubscribedError
        }(o["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = AlreadySubscribedError
}, function(e, n, t) {
    "use strict";
    var i, o = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        r = t(11);
    ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.NoDeviceId = 1] = "NoDeviceId", e[e.OptedOut = 2] = "OptedOut"
    }(i = n.NotSubscribedReason || (n.NotSubscribedReason = {}));
    var NotSubscribedError = function(e) {
        function NotSubscribedError(n) {
            var t;
            switch (n) {
                case i.Unknown || i.NoDeviceId:
                    t = e.call(this, "This operation can only be performed after the user is subscribed.") || this;
                    break;
                case i.OptedOut:
                    t = e.call(this, "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.") || this
            }
            return t.reason = i[n], t
        }
        return o(NotSubscribedError, e), NotSubscribedError
    }(r["default"]);
    n.NotSubscribedError = NotSubscribedError
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(11),
        PushPermissionNotGrantedError = function(e) {
            function PushPermissionNotGrantedError() {
                return e.call(this, "The push permission was not granted.") || this
            }
            return i(PushPermissionNotGrantedError, e), PushPermissionNotGrantedError
        }(o["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = PushPermissionNotGrantedError
}, function(e, n, t) {
    "use strict";
    var i = t(7),
        o = t(4),
        r = t(2),
        a = t(14),
        s = t(3),
        l = t(5),
        u = t(8),
        c = t(1),
        d = t(30),
        g = t(10),
        f = t(17),
        p = t(6),
        h = t(12),
        b = t(23),
        m = t(32),
        v = function() {
            function e() {}
            return e.storeInitialValues = function() {
                return Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission(), OneSignal.getUserId(), OneSignal.isOptedOut()]).then(function(e) {
                    var n = e[0],
                        t = e[1],
                        i = (e[2], e[3]);
                    return a["default"].put("subscription.optedOut", i), Promise.all([l["default"].put("Options", {
                        key: "isPushEnabled",
                        value: n
                    }), l["default"].put("Options", {
                        key: "notificationPermission",
                        value: t
                    })])
                })
            }, e.onSdkInitialized = function() {
                e.storeInitialValues(), e.installNativePromptPermissionChangedHook(), navigator.serviceWorker && "https:" === window.location.protocol && navigator.serviceWorker.getRegistration().then(function(e) {
                    e && e.active && g["default"].establishServiceWorkerChannel(e)
                })["catch"](function(e) {
                    9 === e.code ? ("http:" === location.protocol || o["default"].isIframe()) && r.debug("Expected error getting service worker registration on " + location.href + ":", e) : r.error("Error getting Service Worker registration on " + location.href + ":", e)
                }), g["default"].showNotifyButton(), u.safari && OneSignal.config.autoRegister === !1 && OneSignal.isPushNotificationsEnabled(function(n) {
                    n && e.sessionInit({
                        __sdkCall: !0
                    })
                }), p["default"].isUsingSubscriptionWorkaround() && !g["default"].isContinuingBrowserSession() && (r.debug("(" + o["default"].getEnv() + ") Updating session info for HTTP site."), OneSignal.isPushNotificationsEnabled(function(e) {
                    if (e) return g["default"].getAppId().then(function(e) {
                        return g["default"].registerWithOneSignal(e, null)
                    })
                })), p["default"].checkAndWipeUserSubscription(), g["default"].checkAndDoHttpPermissionRequest()
            }, e.installNativePromptPermissionChangedHook = function() {
                !navigator.permissions || u.firefox && Number(u.version) <= 45 || (OneSignal._usingNativePermissionHook = !0, navigator.permissions.query({
                    name: "notifications"
                }).then(function(e) {
                    e.onchange = function() {
                        h["default"].triggerNotificationPermissionChanged()
                    }
                }))
            }, e.saveInitOptions = function() {
                var e = [];
                OneSignal.config.persistNotification === !1 ? e.push(l["default"].put("Options", {
                    key: "persistNotification",
                    value: !1
                })) : e.push(l["default"].put("Options", {
                    key: "persistNotification",
                    value: !0
                }));
                var n = OneSignal.config.webhooks;
                return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(function(t) {
                    n && n[t] ? e.push(l["default"].put("Options", {
                        key: "webhooks." + t,
                        value: n[t]
                    })) : e.push(l["default"].put("Options", {
                        key: "webhooks." + t,
                        value: !1
                    }))
                }), n && n.cors ? e.push(l["default"].put("Options", {
                    key: "webhooks.cors",
                    value: !0
                })) : e.push(l["default"].put("Options", {
                    key: "webhooks.cors",
                    value: !1
                })), OneSignal.config.notificationClickHandlerMatch ? e.push(l["default"].put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: OneSignal.config.notificationClickHandlerMatch
                })) : e.push(l["default"].put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact"
                })), OneSignal.config.notificationClickHandlerAction ? e.push(l["default"].put("Options", {
                    key: "notificationClickHandlerAction",
                    value: OneSignal.config.notificationClickHandlerAction
                })) : e.push(l["default"].put("Options", {
                    key: "notificationClickHandlerAction",
                    value: "navigate"
                })), OneSignal.config.serviceWorkerRefetchRequests === !1 ? e.push(l["default"].put("Options", {
                    key: "serviceWorkerRefetchRequests",
                    value: !1
                })) : e.push(l["default"].put("Options", {
                    key: "serviceWorkerRefetchRequests",
                    value: !0
                })), Promise.all(e)
            }, e.internalInit = function() {
                r.debug("Called %cinternalInit()", c.getConsoleStyle("code")), l["default"].get("Ids", "appId").then(function(n) {
                    return !sessionStorage.getItem("ONE_SIGNAL_SESSION") || OneSignal.config.subdomainName || "denied" != window.Notification.permission && sessionStorage.getItem("ONE_SIGNAL_NOTIFICATION_PERMISSION") != window.Notification.permission ? (sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", window.Notification.permission), u.safari && OneSignal.config.autoRegister === !1 ? (r.debug("On Safari and autoregister is false, skipping sessionInit()."), void(p["default"].isUsingSubscriptionWorkaround() || s["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED))) : OneSignal.config.autoRegister !== !1 || OneSignal.config.subdomainName ? "visible" !== document.visibilityState ? void c.once(document, "visibilitychange", function(n, t) {
                        "visible" === document.visibilityState && (t(), e.sessionInit({
                            __sdkCall: !0
                        }))
                    }, !0) : void e.sessionInit({
                        __sdkCall: !0
                    }) : (r.debug("Skipping internal init. Not auto-registering and no subdomain."), OneSignal.isPushNotificationsEnabled().then(function(e) {
                        e && !p["default"].isUsingSubscriptionWorkaround() ? (r.info("Because the user is already subscribed and has enabled notifications, we will re-register their GCM token."), p["default"].registerForW3CPush({})) : f["default"].updateServiceWorker()
                    }), void s["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED))) : void s["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED)
                })
            }, e.initSaveState = function() {
                return g["default"].getAppId().then(function(e) {
                    return Promise.all([l["default"].put("Ids", {
                        type: "appId",
                        id: e
                    }), l["default"].put("Options", {
                        key: "pageTitle",
                        value: document.title
                    })]).then(function() {
                        r.info("OneSignal: Set pageTitle to be '" + document.title + "'.")
                    })
                })
            }, e.sessionInit = function(e) {
                if (r.debug("Called %csessionInit(" + JSON.stringify(e) + ")", c.getConsoleStyle("code")), OneSignal._sessionInitAlreadyRunning) return void r.debug("Returning from sessionInit because it has already been called.");
                OneSignal._sessionInitAlreadyRunning = !0;
                location.protocol + "//";
                u.safari ? OneSignal.config.safari_web_id && g["default"].getAppId().then(function(e) {
                        window.safari.pushNotification.requestPermission(OneSignal._API_URL + "safari", OneSignal.config.safari_web_id, {
                            app_id: e
                        }, function(n) {
                            if (r.info("Safari Registration Result:", n), n.deviceToken) {
                                var t = {
                                    endpointOrToken: n.deviceToken.toLowerCase()
                                };
                                g["default"].registerWithOneSignal(e, t)
                            } else g["default"].beginTemporaryBrowserSession();
                            h["default"].triggerNotificationPermissionChanged()
                        })
                    }) : e.modalPrompt && e.fromRegisterFor ? Promise.all([g["default"].getAppId(), OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission()]).then(function(n) {
                    var t = n[0],
                        a = n[1],
                        l = n[2],
                        u = OneSignal.modalUrl + "?" + g["default"].getPromptOptionsQueryString() + "&id=" + t + "&httpsPrompt=true&pushEnabled=" + a + "&permissionBlocked=" + ("denied" === l) + "&promptType=modal";
                    r.info("Opening HTTPS modal prompt:", u);
                    var c = g["default"].createHiddenSubscriptionDomModal(u),
                        f = "https://onesignal.com";
                    o["default"].isDev() && (f = i.DEV_FRAME_HOST);
                    var h = f;
                    OneSignal.modalPostmam = new d["default"](c, f, h), OneSignal.modalPostmam.startPostMessageReceive(), OneSignal.modalPostmam.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, function(e) {
                        g["default"].showSubscriptionDomModal(), s["default"].trigger("modalLoaded")
                    }), OneSignal.modalPostmam.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, function(n) {
                        r.debug("User accepted the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1;
                        var t = document.getElementById("OneSignal-iframe-modal");
                        t.parentNode.removeChild(t), OneSignal.modalPostmam.destroy(), g["default"].triggerCustomPromptClicked("granted"), r.debug("Calling setSubscription(true)"), OneSignal.setSubscription(!0).then(function() {
                            return p["default"].registerForW3CPush(e)
                        })
                    }), OneSignal.modalPostmam.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, function(e) {
                        r.debug("User rejected the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1;
                        var n = document.getElementById("OneSignal-iframe-modal");
                        n.parentNode.removeChild(n), OneSignal.modalPostmam.destroy(), g["default"].triggerCustomPromptClicked("denied")
                    }), OneSignal.modalPostmam.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, function(e) {
                        r.info("Detected modal is closing."), OneSignal.modalPostmam.destroy()
                    })
                }) : "serviceWorker" in navigator && !p["default"].isUsingSubscriptionWorkaround() ? e.__sdkCall && !g["default"].wasHttpsNativePromptDismissed() ? p["default"].registerForW3CPush(e) : e.__sdkCall && g["default"].wasHttpsNativePromptDismissed() ? (r.debug("OneSignal: Not automatically showing native HTTPS prompt because the user previously dismissed it."), OneSignal._sessionInitAlreadyRunning = !1) : p["default"].registerForW3CPush(e) : (OneSignal.config.autoRegister !== !0 && r.debug("OneSignal: Not automatically showing popover because autoRegister is not specifically true."), g["default"].isHttpPromptAlreadyShown() && r.debug("OneSignal: Not automatically showing popover because it was previously shown in the same session."), OneSignal.config.autoRegister !== !0 || g["default"].isHttpPromptAlreadyShown() || OneSignal.showHttpPrompt()["catch"](function(e) {
                    if (!(e instanceof b.InvalidStateError && e.reason === b.InvalidStateReason[b.InvalidStateReason.RedundantPermissionMessage] || e instanceof m["default"])) throw e
                })), s["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED)
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = v
}, function(e, n, t) {
    "use strict";
    var i = t(2),
        o = t(26),
        r = function() {
            function e() {}
            return e.unmarkHttpsNativePromptDismissed = function() {
                o.remove("onesignal-notification-prompt") ? i.debug("OneSignal: Removed the native notification prompt dismissed cookie.") : i.debug("OneSignal: Cookie not marked.")
            }, e.markHttpsNativePromptDismissed = function() {
                return i.debug("OneSignal: User dismissed the native notification prompt; storing flag."), o.set("onesignal-notification-prompt", "dismissed", {
                    expires: .333
                })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = r
}, function(e, n) {
    "use strict";
    var t;
    ! function(e) {
        e[e.HttpPermissionRequest = "HTTP permission request"] = "HttpPermissionRequest", e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
    }(t = n.PermissionPromptType || (n.PermissionPromptType = {}))
}, function(e, n, t) {
    "use strict";
    var i = t(20),
        o = t(59);
    e.exports = function(e, n) {
        var t = n || {},
            r = {};
        return void 0 === e && (e = {}), e.on = function(n, t) {
            return r[n] ? r[n].push(t) : r[n] = [t], e
        }, e.once = function(n, t) {
            return t._once = !0, e.on(n, t), e
        }, e.off = function(n, t) {
            var i = arguments.length;
            if (1 === i) delete r[n];
            else if (0 === i) r = {};
            else {
                var o = r[n];
                if (!o) return e;
                o.splice(o.indexOf(t), 1)
            }
            return e
        }, e.emit = function() {
            var n = i(arguments);
            return e.emitterSnapshot(n.shift()).apply(this, n)
        }, e.emitterSnapshot = function(n) {
            var a = (r[n] || []).slice(0);
            return function() {
                var r = i(arguments),
                    s = this || e;
                if ("error" === n && t["throws"] !== !1 && !a.length) throw 1 === r.length ? r[0] : r;
                return a.forEach(function(i) {
                    t.async ? o(i, r, s) : i.apply(s, r), i._once && e.off(n, i)
                }), e
            }
        }, e
    }
}, function(e, n) {
    "use strict";
    function t(e) {
        return e ? e.toString() : null
    }
    function i(e) {
        return e ? new Error(e) : null
    }
    function o(e) {
        var n = e.shift();
        return "error" === n ? {
            error: t(e[0]),
            type: n,
            payload: []
        } : {
            error: null,
            type: n,
            payload: e
        }
    }
    function r(e, n) {
        function t(t) {
            var o = t.data;
            "error" === o.type ? e.emit.call(null, "error", n, i(o.error)) : e.emit.apply(null, [o.type, n].concat(o.payload))
        }
        return t
    }
    e.exports = {
        parsePayload: o,
        emission: r
    }
}, function(e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        o = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        r = t(7),
        a = t(4),
        s = t(15),
        l = t(13),
        u = t(2),
        c = t(3),
        d = t(26),
        g = t(5),
        f = t(8),
        p = t(1),
        h = t(58),
        b = t(9),
        m = t(19),
        v = t(18),
        S = t(28),
        y = t(12),
        w = t(10),
        O = t(56),
        E = t(46),
        P = t(14),
        I = t(23),
        T = t(35),
        x = t(17),
        _ = t(6),
        k = t(48),
        N = t(36),
        C = t(52),
        R = t(47),
        A = t(34),
        M = t(33),
        D = t(32),
        U = t(33),
        H = t(37),
        L = function() {
            function e() {}
            return e.setDefaultNotificationUrl = function(e) {
                return i(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!h.ValidatorUtils.isValidUrl(e, {
                                        allowNull: !0
                                    })) throw new E.InvalidArgumentError("url", E.InvalidArgumentReason.Malformed);
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return t.sent(), p.logMethodCall("setDefaultNotificationUrl", e), [4, g["default"].getAppState()];
                            case 2:
                                return n = t.sent(), n.defaultNotificationUrl = e, [4, g["default"].setAppState(n)];
                            case 3:
                                return t.sent(), [2]
                        }
                    })
                })
            }, e.setDefaultTitle = function(e) {
                return i(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return t.sent(), p.logMethodCall("setDefaultTitle", e), [4, g["default"].getAppState()];
                            case 2:
                                return n = t.sent(), n.defaultNotificationTitle = e, [4, g["default"].setAppState(n)];
                            case 3:
                                return t.sent(), [2]
                        }
                    })
                })
            }, e.syncHashedEmail = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!e) throw new E.InvalidArgumentError("email", E.InvalidArgumentReason.Empty);
                                if (n = p.prepareEmailForHashing(e), !p.isValidEmail(n)) throw new E.InvalidArgumentError("email", E.InvalidArgumentReason.Malformed);
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("syncHashedEmail", e), [4, g["default"].getAppConfig()];
                            case 2:
                                return t = o.sent().appId, [4, g["default"].getSubscription()];
                            case 3:
                                if (i = o.sent().deviceId, !i) throw new M.NotSubscribedError(U.NotSubscribedReason.NoDeviceId);
                                return [4, s["default"].updatePlayer(t, i, {
                                    em_m: p.md5(n),
                                    em_s: p.sha1(n)
                                })];
                            case 4:
                                if (r = o.sent(), r && r.success) return [2, !0];
                                throw r
                        }
                    })
                })
            }, e.isPushNotificationsSupported = function() {
                return p.logMethodCall("isPushNotificationsSupported"), !0
            }, e.init = function(n) {
                function t() {
                    if (!e.__initAlreadyCalled) {
                        if (e.__initAlreadyCalled = !0, w["default"].fixWordpressManifestIfMisplaced(), _["default"].isUsingSubscriptionWorkaround()) {
                            if (!e.config.subdomainName) return void u.error("OneSignal: Your JavaScript initialization code is missing a required parameter %csubdomainName", p.getConsoleStyle("code"), ". HTTP sites require this parameter to initialize correctly. Please see steps 1.4 and 2 at https://documentation.onesignal.com/docs/web-push-sdk-setup-http)");
                            e.config.subdomainName = w["default"].autoCorrectSubdomain(e.config.subdomainName), a["default"].isDev() ? (e.iframeUrl = r.DEV_FRAME_HOST + "/webPushIframe", e.popupUrl = r.DEV_FRAME_HOST + "/subscribe") : (e.iframeUrl = "https://" + e.config.subdomainName + ".onesignal.com/webPushIframe", e.popupUrl = "https://" + e.config.subdomainName + ".onesignal.com/subscribe")
                        } else a["default"].isDev() ? e.modalUrl = r.DEV_FRAME_HOST + "/webPushModal" : a["default"].isStaging() ? e.modalUrl = r.STAGING_FRAME_HOST + "/webPushModal" : e.modalUrl = "https://onesignal.com/webPushModal";
                        var n = Promise.resolve();
                        _["default"].isUsingSubscriptionWorkaround() && (n = k["default"].loadSubdomainIFrame().then(function() {
                            return u.info("Subdomain iFrame loaded")
                        })), e.on(g["default"].EVENTS.REBUILT, y["default"].onDatabaseRebuilt), e.on(e.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, y["default"].onNotificationPermissionChange), e.on(e.EVENTS.SUBSCRIPTION_CHANGED, y["default"]._onSubscriptionChanged), e.on(e.EVENTS.SDK_INITIALIZED, T["default"].onSdkInitialized), n.then(function() {
                            if (window.addEventListener("focus", function(e) {
                                    w["default"].checkAndTriggerNotificationPermissionChanged()
                                }), f.safari && "undefined" == typeof window.fetch) {
                                var n = document.createElement("script");
                                n.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.9.0/fetch.js"), document.head.appendChild(n)
                            }
                            T["default"].initSaveState().then(function() {
                                return T["default"].saveInitOptions()
                            }).then(function() {
                                a["default"].isCustomSubdomain() ? c["default"].trigger(e.EVENTS.SDK_INITIALIZED) : T["default"].internalInit()
                            })
                        })
                    }
                }
                return p.logMethodCall("init", n), x["default"].applyServiceWorkerEnvPrefixes(), e._initCalled ? (u.error("OneSignal: Please don't call init() more than once. Any extra calls to init() are ignored. The following parameters were not processed: %c" + JSON.stringify(Object.keys(n)), p.getConsoleStyle("code")), "return") : (e._initCalled = !0, e.config = b({
                    path: "/"
                }, n), f.safari && !e.config.safari_web_id ? void u.warn("OneSignal: Required parameter %csafari_web_id", p.getConsoleStyle("code"), "was not passed to OneSignal.init(), skipping SDK initialization.") : void("complete" === document.readyState || "interactive" === document.readyState ? t() : (u.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."), window.addEventListener("DOMContentLoaded", function() {
                    t()
                }), document.onreadystatechange = function() {
                    "complete" !== document.readyState && "interactive" !== document.readyState || t()
                })))
            }, e.showHttpPrompt = function(n) {
                return p.awaitOneSignalInitAndSupported().then(function() {
                    if (e.__isPopoverShowing) throw new I.InvalidStateError(I.InvalidStateReason.RedundantPermissionMessage, {
                        permissionPromptType: H.PermissionPromptType.SlidedownPermissionMessage
                    });
                    return Promise.all([e.getNotificationPermission(), e.isPushNotificationsEnabled(), e.getSubscription(), g["default"].get("Options", "popoverDoNotPrompt"), e.httpHelper.isShowingHttpPermissionRequest()]).then(function(t) {
                        var i = t[0],
                            o = t[1],
                            r = t[2],
                            a = t[3];
                        t[4];
                        if (a === !0 && (!n || 0 == n.force)) throw new R["default"];
                        if (i === C.NotificationPermission.Denied) throw new A["default"];
                        if (o) throw new D["default"];
                        if (!r) throw new M.NotSubscribedError(U.NotSubscribedReason.OptedOut);
                        if (w["default"].isUsingHttpPermissionRequest()) throw u.debug("The slidedown permission message cannot be used while the HTTP perm. req. is enabled."), new I.InvalidStateError(I.InvalidStateReason.RedundantPermissionMessage, {
                            permissionPromptType: H.PermissionPromptType.HttpPermissionRequest
                        });
                        w["default"].markHttpPopoverShown(), e.popover = new O["default"](e.config.promptOptions), e.popover.create(), u.debug("Showing the HTTP popover."), e.notifyButton && "hidden" !== e.notifyButton.launcher.state && e.notifyButton.launcher.waitUntilShown().then(function() {
                            e.notifyButton.launcher.hide()
                        }), e.once(O["default"].EVENTS.SHOWN, function() {
                            e.__isPopoverShowing = !0
                        }), e.once(O["default"].EVENTS.CLOSED, function() {
                            e.__isPopoverShowing = !1, e.notifyButton && e.notifyButton.launcher.show()
                        }), e.once(O["default"].EVENTS.ALLOW_CLICK, function() {
                            e.popover.close(), u.debug("Setting flag to not show the popover to the user again."), g["default"].put("Options", {
                                key: "popoverDoNotPrompt",
                                value: !0
                            }), e.registerForPushNotifications({
                                autoAccept: !0
                            })
                        }), e.once(O["default"].EVENTS.CANCEL_CLICK, function() {
                            u.debug("Setting flag to not show the popover to the user again."), g["default"].put("Options", {
                                key: "popoverDoNotPrompt",
                                value: !0
                            })
                        })
                    })
                })
            }, e.registerForPushNotifications = function(n) {
                function t() {
                    _["default"].isUsingSubscriptionWorkaround() ? k["default"].loadPopup(n) : (n || (n = {}), n.fromRegisterFor = !0, T["default"].sessionInit(n))
                }
                return e.initialized ? t() : void e.once(e.EVENTS.SDK_INITIALIZED, function() {
                    return t()
                })
            }, e.showHttpPermissionRequest = function(n) {
                return u.debug("Called showHttpPermissionRequest()."), p.awaitOneSignalInitAndSupported().then(function() {
                    return new Promise(function(t, i) {
                        if (f.safari) throw new I.InvalidStateError(I.InvalidStateReason.UnsupportedEnvironment);
                        if (e.__isPopoverShowing) throw new I.InvalidStateError(I.InvalidStateReason.RedundantPermissionMessage, {
                            permissionPromptType: H.PermissionPromptType.SlidedownPermissionMessage
                        });
                        if (e._showingHttpPermissionRequest) throw new I.InvalidStateError(I.InvalidStateReason.RedundantPermissionMessage, {
                            permissionPromptType: H.PermissionPromptType.HttpPermissionRequest
                        });
                        if (_["default"].isUsingSubscriptionWorkaround()) e.iframePostmam.message(e.POSTMAM_COMMANDS.SHOW_HTTP_PERMISSION_REQUEST, n, function(e) {
                            var n = e.data,
                                o = n.status,
                                r = n.result;
                            "resolve" === o ? t(r) : i(r)
                        });
                        else {
                            if (!w["default"].isUsingHttpPermissionRequest()) return u.debug("Not showing HTTP permission request because its not enabled. Check init option httpPermissionRequest."), void c["default"].trigger(e.EVENTS.TEST_INIT_OPTION_DISABLED);
                            if (w["default"].wasHttpsNativePromptDismissed()) {
                                if (n._sdkCall === !0) return void u.debug("The HTTP perm. req. permission was dismissed, so we are not showing the request.");
                                u.debug("The HTTP perm. req. was previously dismissed, but this call was made explicitly.")
                            }
                            if (u.debug("(" + a["default"].getEnv() + ") Showing HTTP permission request."), "default" !== window.Notification.permission) throw c["default"].trigger(e.EVENTS.TEST_WOULD_DISPLAY), new I.InvalidStateError(I.InvalidStateReason.PushPermissionAlreadyGranted);
                            e._showingHttpPermissionRequest = !0, window.Notification.requestPermission(function(n) {
                                e._showingHttpPermissionRequest = !1, t(n), u.debug("HTTP Permission Request Result:", n), "default" === n && (N["default"].markHttpsNativePromptDismissed(), e.iframePostmam.message(e.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                    permission: n,
                                    forceUpdatePermission: !0
                                }))
                            }), c["default"].trigger(e.EVENTS.PERMISSION_PROMPT_DISPLAYED)
                        }
                    })
                })
            }, e.getNotificationPermission = function(n) {
                return p.awaitOneSignalInitAndSupported().then(function() {
                    var n = null;
                    return e.config && (n = e.config.safari_web_id), w["default"].getNotificationPermission(n)
                }).then(function(e) {
                    return n && n(e), e
                })
            }, e.getTags = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t, i;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("getTags", e), [4, g["default"].getAppConfig()];
                            case 2:
                                return n = o.sent().appId, [4, g["default"].getSubscription()];
                            case 3:
                                return t = o.sent().deviceId, t ? [4, s["default"].getPlayer(n, t)] : (u.info(new M.NotSubscribedError(U.NotSubscribedReason.NoDeviceId)), [2, null]);
                            case 4:
                                return i = o.sent().tags, p.executeCallback(e, i), [2, i]
                        }
                    })
                })
            }, e.sendTag = function(n, t, r) {
                return i(this, void 0, void 0, function() {
                    var i;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return i = {}, i[n] = t, [4, e.sendTags(i, r)];
                            case 1:
                                return [2, o.sent()]
                        }
                    })
                })
            }, e.sendTags = function(n, t) {
                return i(this, void 0, void 0, function() {
                    var i, r, a;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("sendTags", n, t), n && 0 !== Object.keys(n).length ? (Object.keys(n).forEach(function(e) {
                                    n[e] === !1 && (n[e] = "false")
                                }), [4, g["default"].getAppConfig()]) : (u.info(new E.InvalidArgumentError("tags", E.InvalidArgumentReason.Empty)), [2]);
                            case 2:
                                return i = o.sent().appId, [4, g["default"].getSubscription()];
                            case 3:
                                return r = o.sent().deviceId, r ? [3, 5] : [4, p.awaitSdkEvent(e.EVENTS.REGISTERED)];
                            case 4:
                                o.sent(), o.label = 5;
                            case 5:
                                return [4, g["default"].getSubscription()];
                            case 6:
                                return a = o.sent().deviceId, [4, s["default"].updatePlayer(i, a, {
                                    tags: n
                                })];
                            case 7:
                                return o.sent(), p.executeCallback(t, n), [2, n]
                        }
                    })
                })
            }, e.deleteTag = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.deleteTags([n])];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e.deleteTags = function(n, t) {
                return i(this, void 0, void 0, function() {
                    var i, r, a, s, l, c;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (o.sent(), p.logMethodCall("deleteTags", n, t), !h.ValidatorUtils.isValidArray(n)) throw new E.InvalidArgumentError("tags", E.InvalidArgumentReason.Malformed);
                                for (0 === n.length && u.info(new E.InvalidArgumentError("tags", E.InvalidArgumentReason.Empty)), i = {}, r = 0, a = n; r < a.length; r++) s = a[r], i[s] = "";
                                return [4, e.sendTags(i)];
                            case 2:
                                return l = o.sent(), c = Object.keys(l), p.executeCallback(t, c), [2, c]
                        }
                    })
                })
            }, e.addListenerForNotificationOpened = function(n) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return t.sent(), p.logMethodCall("addListenerForNotificationOpened", n), e.once(e.EVENTS.NOTIFICATION_CLICKED, function(e) {
                                    p.executeCallback(n, e)
                                }), y["default"].fireStoredNotificationClicks(e.config.pageUrl), [2]
                        }
                    })
                })
            }, e.getIdsAvailable = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("getIdsAvailable", e), [4, g["default"].getSubscription()];
                            case 2:
                                return n = o.sent(), t = n.deviceId, i = n.pushToken, r = {
                                    userId: t,
                                    registrationId: i
                                }, p.executeCallback(e, r), [2, r]
                        }
                    })
                })
            }, e.isPushNotificationsEnabled = function(n) {
                return i(this, void 0, void 0, function() {
                    var t, i, r, s, l, u, c;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("isPushNotificationsEnabled", n), [4, g["default"].getSubscription()];
                            case 2:
                                return t = o.sent(), i = t.deviceId, r = t.pushToken, s = t.optedOut, [4, e.getNotificationPermission()];
                            case 3:
                                return l = o.sent(), [4, x["default"].isServiceWorkerActive()];
                            case 4:
                                return u = o.sent(), c = !1, c = !a["default"].supportsServiceWorkers() || _["default"].isUsingSubscriptionWorkaround() || a["default"].isIframe() ? !(!i || !r || l !== C.NotificationPermission.Granted || s) : !(!i || !r || l !== C.NotificationPermission.Granted || s || !u), p.executeCallback(n, c), [2, c]
                        }
                    })
                })
            }, e.setSubscription = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("setSubscription", e), [4, g["default"].getAppConfig()];
                            case 2:
                                return n = o.sent(), t = n.appId, [4, g["default"].getSubscription()];
                            case 3:
                                if (i = o.sent(), r = i.deviceId, !n.appId) throw new I.InvalidStateError(I.InvalidStateReason.MissingAppId);
                                if (!h.ValidatorUtils.isValidBoolean(e)) throw new E.InvalidArgumentError("newSubscription", E.InvalidArgumentReason.Malformed);
                                return r ? (i.optedOut = !e, [4, s["default"].updatePlayer(t, r, {
                                    notification_types: w["default"].getNotificationTypeFromOptIn(e)
                                })]) : (u.info(new M.NotSubscribedError(U.NotSubscribedReason.NoDeviceId)), [2]);
                            case 4:
                                return o.sent(), [4, g["default"].setSubscription(i)];
                            case 5:
                                return o.sent(), y["default"].onInternalSubscriptionSet(i.optedOut), y["default"].checkAndTriggerSubscriptionChanged(), [2]
                        }
                    })
                })
            }, e.isOptedOut = function(e) {
                return i(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return t.sent(), p.logMethodCall("isOptedOut", e), [4, g["default"].getSubscription()];
                            case 2:
                                return n = t.sent().optedOut, p.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.optOut = function(n, t) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), p.logMethodCall("optOut", n, t), !h.ValidatorUtils.isValidBoolean(n)) throw new E.InvalidArgumentError("doOptOut", E.InvalidArgumentReason.Malformed);
                                return [4, e.setSubscription(!n)];
                            case 2:
                                return i.sent(), p.executeCallback(t), [2]
                        }
                    })
                })
            }, e.getUserId = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), p.logMethodCall("getUserId", e), [4, g["default"].getSubscription()];
                            case 2:
                                return n = i.sent(), t = n.deviceId, p.executeCallback(e, t), [2, t]
                        }
                    })
                })
            }, e.getRegistrationId = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), p.logMethodCall("getRegistrationId", e), [4, g["default"].getSubscription()];
                            case 2:
                                return n = i.sent(), t = n.pushToken, p.executeCallback(e, t), [2, t]
                        }
                    })
                })
            }, e.getSubscription = function(e) {
                return i(this, void 0, void 0, function() {
                    var n, t;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), p.logMethodCall("getSubscription", e), [4, g["default"].getSubscription()];
                            case 2:
                                return n = i.sent(), t = !n.optedOut, p.executeCallback(e, t), [2, t]
                        }
                    })
                })
            }, e.sendSelfNotification = function(e, n, t, r, a, l) {
                return void 0 === e && (e = "OneSignal Test Message"), void 0 === n && (n = "This is an example notification."), void 0 === t && (t = new URL(location.href).origin + "?_osp=do_not_open"), i(this, void 0, void 0, function() {
                    var i, u;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, p.awaitOneSignalInitAndSupported()];
                            case 1:
                                return o.sent(), p.logMethodCall("sendSelfNotification", e, n, t, r, a, l), [4, g["default"].getAppConfig()];
                            case 2:
                                return i = o.sent(), [4, g["default"].getSubscription()];
                            case 3:
                                if (u = o.sent(), !i.appId) throw new I.InvalidStateError(I.InvalidStateReason.MissingAppId);
                                if (!u.deviceId) throw new M.NotSubscribedError(U.NotSubscribedReason.NoDeviceId);
                                if (!h.ValidatorUtils.isValidUrl(t)) throw new E.InvalidArgumentError("url", E.InvalidArgumentReason.Malformed);
                                if (!h.ValidatorUtils.isValidUrl(r, {
                                        allowEmpty: !0,
                                        requireHttps: !0
                                    })) throw new E.InvalidArgumentError("icon", E.InvalidArgumentReason.Malformed);
                                return [4, s["default"].sendNotification(i.appId, [u.deviceId], {
                                    en: e
                                }, {
                                    en: n
                                }, t, r, a, l)];
                            case 4:
                                return [2, o.sent()]
                        }
                    })
                })
            }, e.push = function(n) {
                if ("function" == typeof n) n();
                else {
                    e[n.shift()].apply(null, n)
                }
            }, e.on = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
            }, e.off = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
            }, e.once = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
            }, e
        }();
    L.VERSION = "120100", L._VERSION = "120100", L._API_URL = r.API_URL, L._notificationOpenedCallbacks = [], L._idsAvailable_callback = [], L._defaultLaunchURL = null, L.config = null, L._thisIsThePopup = !1, L.__isPopoverShowing = !1, L._sessionInitAlreadyRunning = !1, L._isNotificationEnabledCallback = [], L._subscriptionSet = !0, L.iframeUrl = null, L.popupUrl = null, L.modalUrl = null, L._sessionIframeAdded = !1, L._windowWidth = 650, L._windowHeight = 568, L._isNewVisitor = !1, L._channel = null, L.cookie = d, L.initialized = !1, L.notifyButton = null, L.store = P["default"], L.environment = a["default"], L.database = g["default"], L.event = c["default"], L.browser = f, L.popover = null, L.log = u, L.swivel = S, L.api = s["default"], L.indexedDb = l["default"], L.iframePostmam = null, L.popupPostmam = null, L.mainHelper = w["default"], L.subscriptionHelper = _["default"], L.workerHelper = x["default"], L.httpHelper = k["default"], L.eventHelper = y["default"], L.initHelper = T["default"], L.testHelper = N["default"], L.objectAssign = b, L.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js", L.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js", L.SERVICE_WORKER_PARAM = {
        scope: "/"
    }, L._LOGGING = !1, L.LOGGING = !1, L._usingNativePermissionHook = !1, L._initCalled = !1, L.__initAlreadyCalled = !1, L.closeNotifications = x["default"].closeNotifications, L.isServiceWorkerActive = x["default"].isServiceWorkerActive, L._showingHttpPermissionRequest = !1, L.checkAndWipeUserSubscription = _["default"].checkAndWipeUserSubscription, L._initHttp = k["default"].initHttp, L._initPopup = k["default"].initPopup, L.POSTMAM_COMMANDS = {
        CONNECTED: "connect",
        REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
        REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
        REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
        REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
        REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
        REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
        MODAL_LOADED: "postmam.modalPrompt.loaded",
        MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
        MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
        POPUP_LOADED: "postmam.popup.loaded",
        POPUP_ACCEPTED: "postmam.popup.accepted",
        POPUP_REJECTED: "postmam.popup.canceled",
        POPUP_CLOSING: "postman.popup.closing",
        REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged",
        IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
        UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
        BEGIN_BROWSING_SESSION: "postmam.beginBrowsingSession",
        REQUEST_HOST_URL: "postmam.requestHostUrl",
        SHOW_HTTP_PERMISSION_REQUEST: "postmam.showHttpPermissionRequest",
        IS_SHOWING_HTTP_PERMISSION_REQUEST: "postmam.isShowingHttpPermissionRequest",
        WINDOW_TIMEOUT: "postmam.windowTimeout",
        FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration",
        FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress",
        POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms",
        SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect"
    }, L.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick",
        NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
        SUBSCRIPTION_CHANGED: "subscriptionChange",
        WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
        NOTIFICATION_DISPLAYED: "notificationDisplay",
        NOTIFICATION_DISMISSED: "notificationDismiss",
        NOTIFICATION_CLICKED: "notificationClick",
        SDK_INITIALIZED: "initialize",
        REGISTERED: "register",
        POPUP_CLOSING: "popupClose",
        PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
        TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled",
        TEST_WOULD_DISPLAY: "testWouldDisplay",
        POPUP_WINDOW_TIMEOUT: "popupWindowTimeout"
    }, L.NOTIFICATION_TYPES = {
        SUBSCRIBED: 1,
        UNSUBSCRIBED: -2
    }, Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = L, Object.defineProperty(L, "LOGGING", {
        get: function() {
            return L._LOGGING
        },
        set: function(e) {
            e ? (u.setDefaultLevel(u.levels.TRACE), L._LOGGING = !0) : (u.setDefaultLevel(u.levels.WARN), L._LOGGING = !1)
        },
        enumerable: !0,
        configurable: !0
    }), v.merge(L, new m), L.LOGGING ? u.setDefaultLevel(u.levels.TRACE) : u.setDefaultLevel(u.levels.WARN), u.info("%cOneSignal Web SDK loaded (version " + L._VERSION + ", " + a["default"].getEnv() + " environment).", p.getConsoleStyle("bold")), a["default"].isEs6DebuggingModule() && u.warn("OneSignal: This is a specially built version of the web SDK for debugging ES6 async/await."), u.debug("Current Page URL: " + location.href), u.debug("Browser Environment: " + f.name + " " + f.version), e.exports = L
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e.promiseStub = function() {
            return {
                then: e.promiseStub,
                "catch": e.promiseStub
            }
        }, Object.defineProperty(e, "log", {
            get: function() {
                return {
                    setLevel: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }), e.isPushNotificationsSupported = function() {
            return !1
        }, e.push = function(e) {
            if ("function" == typeof e) e();
            else {
                var n = e.shift();
                OneSignal[n].apply(null, e)
            }
        }, e
    }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = t, t.init = t.showHttpPrompt = t.registerForPushNotifications = t.showHttpPermissionRequest = t.getNotificationPermission = t.on = t.off = t.once = t.config = t.SERVICE_WORKER_PATH = t.SERVICE_WORKER_UPDATER_PATH = t.checkAndWipeUserSubscription = t.subscriptionBell = t.notifyButton = function() {}, t.setDefaultNotificationUrl = t.setDefaultTitle = t.syncHashedEmail = t.getTags = t.sendTag = t.sendTags = t.deleteTag = t.deleteTags = t.addListenerForNotificationOpened = t.getIdsAvailable = t.isPushNotificationsEnabled = t.setSubscription = t.getUserId = t.getRegistrationId = t.getSubscription = t.sendSelfNotification = t.promiseStub, e.exports = t
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(21),
        r = function(e) {
            function n() {
                return e.call(this, ".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden") || this
            }
            return i(n, e), n.prototype.increment = function() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    return e += 1, this.content = e.toString(), e
                }
            }, n.prototype.decrement = function() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    return e -= 1, e > 0 ? this.content = e.toString() : this.content = "", e
                }
            }, n
        }(o["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = r
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(1),
        r = t(3),
        a = t(21),
        s = t(16),
        l = t(14),
        u = t(31),
        c = t(6),
        d = function(e) {
            function n(n) {
                var t = e.call(this, ".onesignal-bell-launcher-button", null, null, "onesignal-bell-launcher-button-active", null, "shown", "") || this;
                return t.bell = n, t.events = {
                    mouse: "bell.launcher.button.mouse"
                }, t.element.addEventListener("touchstart", function(e) {
                    t.onHovering(e), t.onTap(e)
                }), t.element.addEventListener("mouseenter", function(e) {
                    t.onHovering(e)
                }), t.element.addEventListener("mouseleave", function(e) {
                    t.onHovered(e)
                }), t.element.addEventListener("touchmove", function(e) {
                    t.onHovered(e)
                }), t.element.addEventListener("mousedown", function(e) {
                    t.onTap(e)
                }), t.element.addEventListener("mouseup", function(e) {
                    t.onEndTap(e)
                }), t.element.addEventListener("click", function(e) {
                    t.onHovered(e), t.onClick(e)
                }), t
            }
            return i(n, e), n.prototype.onHovering = function(e) {
                (l["default"].isEmpty(this.events.mouse) || "out" === l["default"].getLast(this.events.mouse)) && r["default"].trigger(s["default"].EVENTS.HOVERING), l["default"].put(this.events.mouse, "over")
            }, n.prototype.onHovered = function(e) {
                l["default"].put(this.events.mouse, "out"), r["default"].trigger(s["default"].EVENTS.HOVERED)
            }, n.prototype.onTap = function(e) {
                this.pulse(), this.activate(), this.bell.badge.activate()
            }, n.prototype.onEndTap = function(e) {
                this.inactivate(), this.bell.badge.inactivate()
            }, n.prototype.onClick = function(e) {
                var n = this;
                if (r["default"].trigger(s["default"].EVENTS.BELL_CLICK), r["default"].trigger(s["default"].EVENTS.LAUNCHER_CLICK), !this.bell.message.shown || this.bell.message.contentType != u["default"].TYPES.MESSAGE) {
                    var t = l["default"].getLast("subscription.optedOut");
                    return this.bell.unsubscribed ? t ? this.bell.launcher.activateIfInactive().then(function() {
                        n.bell.showDialogProcedure()
                    }) : (OneSignal.registerForPushNotifications(), this.bell._ignoreSubscriptionState = !0, OneSignal.once(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(e) {
                        n.bell.message.display(u["default"].TYPES.MESSAGE, n.bell.text["message.action.subscribed"], u["default"].TIMEOUT).then(function() {
                            n.bell._ignoreSubscriptionState = !1, n.bell.launcher.inactivate()
                        })
                    })) : this.bell.subscribed ? this.bell.launcher.activateIfInactive().then(function() {
                        n.bell.showDialogProcedure()
                    }) : this.bell.blocked && (c["default"].isUsingSubscriptionWorkaround() ? OneSignal.registerForPushNotifications() : this.bell.launcher.activateIfInactive().then(function() {
                            n.bell.showDialogProcedure()
                        })), this.bell.message.hide()
                }
            }, n.prototype.pulse = function() {
                o.removeDomElement(".pulse-ring"), o.addDomElement(this.element, "beforeend", '<div class="pulse-ring"></div>'), this.bell.setCustomColorsIfSpecified()
            }, n
        }(a["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = d
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(1),
        r = t(3),
        a = t(22),
        s = t(8),
        l = t(16),
        u = t(7),
        c = function(e) {
            function n(n) {
                var t = e.call(this, ".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body") || this;
                return t.bell = n, t.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button", t.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button", t.notificationIcons = null, t
            }
            return i(n, e), n.prototype.getPlatformNotificationIcon = function() {
                return this.notificationIcons ? s.chrome || s.firefox ? this.notificationIcons.chrome || this.notificationIcons.safari : s.safari ? this.notificationIcons.safari || this.notificationIcons.chrome : void 0 : null
            }, n.prototype.show = function() {
                var n = this;
                return this.updateBellLauncherDialogBody().then(function() {
                    return e.prototype.show.call(n)
                })
            }, Object.defineProperty(n.prototype, "subscribeButtonSelectorId", {
                get: function() {
                    return "subscribe-button"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "unsubscribeButtonSelectorId", {
                get: function() {
                    return "unsubscribe-button"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "subscribeButton", {
                get: function() {
                    return this.element.querySelector("#" + this.subscribeButtonSelectorId)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "unsubscribeButton", {
                get: function() {
                    return this.element.querySelector("#" + this.unsubscribeButtonSelectorId)
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.updateBellLauncherDialogBody = function() {
                var e = this;
                return OneSignal.getSubscription().then(function(n) {
                    o.clearDomElementChildren(document.querySelector(e.nestedContentSelector));
                    var t = "Nothing to show.",
                        i = "";
                    if (e.bell.options.showCredit && (i = '<div class="divider"></div>\n                  <div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'), e.bell.state === l["default"].STATES.SUBSCRIBED && n === !0 || e.bell.state === l["default"].STATES.UNSUBSCRIBED && n === !1) {
                        var a = "",
                            c = e.getPlatformNotificationIcon();
                        a = c ? '<div class="push-notification-icon"><img src="' + c + '"></div>' : '<div class="push-notification-icon push-notification-icon-default"></div>';
                        var d = "";
                        d = e.bell.state !== l["default"].STATES.SUBSCRIBED ? '<button type="button" class="action" id="' + e.subscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.subscribe"] + "</button>" : '<button type="button" class="action" id="' + e.unsubscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.unsubscribe"] + "</button>", t = "\n                  <h1>" + e.bell.text["dialog.main.title"] + '</h1>\n                  <div class="divider"></div>\n                  <div class="push-notification">\n                    ' + a + '\n                    <div class="push-notification-text-container">\n                      <div class="push-notification-text push-notification-text-short"></div>\n                      <div class="push-notification-text"></div>\n                      <div class="push-notification-text push-notification-text-medium"></div>\n                      <div class="push-notification-text"></div>\n                      <div class="push-notification-text push-notification-text-medium"></div>\n                    </div>\n                  </div>\n                  <div class="action-container">\n                    ' + d + "\n                  </div>\n                  " + i + "\n                "
                    } else if (e.bell.state === l["default"].STATES.BLOCKED) {
                        var c = null;
                        s.chrome ? s.mobile || s.tablet || (c = u.HOST_URL + "/bell/chrome-unblock.jpg") : s.firefox ? c = u.HOST_URL + "/bell/firefox-unblock.jpg" : s.safari && (c = u.HOST_URL + "/bell/safari-unblock.jpg");
                        var g = "";
                        c && (g = '\n\n            <a href="' + c + '" target="_blank"><img src="' + c + '"></a></div>\n            '), (s.mobile || s.tablet) && s.chrome && (g = "\n            <ol>\n            <li>Access <strong>Settings</strong> by tapping the three menu dots <strong>â‹®</strong></li>\n            <li>Click <strong>Site settings</strong> under Advanced.</li>\n            <li>Click <strong>Notifications</strong>.</li>\n            <li>Find and click this entry for this website.</li>\n            <li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li>\n            </ol>\n          "), t = "\n                  <h1>" + e.bell.text["dialog.blocked.title"] + '</h1>\n                  <div class="divider"></div>\n                  <div class="instructions">\n                  <p>' + e.bell.text["dialog.blocked.message"] + "</p>\n                  " + g + "\n                  </div>\n                  " + i + "\n                "
                    }
                    o.addDomElement(document.querySelector(e.nestedContentSelector), "beforeend", t), e.subscribeButton && e.subscribeButton.addEventListener("click", function() {
                        return r["default"].trigger(l["default"].EVENTS.SUBSCRIBE_CLICK)
                    }), e.unsubscribeButton && e.unsubscribeButton.addEventListener("click", function() {
                        return r["default"].trigger(l["default"].EVENTS.UNSUBSCRIBE_CLICK)
                    }), e.bell.setCustomColorsIfSpecified()
                })
            }, n
        }(a["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = c
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(1),
        r = t(2),
        a = t(21),
        s = function(e) {
            function n(n) {
                var t = e.call(this, ".onesignal-bell-launcher", "onesignal-bell-launcher-active", null, null, "onesignal-bell-launcher-inactive", "hidden", "active") || this;
                return t.bell = n, t.wasInactive = !1, t
            }
            return i(n, e), n.prototype.resize = function(e) {
                var n = this;
                if ("small" === e && o.hasCssClass(this.element, "onesignal-bell-launcher-sm") || "medium" === e && o.hasCssClass(this.element, "onesignal-bell-launcher-md") || "large" === e && o.hasCssClass(this.element, "onesignal-bell-launcher-lg")) return Promise.resolve(this);
                if (o.removeCssClass(this.element, "onesignal-bell-launcher-sm"), o.removeCssClass(this.element, "onesignal-bell-launcher-md"), o.removeCssClass(this.element, "onesignal-bell-launcher-lg"), "small" === e) o.addCssClass(this.element, "onesignal-bell-launcher-sm");
                else if ("medium" === e) o.addCssClass(this.element, "onesignal-bell-launcher-md");
                else {
                    if ("large" !== e) throw new Error("Invalid OneSignal bell size " + e);
                    o.addCssClass(this.element, "onesignal-bell-launcher-lg")
                }
                return this.shown ? new Promise(function(e) {
                    if (0 == n.targetTransitionEvents.length) return e(n);
                    var t = setTimeout(function() {
                        r.debug("Launcher did not completely resize (state: " + n.state + ", activeState: " + n.activeState + ").")
                    }, n.transitionCheckTimeout);
                    o.once(n.element, "transitionend", function(i, r) {
                        if (i.target === n.element && o.contains(n.targetTransitionEvents, i.propertyName)) return clearTimeout(t), r(), e(n)
                    }, !0)
                }) : Promise.resolve(this)
            }, n.prototype.activateIfInactive = function() {
                return this.inactive ? (this.wasInactive = !0, this.activate()) : o.nothing()
            }, n.prototype.inactivateIfWasInactive = function() {
                return this.wasInactive ? (this.wasInactive = !1, this.inactivate()) : o.nothing()
            }, n.prototype.clearIfWasInactive = function() {
                this.wasInactive = !1
            }, n.prototype.inactivate = function() {
                var n = this;
                return this.bell.message.hide().then(function() {
                    return n.bell.badge.content.length > 0 ? n.bell.badge.hide().then(function() {
                        return Promise.all([e.prototype.inactivate.call(n), n.resize("small")])
                    }).then(function() {
                        return n.bell.badge.show()
                    }) : Promise.all([e.prototype.inactivate.call(n), n.resize("small")])
                })
            }, n.prototype.activate = function() {
                var n = this;
                return this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(function() {
                    return Promise.all([e.prototype.activate.call(n), n.resize(n.bell.options.size)])
                }) : Promise.all([e.prototype.activate.call(this), this.resize(this.bell.options.size)])
            }, n
        }(a["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = s
}, function(e, n, t) {
    "use strict";
    var i, o = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        r = t(11);
    ! function(e) {
        e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed"
    }(i = n.InvalidArgumentReason || (n.InvalidArgumentReason = {}));
    var InvalidArgumentError = function(e) {
        function InvalidArgumentError(n, t) {
            var o;
            switch (t) {
                case i.Empty:
                    o = e.call(this, "Supply a non-empty value to '" + n + "'.") || this;
                    break;
                case i.Malformed:
                    o = e.call(this, "The value for '" + n + "' was malformed.") || this
            }
            return o.argument = n, o.reason = i[t], o
        }
        return o(InvalidArgumentError, e), InvalidArgumentError
    }(r["default"]);
    n.InvalidArgumentError = InvalidArgumentError
}, function(e, n, t) {
    "use strict";
    var i = this && this.__extends || function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
                e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            },
        o = t(11),
        PermissionMessageDismissedError = function(e) {
            function PermissionMessageDismissedError() {
                return e.call(this, "The permission message was previously dismissed.") || this
            }
            return i(PermissionMessageDismissedError, e), PermissionMessageDismissedError
        }(o["default"]);
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = PermissionMessageDismissedError
}, function(e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function(e, n, t, i) {
                return new(t || (t = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function s(e) {
                        try {
                            l(i["throw"](e))
                        } catch (n) {
                            r(n)
                        }
                    }
                    function l(e) {
                        e.done ? o(e.value) : new t(function(n) {
                            n(e.value)
                        }).then(a, s)
                    }
                    l((i = i.apply(e, n)).next())
                })
            },
        o = this && this.__generator || function(e, n) {
                function t(e) {
                    return function(n) {
                        return i([e, n])
                    }
                }
                function i(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                        switch (r = 0, a && (t = [0, a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return s.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    s.label = t[1];
                                    break
                                }
                                if (6 === t[0] && s.label < a[1]) {
                                    s.label = a[1], a = t;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(t);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        t = n.call(e, s)
                    } catch (i) {
                        t = [6, i], r = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
                var o, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return {
                    next: t(0),
                    "throw": t(1),
                    "return": t(2)
                }
            },
        r = t(7),
        a = t(4),
        s = t(2),
        l = t(3),
        u = t(5),
        c = t(1),
        d = t(9),
        g = t(30),
        f = t(10),
        p = t(17),
        h = t(13),
        b = t(35),
        m = t(12),
        v = t(6),
        S = t(23),
        y = function() {
            function e() {}
            return e.isShowingHttpPermissionRequest = function() {
                return i(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return v["default"].isUsingSubscriptionWorkaround() ? [4, new Promise(function(e, n) {
                                    OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.IS_SHOWING_HTTP_PERMISSION_REQUEST, null, function(n) {
                                        e(n.data)
                                    })
                                })] : [3, 2];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return [2, OneSignal._showingHttpPermissionRequest]
                        }
                    })
                })
            }, e.initHttp = function(n) {
                var t = this;
                if (s.debug("Called %cinitHttp(" + JSON.stringify(n, null, 4) + ")", c.getConsoleStyle("code")), p["default"].applyServiceWorkerEnvPrefixes(), (window.opener || window.parent) == window) return void document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and\nmust be opened as a result of a subscription call.</span>");
                OneSignal.config = {}, OneSignal.initialized = !0;
                var r = n.origin,
                    m = n.origin,
                    v = c.getUrlQueryParam("dangerouslyWipeData") || window.__POSTDATA && window.__POSTDATA.dangerouslyWipeData === !0,
                    y = Promise.resolve();
                v && a["default"].isIframe() && (OneSignal.LOGGING = !0, s.warn("Wiping away previous HTTP data (called from HTTP iFrame)."), y = c.wipeLocalIndexedDb().then(function() {
                    return c.unsubscribeFromPush()
                }).then(function() {
                    return h["default"].put("Ids", {
                        type: "appId",
                        id: n.appId
                    })
                })), OneSignal._thisIsThePopup = n.isPopup, (a["default"].isPopup() || OneSignal._thisIsThePopup) && (OneSignal.popupPostmam = new g["default"](window.opener, r, m), OneSignal.popupPostmam.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null), OneSignal.popupPostmam.listen(), OneSignal.popupPostmam.on("connect", function(e) {
                    s.debug("(" + a["default"].getEnv() + ") The host page is now ready to receive commands from the HTTP popup."), l["default"].trigger("httpInitialize")
                })), OneSignal._thisIsTheModal = n.isModal, OneSignal._thisIsTheModal && (OneSignal.modalPostmam = new g["default"](window.parent, r, m)), OneSignal.iframePostmam = new g["default"](window, r, m), OneSignal.iframePostmam.listen(), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, function(e) {
                    s.debug("(" + a["default"].getEnv() + ") Fired Postmam connect event!")
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, function(e) {
                    return OneSignal.getNotificationPermission().then(function(n) {
                        return e.reply(n)
                    }), !1
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, function(e) {
                    for (var n = e.data, t = [], i = 0, o = n; i < o.length; i++) {
                        var r = o[i],
                            a = r.table,
                            s = r.key;
                        t.push(u["default"].get(a, s))
                    }
                    return Promise.all(t).then(function(n) {
                        return e.reply(n)
                    }), !1
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, function(e) {
                    for (var n = e.data, t = [], i = 0, o = n; i < o.length; i++) {
                        var r = o[i],
                            a = r.table,
                            s = r.keypath;
                        t.push(u["default"].put(a, s))
                    }
                    return Promise.all(t).then(function(n) {
                        return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    }), !1
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, function(e) {
                    for (var n = e.data, t = [], i = 0, o = n; i < o.length; i++) {
                        var r = o[i],
                            a = r.table,
                            s = r.keypath;
                        t.push(u["default"].remove(a, s))
                    }
                    return Promise.all(t).then(function(n) {
                        return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    }), !1
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, function(e) {
                    s.info("(" + a["default"].getEnv() + ") The iFrame has just received initOptions from the host page!"), y.then(function() {
                        OneSignal.config = d(e.data.hostInitOptions, n, {
                            defaultUrl: e.data.defaultUrl,
                            pageUrl: e.data.pageUrl,
                            pageTitle: e.data.pageTitle
                        }), b["default"].installNativePromptPermissionChangedHook();
                        var t = [];
                        n.continuePressed && t.push(OneSignal.setSubscription(!0)), t.push(u["default"].get("Options", "defaultUrl").then(function(e) {
                            if (!e) return u["default"].put("Options", {
                                key: "defaultUrl",
                                value: new URL(OneSignal.config.defaultUrl).origin
                            })
                        })), t.push(u["default"].put("Options", {
                            key: "lastKnownHostUrl",
                            value: OneSignal.config.pageUrl
                        })), t.push(b["default"].initSaveState()), t.push(b["default"].storeInitialValues()), t.push(b["default"].saveInitOptions()), Promise.all(t).then(function() {
                            if (navigator.serviceWorker && "https:" === window.location.protocol) try {
                                f["default"].establishServiceWorkerChannel()
                            } catch (n) {
                                s.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", n)
                            }
                            e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                        })
                    })
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, function(e) {
                    s.debug(a["default"].getEnv() + " (Expected iFrame) has received the unsubscribe from push method."), c.unsubscribeFromPush().then(function() {
                        return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    })["catch"](function(e) {
                        return s.debug("Failed to unsubscribe from push remotely.", e)
                    })
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.SHOW_HTTP_PERMISSION_REQUEST, function(e) {
                    s.debug(a["default"].getEnv() + " Calling showHttpPermissionRequest() inside the iFrame, proxied from host.");
                    var n = {};
                    e.data && (n = e.data), s.debug(a["default"].getEnv() + "HTTP permission request showing, message data:", e), OneSignal.showHttpPermissionRequest(n).then(function(n) {
                        e.reply({
                            status: "resolve",
                            result: n
                        })
                    })["catch"](function(n) {
                        n && n.reason === S.InvalidStateReason[S.InvalidStateReason.PushPermissionAlreadyGranted] || e.reply({
                            status: "reject",
                            result: n
                        })
                    })
                }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.IS_SHOWING_HTTP_PERMISSION_REQUEST, function(n) {
                    return i(t, void 0, void 0, function() {
                        var t;
                        return o(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, e.isShowingHttpPermissionRequest()];
                                case 1:
                                    return t = i.sent(), n.reply(t), [2, !1]
                            }
                        })
                    })
                }), a["default"].isIframe() && l["default"].trigger("httpInitialize")
            }, e.initPopup = function() {
                OneSignal.config = {}, OneSignal.initialized = !0, p["default"].applyServiceWorkerEnvPrefixes(), OneSignal.isPushNotificationsEnabled(function(e) {
                    e ? window.close() : navigator.serviceWorker.register(OneSignal.SERVICE_WORKER_PATH, OneSignal.SERVICE_WORKER_PARAM).then(v["default"].enableNotifications, p["default"].registerError)
                })
            }, e.loadSubdomainIFrame = function() {
                var e = new Promise(function(e, n) {
                    s.debug("Called %cloadSubdomainIFrame()", c.getConsoleStyle("code")), OneSignal.config.dangerouslyWipeData && (OneSignal.iframeUrl += "?&dangerouslyWipeData=true"), s.debug("Loading subdomain iFrame:", OneSignal.iframeUrl);
                    var t = f["default"].createHiddenDomIFrame(OneSignal.iframeUrl);
                    t.onload = function() {
                        s.info("iFrame onload event was called for:", t.src);
                        var n = "https://" + OneSignal.config.subdomainName + ".onesignal.com";
                        a["default"].isDev() ? n = r.DEV_FRAME_HOST : a["default"].isStaging() && (n = r.STAGING_FRAME_HOST);
                        var i = n;
                        OneSignal.iframePostmam = new g["default"](t.contentWindow, n, i), OneSignal.iframePostmam.connect(), OneSignal.iframePostmam.on("connect", function(n) {
                            s.debug("(" + a["default"].getEnv() + ") Fired Postmam connect event!"), Promise.all([u["default"].get("Options", "defaultUrl"), u["default"].get("Options", "defaultTitle")]).then(function(n) {
                                var t = n[0],
                                    i = n[1];
                                if (t) var o = t;
                                else var o = location.href;
                                if (i) var r = i;
                                else var r = document.title;
                                OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                                    hostInitOptions: JSON.parse(JSON.stringify(OneSignal.config)),
                                    defaultUrl: o,
                                    pageUrl: window.location.href,
                                    pageTitle: r
                                }, function(n) {
                                    return n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && (e(), l["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED)), !1
                                })
                            })
                        }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, function(e) {
                            var n = e.data,
                                t = n.eventName,
                                i = n.eventData;
                            return l["default"].trigger(t, i, e.source), !1
                        }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, function(e) {
                            var n = e.data.forceUpdatePermission;
                            return m["default"].triggerNotificationPermissionChanged(n), !1
                        }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, function(e) {
                            return e.reply(location.href), !1
                        }), OneSignal.iframePostmam.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, function(e) {
                            return window.location.href = e.data, !1
                        })
                    }, OneSignal._sessionIframeAdded = !0
                });
                return c.executeAndTimeoutPromiseAfter(e, 15e3)["catch"](function() {
                    return s.warn("OneSignal: Could not load iFrame with URL " + OneSignal.iframeUrl + ". Please check that your 'subdomainName' matches that on your OneSignal Chrome platform settings. Also please check that your Site URL on your Chrome platform settings is a valid reachable URL pointing to your site.")
                })
            }, e.loadPopup = function(e) {
                var n = "https://" + OneSignal.config.subdomainName + ".onesignal.com";
                a["default"].isDev() && (n = r.DEV_FRAME_HOST);
                var t = n,
                    i = OneSignal.config.dangerouslyWipeData,
                    o = d({}, f["default"].getPromptOptionsPostHash(), {
                        promptType: "popup",
                        parentHostname: encodeURIComponent(location.hostname)
                    });
                if (e && e.autoAccept && (o.autoAccept = !0), s.info("loadPopup(options):", e), e && e.httpPermissionRequest) {
                    o.httpPermissionRequest = !0;
                    var u = {
                        childWidth: 250,
                        childHeight: 150,
                        left: -99999999,
                        top: 9999999
                    }
                }
                i && (o.dangerouslyWipeData = !0), s.info("Opening popup window to " + OneSignal.popupUrl + " with POST data:", OneSignal.popupUrl);
                var c = f["default"].openSubdomainPopup(OneSignal.popupUrl, o, u);
                OneSignal.popupPostmam = new g["default"](c, n, t), OneSignal.popupPostmam.startPostMessageReceive(), OneSignal.popupPostmam.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, function(e) {
                    return s.debug("(Popup Postmam) (" + a["default"].getEnv() + ") Got direct postMessage() event from popup event to begin MessagePort comms."), OneSignal.popupPostmam.connect(), !1
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, function(e) {
                    l["default"].trigger("popupLoad")
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, function(e) {
                    f["default"].triggerCustomPromptClicked("granted")
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, function(e) {
                    f["default"].triggerCustomPromptClicked("denied")
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, function(e) {
                    s.info("Detected popup is closing."), l["default"].trigger(OneSignal.EVENTS.POPUP_CLOSING), OneSignal.popupPostmam.destroy()
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.BEGIN_BROWSING_SESSION, function(e) {
                    s.debug(a["default"].getEnv() + " Marking current session as a continuing browsing session."), f["default"].beginTemporaryBrowserSession()
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, function(e) {
                    s.debug(a["default"].getEnv() + " Popup window timed out and was closed."), l["default"].trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT)
                }), OneSignal.popupPostmam.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, function(e) {
                    s.debug(a["default"].getEnv() + " Finishing HTTP popup registration inside the iFrame, sent from popup."), e.reply({
                        progress: !0
                    }), f["default"].getAppId().then(function(n) {
                        OneSignal.popupPostmam.stopPostMessageReceive(), f["default"].registerWithOneSignal(n, e.data.subscriptionInfo).then(function() {
                            return m["default"].checkAndTriggerSubscriptionChanged()
                        })
                    })
                })
            }, e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = y
}, function(e, n, t) {
    "use strict";
    var i = t(1),
        o = t(2),
        r = t(3),
        a = t(9),
        s = function() {
            function e(e) {
                e ? this.options = a({}, e) : this.options = {}, this.options.modalTitle && "string" == typeof this.options.modalTitle || (this.options.modalTitle = "Thanks for subscribing"), this.options.modalMessage && "string" == typeof this.options.modalMessage || (this.options.modalMessage = "You're now subscribed to notifications. You can unsubscribe at any time."), this.options.modalButtonText && "string" == typeof this.options.modalButtonText || (this.options.modalButtonText = "Close"), this.options.modalTitle = this.options.modalTitle.substring(0, 50), this.options.modalMessage = this.options.modalMessage.substring(0, 90), this.options.modalButtonText = this.options.modalButtonText.substring(0, 35), t(70)
            }
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        FINISH_CLICK: "httpModalFinishClick",
                        SHOWN: "httpModalShown",
                        CLOSED: "httpModalClosed"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.create = function() {
                try {
                    this.container && i.removeDomElement("#onesignal-modal-container");
                    var n = '\n                        <div id="onesignal-modal-dialog">\n                            <div class="modal-exit">&times;</div>\n                            <div class="modal-body">\n                                <div class="modal-body-title">\n                                    ' + this.options.modalTitle + '                                      \n                                </div>\n                                <div class="modal-body-message">\n                                    ' + this.options.modalMessage + '                \n                                </div>\n                                <div class="clearfix"></div>\n                            </div>\n                            <div class="modal-footer">\n                                <button id="onesignal-modal-finish-button" class="primary modal-button">\n                                ' + this.options.modalButtonText + '</button>\n                                <div class="clearfix"></div>\n                            </div>\n                        </div>                   \n                    ';
                    i.addDomElement("body", "beforeend", '<div id="onesignal-modal-container" class="onesignal-modal-container onesignal-reset"></div>'), i.addDomElement(this.container, "beforeend", n), this.container.addEventListener("click", this.onHttpModalFinished.bind(this)), r["default"].trigger(e.EVENTS.SHOWN)
                } catch (t) {
                    o.error(t)
                }
            }, e.prototype.onHttpModalFinished = function(n) {
                OneSignal.registerForPushNotifications({
                    httpPermissionRequest: !0
                }), r["default"].trigger(e.EVENTS.FINISH_CLICK), this.close()
            }, e.prototype.close = function() {
                i.addCssClass(this.container, "close-modal"), i.removeDomElement("#onesignal-modal-container"), r["default"].trigger(e.EVENTS.CLOSED)
            }, Object.defineProperty(e.prototype, "container", {
                get: function() {
                    return document.querySelector("#onesignal-modal-container")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dialog", {
                get: function() {
                    return document.querySelector("#onesignal-modal-dialog")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "finishButton", {
                get: function() {
                    return document.querySelector("#onesignal-modal-finish-button")
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = s
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e
    }();
    n.AppConfig = t
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e
    }();
    n.AppState = t
}, function(e, n) {
    "use strict";
    var t;
    ! function(e) {
        e[e.Default = "default"] = "Default", e[e.Granted = "granted"] = "Granted", e[e.Denied = "denied"] = "Denied"
    }(t || (t = {})), n.NotificationPermission = t
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e
    }();
    n.ServiceWorkerConfig = t
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e
    }();
    n.ServiceWorkerState = t
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e
    }();
    n.Subscription = t
}, function(e, n, t) {
    "use strict";
    var i = t(1),
        o = t(2),
        r = t(3),
        a = t(10),
        s = t(8),
        l = t(9),
        u = function() {
            function e(e) {
                t(71), e ? this.options = l({}, e) : this.options = {}, this.options.actionMessage && "string" == typeof this.options.actionMessage || (this.options.actionMessage = "We'd like to show you notifications for the latest news and updates."), this.options.acceptButtonText && "string" == typeof this.options.acceptButtonText || (this.options.acceptButtonText = "Allow"), this.options.cancelButtonText && "string" == typeof this.options.cancelButtonText || (this.options.cancelButtonText = "No Thanks"), this.options.actionMessage = this.options.actionMessage.substring(0, 90), this.options.acceptButtonText = this.options.acceptButtonText.substring(0, 15), this.options.cancelButtonText = this.options.cancelButtonText.substring(0, 15), this.notificationIcons = null
            }
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        ALLOW_CLICK: "popoverAllowClick",
                        CANCEL_CLICK: "popoverCancelClick",
                        SHOWN: "popoverShown",
                        CLOSED: "popoverClosed"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.create = function() {
                var n = this;
                try {
                    null === this.notificationIcons && a["default"].getNotificationIcons().then(function(t) {
                        n.notificationIcons = t, n.container && i.removeDomElement("#onesignal-popover-container");
                        var o = n.getPlatformNotificationIcon(),
                            a = "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                            l = '\n                    <div id="normal-popover">\n                        <div class="popover-body">\n                            <div class="popover-body-icon ' + ("default-icon" === o ? "default-icon" : "") + '" style="background-image: url(\'' + ("default-icon" === o ? a : o) + '\');">\n                            </div>\n                            <div class="popover-body-message">\n                                ' + n.options.actionMessage + '                \n                            </div>\n                            <div class="clearfix"></div>\n                        </div>\n                        <div class="popover-footer">\n                            <button id="onesignal-popover-allow-button" class="align-right primary popover-button">\n                            ' + n.options.acceptButtonText + '</button>\n                            <button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">\n                            ' + n.options.cancelButtonText + '</button>\n                            <div class="clearfix"></div>\n                        </div>\n                    </div>                   \n                ';
                        i.addDomElement("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>'), i.addDomElement(n.container, "beforeend", '<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">' + l + "</div>"), i.addCssClass(n.container, s.mobile ? "slide-up" : "slide-down"), n.allowButton.addEventListener("click", n.onPopoverAllowed.bind(n)), n.cancelButton.addEventListener("click", n.onPopoverCanceled.bind(n)), r["default"].trigger(e.EVENTS.SHOWN)
                    })
                } catch (t) {
                    o.error(t)
                }
            }, e.prototype.onPopoverAllowed = function(n) {
                r["default"].trigger(e.EVENTS.ALLOW_CLICK)
            }, e.prototype.onPopoverCanceled = function(n) {
                r["default"].trigger(e.EVENTS.CANCEL_CLICK), this.close()
            }, e.prototype.close = function() {
                var n = this;
                i.addCssClass(this.container, "close-popover"), i.once(this.dialog, "animationend", function(t, o) {
                    t.target !== n.dialog || "slideDownExit" !== t.animationName && "slideUpExit" !== t.animationName || (i.removeDomElement("#onesignal-popover-container"), o(), r["default"].trigger(e.EVENTS.CLOSED))
                }, !0)
            }, e.prototype.getPlatformNotificationIcon = function() {
                return this.notificationIcons ? s.chrome || s.firefox ? this.notificationIcons.chrome ? this.notificationIcons.chrome : this.notificationIcons.firefox ? this.notificationIcons.firefox : "default-icon" : s.safari ? this.notificationIcons.safari ? this.notificationIcons.safari : this.notificationIcons.chrome ? this.notificationIcons.chrome : "default-icon" : void 0 : "default-icon"
            }, Object.defineProperty(e.prototype, "container", {
                get: function() {
                    return document.querySelector("#onesignal-popover-container")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dialog", {
                get: function() {
                    return document.querySelector("#onesignal-popover-dialog")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allowButton", {
                get: function() {
                    return document.querySelector("#onesignal-popover-allow-button")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cancelButton", {
                get: function() {
                    return document.querySelector("#onesignal-popover-cancel-button")
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n["default"] = u
}, function(e, n, t) {
    (function(e) {
        "use strict";
        var n = this && this.__awaiter || function(e, n, t, i) {
                    return new(t || (t = Promise))(function(o, r) {
                        function a(e) {
                            try {
                                l(i.next(e))
                            } catch (n) {
                                r(n)
                            }
                        }
                        function s(e) {
                            try {
                                l(i["throw"](e))
                            } catch (n) {
                                r(n)
                            }
                        }
                        function l(e) {
                            e.done ? o(e.value) : new t(function(n) {
                                n(e.value)
                            }).then(a, s)
                        }
                        l((i = i.apply(e, n)).next())
                    })
                },
            i = this && this.__generator || function(e, n) {
                    function t(e) {
                        return function(n) {
                            return i([e, n])
                        }
                    }
                    function i(t) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (o = 1, r && (a = r[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, a && (t = [0, a.value]), t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = n.call(e, s)
                        } catch (i) {
                            t = [6, i], r = 0
                        } finally {
                            o = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }
                    var o, r, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return {
                        next: t(0),
                        "throw": t(1),
                        "return": t(2)
                    }
                },
            o = t(7),
            r = t(4),
            a = t(15),
            s = t(2),
            l = t(5),
            u = t(1),
            c = t(9),
            d = t(28),
            g = t(8),
            f = function() {
                function t() {}
                return Object.defineProperty(t, "VERSION", {
                    get: function() {
                        return "120100"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "environment", {
                    get: function() {
                        return r["default"]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "log", {
                    get: function() {
                        return s
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "swivel", {
                    get: function() {
                        return d
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "database", {
                    get: function() {
                        return l["default"]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "apiUrl", {
                    get: function() {
                        return o.API_URL
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "browser", {
                    get: function() {
                        return g
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.run = function() {
                    self.addEventListener("push", t.onPushReceived), self.addEventListener("notificationclose", t.onNotificationClosed), self.addEventListener("notificationclick", function(e) {
                        return e.waitUntil(t.onNotificationClicked(e))
                    }), self.addEventListener("install", t.onServiceWorkerInstalled), self.addEventListener("activate", t.onServiceWorkerActivated), self.addEventListener("pushsubscriptionchange", t.onPushSubscriptionChange), d.on("data", t.onMessageReceived), g.firefox && g.version && u.contains(g.version, "44") && l["default"].get("Options", "serviceWorkerRefetchRequests").then(function(e) {
                        1 == e ? (s.info("Detected Firefox v44; installing fetch handler to refetch all requests."), t.REFETCH_REQUESTS = !0, self.addEventListener("fetch", t.onFetch)) : (t.SKIP_REFETCH_REQUESTS = !0, s.info("Detected Firefox v44 but not refetching requests because option is set to false."))
                    })["catch"](function(e) {
                        s.error(e), t.REFETCH_REQUESTS = !0, self.addEventListener("fetch", t.onFetch)
                    })
                }, t.onMessageReceived = function(e, n) {
                    return s.debug("%c" + u.capitalize(r["default"].getEnv()) + " â¬¸ Host:", u.getConsoleStyle("serviceworkermessage"), n, e), n ? void("notification.closeall" === n ? self.registration.getNotifications(null).then(function(e) {
                        for (var n = 0, t = e; n < t.length; n++) {
                            t[n].close()
                        }
                    }) : n.query && t.processQuery(n.query, n.response)) : void s.debug("Returning from empty data message.")
                }, t.processQuery = function(e, n) {
                    return t.queries || s.debug("queryClient() was not called before processQuery(). ServiceWorker.queries is empty."), t.queries[e] ? t.queries[e].promise ? void t.queries[e].promiseResolve(n) : void s.debug("Expected ServiceWorker.queries[" + e + "].promise value to be a Promise: " + t.queries[e]) : void s.debug("Received query " + e + " response " + n + ". Expected ServiceWorker.queries to be preset to a hash.")
                }, t.queryClient = function(e, n) {
                    return t.queries || (t.queries = {}), t.queries[n] || (t.queries[n] = {}), t.queries[n].promise = new Promise(function(i, o) {
                        t.queries[n].promiseResolve = i, t.queries[n].promiseReject = o, d.emit(e.id, n)
                    }), t.queries[n].promise
                }, t.onPushReceived = function(e) {
                    s.debug("Called %conPushReceived(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e), e.waitUntil(t.parseOrFetchNotifications(e).then(function(e) {
                        if (!e || 0 == e.length) return s.debug("Because no notifications were retrieved, we'll display the last known notification, so long as it isn't the welcome notification."), t.displayBackupNotification();
                        for (var n = [], i = 0, o = e; i < o.length; i++) {
                            var r = o[i];
                            s.debug("Raw Notification from OneSignal:", r);
                            var a = t.buildStructuredNotificationObject(r);
                            n.push(function(e) {
                                return t.displayNotification(e).then(function() {
                                    return t.updateBackupNotification(e)["catch"](function(e) {
                                        return s.error(e)
                                    })
                                }).then(function() {
                                    d.broadcast("notification.displayed", e)
                                }).then(function() {
                                    return t.executeWebhooks("notification.displayed", e)["catch"](function(e) {
                                        return s.error(e)
                                    })
                                })
                            }.bind(null, a))
                        }
                        return n.reduce(function(e, n) {
                            return e = e.then(n)
                        }, Promise.resolve())
                    })["catch"](function(e) {
                        return s.debug("Failed to display a notification:", e), t.UNSUBSCRIBED_FROM_NOTIFICATIONS ? void s.debug("Because we have just unsubscribed from notifications, we will not show anything.") : (s.debug("Because a notification failed to display, we'll display the last known notification, so long as it isn't the welcome notification."), t.displayBackupNotification())
                    }))
                }, t.executeWebhooks = function(t, o) {
                    return n(this, void 0, void 0, function() {
                        var n, r, a, c, d;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, l["default"].getSubscription()];
                                case 1:
                                    return n = i.sent().deviceId, [4, l["default"].get("Options", "webhooks.cors")];
                                case 2:
                                    return r = i.sent(), [4, l["default"].get("Options", "webhooks." + t)];
                                case 3:
                                    return (a = i.sent()) ? (c = {
                                        event: t,
                                        id: o.id,
                                        userId: n,
                                        action: o.action,
                                        buttons: o.buttons,
                                        heading: o.heading,
                                        content: o.content,
                                        url: o.url,
                                        icon: o.icon,
                                        data: o.data
                                    }, d = {
                                        method: "post",
                                        mode: "no-cors",
                                        body: JSON.stringify(c)
                                    }, r && (d.mode = "cors", d.headers = {
                                        "X-OneSignal-Event": t,
                                        "Content-Type": "application/json"
                                    }), s.debug("Executing " + t + " webhook " + (r ? "with" : "without") + " CORS %cPOST " + a, u.getConsoleStyle("code"), ":", c), [4, e(a, d)]) : [3, 5];
                                case 4:
                                    return [2, i.sent()];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.getActiveClients = function() {
                    return n(this, void 0, void 0, function() {
                        var e, n, t, a, s;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, self.clients.matchAll({
                                        type: "window",
                                        includeUncontrolled: !0
                                    })];
                                case 1:
                                    for (e = i.sent(), n = [], t = 0, a = e; t < a.length; t++) {
                                        if (s = a[t], s.frameType && "nested" === s.frameType) {
                                            if (r["default"].isDev() && !u.contains(s.url, o.DEV_FRAME_HOST) || !r["default"].isDev() && !u.contains(s.url, ".onesignal.com") || r["default"].isStaging() && !u.contains(s.url, o.STAGING_FRAME_HOST)) continue;
                                            s.isSubdomainIframe = !0
                                        }
                                        n.push(s)
                                    }
                                    return [2, n]
                            }
                        })
                    })
                }, t.buildStructuredNotificationObject = function(e) {
                    var n = {
                        id: e.custom.i,
                        heading: e.title,
                        content: e.alert,
                        data: e.custom.a,
                        url: e.custom.u,
                        icon: e.icon,
                        image: e.image,
                        tag: e.tag
                    };
                    if (e.o) {
                        n.buttons = [];
                        for (var t = 0, i = e.o; t < i.length; t++) {
                            var o = i[t];
                            n.buttons.push({
                                action: o.i,
                                title: o.n,
                                icon: o.p,
                                url: o.u
                            })
                        }
                    }
                    return u.trimUndefined(n)
                }, t.ensureImageResourceHttps = function(e) {
                    if (!e) return null;
                    try {
                        var n = new URL(e);
                        if ("localhost" === n.hostname || n.hostname.indexOf("192.168") !== -1 || "127.0.0.1" === n.hostname || "https:" === n.protocol) return e;
                        if ("i0.wp.com" === n.hostname || "i1.wp.com" === n.hostname || "i2.wp.com" === n.hostname || "i3.wp.com" === n.hostname) return "https://" + n.hostname + n.pathname;
                        return "https://i0.wp.com/" + (n.host + n.pathname)
                    } catch (t) {}
                }, t.ensureNotificationResourcesHttps = function(e) {
                    if (e && (e.icon && (e.icon = t.ensureImageResourceHttps(e.icon)), e.image && (e.image = t.ensureImageResourceHttps(e.image)), e.buttons && e.buttons.length > 0))
                        for (var n = 0, i = e.buttons; n < i.length; n++) {
                            var o = i[n];
                            o.icon && (o.icon = t.ensureImageResourceHttps(o.icon))
                        }
                }, t.displayNotification = function(e, n) {
                    return s.debug("Called %cdisplayNotification(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e), Promise.all([t._getTitle(), l["default"].get("Options", "defaultIcon"), l["default"].get("Options", "persistNotification"), l["default"].get("Ids", "appId")]).then(function(i) {
                        var o = i[0],
                            r = i[1],
                            a = i[2],
                            s = i[3];
                        e.heading = e.heading ? e.heading : o, e.icon = e.icon ? e.icon : r ? r : void 0;
                        var l = {};
                        l.tag = e.tag || s, l.persistNotification = a, n || (n = {}), e = c(e, n), t.ensureNotificationResourcesHttps(e);
                        var u = {
                            body: e.content,
                            icon: e.icon,
                            image: e.image,
                            data: e,
                            actions: e.buttons,
                            tag: l.tag,
                            requireInteraction: l.persistNotification,
                            renotify: !0
                        };
                        return self.registration.showNotification(e.heading, u)
                    })
                }, t.updateBackupNotification = function(e) {
                    return n(this, void 0, void 0, function() {
                        var n;
                        return i(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return n = e.data && e.data.__isOneSignalWelcomeNotification, n ? [2] : [4, l["default"].put("Ids", {
                                        type: "backupNotification",
                                        id: e
                                    })];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, t.displayBackupNotification = function() {
                    return l["default"].get("Ids", "backupNotification").then(function(e) {
                        var n = {
                            persistNotification: !1,
                            data: {
                                __isOneSignalBackupNotification: !0
                            }
                        };
                        return e ? t.displayNotification(e, n) : t.displayNotification({
                            content: "You have new updates."
                        }, n)
                    })
                }, t.shouldOpenNotificationUrl = function(e) {
                    return "javascript:void(0);" !== e && "do_not_open" !== e && !u.contains(e, "_osp=do_not_open")
                }, t.onNotificationClosed = function(e) {
                    s.debug("Called %conNotificationClosed(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e);
                    var n = e.notification.data;
                    d.broadcast("notification.dismissed", n), e.waitUntil(t.executeWebhooks("notification.dismissed", n))
                }, t.getNotificationUrlToOpen = function(e) {
                    return n(this, void 0, void 0, function() {
                        var n, t, o, r, a;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = self.registration.scope, [4, l["default"].getAppState()];
                                case 1:
                                    if (t = i.sent().defaultNotificationUrl, t && (n = t), e.action)
                                        for (o = 0, r = e.buttons; o < r.length; o++) a = r[o], a.action === e.action && a.url && "" !== a.url && (n = a.url);
                                    else e.url && "" !== e.url && (n = e.url);
                                    return [2, n]
                            }
                        })
                    })
                }, t.onNotificationClicked = function(e) {
                    return n(this, void 0, void 0, function() {
                        var n, o, r, c, g, f, p, h, b, m, v, S, y, w, O, E, P, I, T, x, _, k;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return s.debug("Called %conNotificationClicked(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e), e.notification.close(), n = e.notification.data, e.action && (n.action = e.action), o = "exact", r = "navigate", [4, l["default"].get("Options", "notificationClickHandlerMatch")];
                                case 1:
                                    return c = i.sent(), c && (o = c), [4, this.database.get("Options", "notificationClickHandlerAction")];
                                case 2:
                                    return g = i.sent(), g && (r = g), [4, t.getActiveClients()];
                                case 3:
                                    return f = i.sent(), [4, t.getNotificationUrlToOpen(n)];
                                case 4:
                                    p = i.sent(), h = t.shouldOpenNotificationUrl(p), b = !1, m = 0, v = f, i.label = 5;
                                case 5:
                                    return m < v.length ? (S = v[m], y = S.url, S.isSubdomainIframe ? [4, l["default"].get("Options", "lastKnownHostUrl")] : [3, 8]) : [3, 37];
                                case 6:
                                    return w = i.sent(), y = w, w ? [3, 8] : [4, l["default"].get("Options", "defaultUrl")];
                                case 7:
                                    y = i.sent(), i.label = 8;
                                case 8:
                                    O = "";
                                    try {
                                        O = new URL(y).origin
                                    } catch (N) {
                                        s.error("Failed to get the HTTP site's actual origin:", N)
                                    }
                                    E = null;
                                    try {
                                        E = new URL(p).origin
                                    } catch (N) {}
                                    if (!("exact" === o && y === p || "origin" === o && O === E)) return [3, 36];
                                    if (!(S.isSubdomainIframe && y === p || !S.isSubdomainIframe && S.url === p || "focus" === r && O === E)) return [3, 13];
                                    d.emit(S.id, "notification.clicked", n), i.label = 9;
                                case 9:
                                    return i.trys.push([9, 11, , 12]), [4, S.focus()];
                                case 10:
                                    return i.sent(), [3, 12];
                                case 11:
                                    return P = i.sent(), s.error("Failed to focus:", S, P), [3, 12];
                                case 12:
                                    return [3, 35];
                                case 13:
                                    if (!S.isSubdomainIframe) return [3, 21];
                                    i.label = 14;
                                case 14:
                                    return i.trys.push([14, 16, , 17]), s.debug("Client is subdomain iFrame. Attempting to focus() client."), [4, S.focus()];
                                case 15:
                                    return i.sent(), [3, 17];
                                case 16:
                                    return I = i.sent(), s.error("Failed to focus:", S, I), [3, 17];
                                case 17:
                                    return h ? (s.debug("Redirecting HTTP site to " + p + "."), [4, l["default"].put("NotificationOpened", {
                                        url: p,
                                        data: n,
                                        timestamp: Date.now()
                                    })]) : [3, 19];
                                case 18:
                                    return i.sent(), d.emit(S.id, "command.redirect", p), [3, 20];
                                case 19:
                                    s.debug("Not navigating because link is special."), i.label = 20;
                                case 20:
                                    return [3, 35];
                                case 21:
                                    if (!S.navigate) return [3, 32];
                                    i.label = 22;
                                case 22:
                                    return i.trys.push([22, 24, , 25]), s.debug("Client is standard HTTPS site. Attempting to focus() client."), [4, S.focus()];
                                case 23:
                                    return i.sent(), [3, 25];
                                case 24:
                                    return T = i.sent(), s.error("Failed to focus:", S, T), [3, 25];
                                case 25:
                                    return i.trys.push([25, 30, , 31]), h ? (s.debug("Redirecting HTTPS site to (" + p + ")."), [4, l["default"].put("NotificationOpened", {
                                        url: p,
                                        data: n,
                                        timestamp: Date.now()
                                    })]) : [3, 28];
                                case 26:
                                    return i.sent(), [4, S.navigate(p)];
                                case 27:
                                    return i.sent(), [3, 29];
                                case 28:
                                    s.debug("Not navigating because link is special."), i.label = 29;
                                case 29:
                                    return [3, 31];
                                case 30:
                                    return x = i.sent(), s.error("Failed to navigate:", S, p, x), [3, 31];
                                case 31:
                                    return [3, 35];
                                case 32:
                                    return [4, l["default"].put("NotificationOpened", {
                                        url: p,
                                        data: n,
                                        timestamp: Date.now()
                                    })];
                                case 33:
                                    return i.sent(), [4, t.openUrl(p)];
                                case 34:
                                    i.sent(), i.label = 35;
                                case 35:
                                    return b = !0, [3, 37];
                                case 36:
                                    return m++, [3, 5];
                                case 37:
                                    return !h || b ? [3, 40] : [4, l["default"].put("NotificationOpened", {
                                        url: p,
                                        data: n,
                                        timestamp: Date.now()
                                    })];
                                case 38:
                                    return i.sent(), [4, t.openUrl(p)];
                                case 39:
                                    i.sent(), i.label = 40;
                                case 40:
                                    return [4, l["default"].getAppConfig()];
                                case 41:
                                    return _ = i.sent().appId, [4, l["default"].getSubscription()];
                                case 42:
                                    return k = i.sent().deviceId, _ && k ? [4, a["default"].put("notifications/" + n.id, {
                                        app_id: _,
                                        player_id: k,
                                        opened: !0
                                    })] : [3, 44];
                                case 43:
                                    i.sent(), i.label = 44;
                                case 44:
                                    return [4, t.executeWebhooks("notification.clicked", n)];
                                case 45:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, t.openUrl = function(e) {
                    return n(this, void 0, void 0, function() {
                        var n;
                        return i(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    s.debug("Opening notification URL:", e), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, self.clients.openWindow(e)];
                                case 2:
                                    return [2, t.sent()];
                                case 3:
                                    return n = t.sent(), s.warn("Failed to open the URL '" + e + "':", n), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.onServiceWorkerInstalled = function(e) {
                    if (s.debug("Called %conServiceWorkerInstalled(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e), s.info("Installing service worker: %c" + self.location.pathname, u.getConsoleStyle("code"), "(version 120100)"), u.contains(self.location.pathname, "OneSignalSDKWorker")) var n = "WORKER1_ONE_SIGNAL_SW_VERSION";
                    else var n = "WORKER2_ONE_SIGNAL_SW_VERSION";
                    e.waitUntil(l["default"].put("Ids", {
                        type: n,
                        id: "120100"
                    }).then(function() {
                        return self.skipWaiting()
                    }))
                }, t.onServiceWorkerActivated = function(e) {
                    s.debug("Called %conServiceWorkerActivated(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e);
                    var n = self.clients.claim().then(function() {
                        return l["default"].get("Ids", "userId")
                    }).then(function(e) {
                        if (self.registration && e) return t._subscribeForPush(self.registration)["catch"](function(e) {
                            return s.error(e)
                        })
                    });
                    e.waitUntil(n)
                }, t.onFetch = function(n) {
                    n.respondWith(e(n.request))
                }, t.onPushSubscriptionChange = function(e) {
                    s.debug("Called %conPushSubscriptionChange(" + JSON.stringify(e, null, 4) + "):", u.getConsoleStyle("code"), e), e.waitUntil(t._subscribeForPush(self.registration))
                }, t.simulateEvent = function(e) {
                    self.dispatchEvent(new ExtendableEvent(e))
                }, t._subscribeForPush = function(e) {
                    s.debug("Called %c_subscribeForPush()", u.getConsoleStyle("code"));
                    var n = null;
                    return l["default"].get("Ids", "appId").then(function(t) {
                        return n = t, e.pushManager.getSubscription()
                    }).then(function(n) {
                        return s.debug("Resubscribing old subscription", n, "within the service worker ..."), n && n.options ? e.pushManager.subscribe(n.options) : Promise.resolve()
                    }).then(function(e) {
                        var i = null;
                        if (e) {
                            if (i = {}, s.debug("Finished resubscribing for push:", e), "undefined" != typeof e.subscriptionId ? i.endpointOrToken = e.subscriptionId : i.endpointOrToken = e.endpoint, e.getKey) {
                                var o = null;
                                try {
                                    o = e.getKey("p256dh")
                                } catch (r) {}
                                var a = null;
                                try {
                                    a = e.getKey("auth")
                                } catch (r) {}
                                if (o) {
                                    var l = btoa(String.fromCharCode.apply(null, new Uint8Array(o)));
                                    i.p256dh = l
                                }
                                if (a) {
                                    var u = btoa(String.fromCharCode.apply(null, new Uint8Array(a)));
                                    i.auth = u
                                }
                            }
                        } else s.info("Could not subscribe your browser for push notifications.");
                        return t.registerWithOneSignal(n, i)
                    })
                }, t.registerWithOneSignal = function(e, n) {
                    var i = u.getDeviceTypeForBrowser();
                    return Promise.all([l["default"].get("Ids", "userId")]).then(function(o) {
                        var s = o[0];
                        o[1];
                        if (!s) return Promise.reject("No user ID found; cannot update existing player info");
                        var u = "players/" + s,
                            c = {
                                app_id: e,
                                device_type: i,
                                language: r["default"].getLanguage(),
                                timezone: (new Date).getTimezoneOffset() * -60,
                                device_model: navigator.platform + " " + g.name,
                                device_os: g.version,
                                sdk: t.VERSION
                            };
                        if (n) {
                            c.identifier = n.endpointOrToken;
                            var d = n.endpointOrToken.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "");
                            l["default"].put("Ids", {
                                type: "registrationId",
                                id: d
                            }), n.auth && (c.web_auth = n.auth), n.p256dh && (c.web_p256 = n.p256dh)
                        }
                        return a["default"].put(u, c)
                    }).then(function(e) {
                        if (e) {
                            e.success || s.error("Resubscription registration with OneSignal failed:", e);
                            var n = e.id;
                            n && l["default"].put("Ids", {
                                type: "userId",
                                id: n
                            })
                        } else s.debug("Resubscription registration failed because no user ID found.")
                    })
                }, t._getTitle = function() {
                    return new Promise(function(e, n) {
                        Promise.all([l["default"].get("Options", "defaultTitle"), l["default"].get("Options", "pageTitle")]).then(function(n) {
                            var t = n[0],
                                i = n[1];
                            e(null !== t ? t : null != i ? i : "")
                        })
                    })
                }, t.parseOrFetchNotifications = function(e) {
                    if (e.data) {
                        return t.isValidPushPayload(e.data) ? (s.debug("Received a valid encrypted push payload."), Promise.resolve([e.data.json()])) : Promise.reject("Unexpected push message payload received: " + e.data.text())
                    }
                    return t.retrieveNotifications()
                }, t.isValidPushPayload = function(e) {
                    try {
                        var n = e.json();
                        return !!(n && n.custom && n.custom.i && u.isValidUuid(n.custom.i)) || (s.debug("isValidPushPayload: Valid JSON but missing notification UUID:", n), !1)
                    } catch (t) {
                        return s.debug("isValidPushPayload: Parsing to JSON failed with:", t), !1
                    }
                }, t.retrieveNotifications = function() {
                    return new Promise(function(e, n) {
                        var i = [];
                        l["default"].get("Ids", "userId").then(function(e) {
                            return e ? (s.debug("Legacy push signal received, retrieving contents from players/" + e + "/chromeweb_notification"), a["default"].get("players/" + e + "/chromeweb_notification")) : (s.debug("Tried to get notification contents, but IndexedDB is missing user ID info."), Promise.all([l["default"].get("Ids", "appId"), self.registration.pushManager.getSubscription().then(function(e) {
                                return e.endpoint
                            })]).then(function(e) {
                                var n = e[0],
                                    t = e[1],
                                    i = u.getDeviceTypeForBrowser();
                                return a["default"].getUserIdFromSubscriptionIdentifier(n, i, t).then(function(e) {
                                    return e ? (s.debug("Recovered OneSignal user ID:", e), Promise.all([l["default"].put("Ids", {
                                        type: "userId",
                                        id: e
                                    }), l["default"].put("Ids", {
                                        type: "registrationId",
                                        id: t.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "")
                                    })]).then(function() {
                                        return s.debug("Attempting to retrieve the notification again now with a recovered user ID."), a["default"].get("players/" + e + "/chromeweb_notification")
                                    })) : Promise.reject("Recovered user ID was null. Unsubscribing from push notifications.")
                                })
                            })["catch"](function(e) {
                                return s.debug("Unsuccessfully attempted to recover OneSignal user ID:", e), self.registration.pushManager.getSubscription().then(function(e) {
                                    return e.unsubscribe()
                                }).then(function(e) {
                                    s.debug("Unsubscribed from push notifications result:", e), t.UNSUBSCRIBED_FROM_NOTIFICATIONS = !0
                                })
                            }))
                        }).then(function(n) {
                            for (var t = 0; t < n.length; t++) i.push(JSON.parse(n[t]));
                            0 == i.length && s.warn("OneSignal Worker: Received a GCM push signal, but there were no messages to retrieve. Are you using the wrong API URL?", o.API_URL), e(i)
                        })
                    })
                }, t
            }();
        self.OneSignalWorker = f, s.setDefaultLevel(s.levels.ERROR), s.info("%cOneSignal Service Worker loaded (version 120100, " + r["default"].getEnv() + " environment).", u.getConsoleStyle("bold")), f.run()
    }).call(n, t(25))
}, function(e, n) {
    "use strict";
    var t = function() {
        function e() {}
        return e.isValidUrl = function(e, n) {
            if (n && n.allowNull && null === e) return !0;
            if (n && n.allowEmpty && (null === e || void 0 === e)) return !0;
            try {
                var t = new URL(e);
                return !n || !n.requireHttps || "https:" === t.protocol
            } catch (i) {
                return !1
            }
        }, e.isValidBoolean = function(e, n) {
            return !(!n || !n.allowNull || null !== e) || (e === !0 || e === !1)
        }, e.isValidArray = function(e, n) {
            return !(!n || !n.allowNull || null !== e) || (!(!n || !n.allowEmpty || null !== e && void 0 !== e) || e instanceof Array)
        }, e
    }();
    n.ValidatorUtils = t
}, function(e, n, t) {
    "use strict";
    var i = t(74);
    e.exports = function(e, n, t) {
        e && i(function() {
            e.apply(t || null, n || [])
        })
    }
}, function(e, n, t) {
    n = e.exports = t(24)(), n.push([e.id, '/*!\n* CleanSlate\n*   github.com/premasagar/cleanslate\n*\n*/.onesignal-reset,.onesignal-reset a,.onesignal-reset abbr,.onesignal-reset acronym,.onesignal-reset address,.onesignal-reset applet,.onesignal-reset area,.onesignal-reset article,.onesignal-reset aside,.onesignal-reset audio,.onesignal-reset b,.onesignal-reset big,.onesignal-reset blockquote,.onesignal-reset button,.onesignal-reset canvas,.onesignal-reset caption,.onesignal-reset cite,.onesignal-reset code,.onesignal-reset col,.onesignal-reset colgroup,.onesignal-reset datalist,.onesignal-reset dd,.onesignal-reset del,.onesignal-reset dfn,.onesignal-reset div,.onesignal-reset dl,.onesignal-reset dt,.onesignal-reset em,.onesignal-reset fieldset,.onesignal-reset figcaption,.onesignal-reset figure,.onesignal-reset footer,.onesignal-reset form,.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6,.onesignal-reset header,.onesignal-reset hr,.onesignal-reset i,.onesignal-reset iframe,.onesignal-reset img,.onesignal-reset input,.onesignal-reset ins,.onesignal-reset kbd,.onesignal-reset label,.onesignal-reset legend,.onesignal-reset li,.onesignal-reset main,.onesignal-reset map,.onesignal-reset mark,.onesignal-reset menu,.onesignal-reset meta,.onesignal-reset nav,.onesignal-reset object,.onesignal-reset ol,.onesignal-reset optgroup,.onesignal-reset option,.onesignal-reset output,.onesignal-reset p,.onesignal-reset pre,.onesignal-reset progress,.onesignal-reset q,.onesignal-reset samp,.onesignal-reset section,.onesignal-reset select,.onesignal-reset small,.onesignal-reset span,.onesignal-reset strike,.onesignal-reset strong,.onesignal-reset sub,.onesignal-reset summary,.onesignal-reset sup,.onesignal-reset table,.onesignal-reset tbody,.onesignal-reset td,.onesignal-reset textarea,.onesignal-reset tfoot,.onesignal-reset th,.onesignal-reset thead,.onesignal-reset time,.onesignal-reset tr,.onesignal-reset tt,.onesignal-reset ul,.onesignal-reset var,.onesignal-reset video{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:repeat;border-color:#000;border:medium none currentColor;bottom:auto;clear:none;clip:auto;color:inherit;counter-increment:none;counter-reset:none;cursor:auto;direction:inherit;display:inline;float:none;font-family:inherit;font-size:inherit;font-style:inherit;font-variant:normal;font-weight:inherit;height:auto;left:auto;letter-spacing:normal;line-height:inherit;list-style-type:inherit;list-style-position:outside;list-style-image:none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;outline:medium none invert;overflow:visible;padding:0;position:static;quotes:"" "";right:auto;table-layout:auto;text-align:inherit;text-decoration:inherit;text-indent:0;text-transform:none;top:auto;unicode-bidi:normal;vertical-align:baseline;visibility:inherit;white-space:normal;width:auto;word-spacing:normal;z-index:auto;background-origin:padding-box;background-clip:border-box;background-size:auto;-o-border-image:none;border-image:none;border-radius:0;box-shadow:none;box-sizing:content-box;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none #000;-moz-column-rule:medium none #000;column-rule:medium none #000;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-font-feature-settings:normal;font-feature-settings:normal;overflow-x:visible;overflow-y:visible;-webkit-hyphens:manual;-ms-hyphens:manual;hyphens:manual;-webkit-perspective:none;-ms-perspective:none;-o-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%;-webkit-backface-visibility:visible;backface-visibility:visible;text-shadow:none;-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:flat;transform-style:flat;word-break:normal}.onesignal-reset,.onesignal-reset address,.onesignal-reset article,.onesignal-reset audio,.onesignal-reset blockquote,.onesignal-reset caption,.onesignal-reset colgroup,.onesignal-reset dd,.onesignal-reset dialog,.onesignal-reset div,.onesignal-reset dl,.onesignal-reset dt,.onesignal-reset fieldset,.onesignal-reset figure,.onesignal-reset footer,.onesignal-reset form,.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6,.onesignal-reset header,.onesignal-reset hgroup,.onesignal-reset hr,.onesignal-reset main,.onesignal-reset menu,.onesignal-reset nav,.onesignal-reset ol,.onesignal-reset option,.onesignal-reset p,.onesignal-reset pre,.onesignal-reset progress,.onesignal-reset section,.onesignal-reset summary,.onesignal-reset ul,.onesignal-reset video{display:block}.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6{font-weight:700}.onesignal-reset h1{font-size:2em;padding:.67em 0}.onesignal-reset h2{font-size:1.5em;padding:.83em 0}.onesignal-reset h3{font-size:1.17em;padding:.83em 0}.onesignal-reset h4{font-size:1em}.onesignal-reset h5{font-size:.83em}.onesignal-reset p{margin:1em 0}.onesignal-reset table{display:table}.onesignal-reset thead{display:table-header-group}.onesignal-reset tbody{display:table-row-group}.onesignal-reset tfoot{display:table-footer-group}.onesignal-reset tr{display:table-row}.onesignal-reset td,.onesignal-reset th{display:table-cell;padding:2px}.onesignal-reset ol,.onesignal-reset ul{margin:1em 0}.onesignal-reset ol li,.onesignal-reset ol ol li,.onesignal-reset ol ol ol li,.onesignal-reset ol ol ul li,.onesignal-reset ol ul ul li,.onesignal-reset ul li,.onesignal-reset ul ol ol li,.onesignal-reset ul ul li,.onesignal-reset ul ul ol li,.onesignal-reset ul ul ul li{list-style-position:inside;margin-top:.08em}.onesignal-reset ol ol,.onesignal-reset ol ol ol,.onesignal-reset ol ol ul,.onesignal-reset ol ul,.onesignal-reset ol ul ul,.onesignal-reset ul ol,.onesignal-reset ul ol ol,.onesignal-reset ul ul,.onesignal-reset ul ul ol,.onesignal-reset ul ul ul{padding-left:40px;margin:0}.onesignal-reset nav ol,.onesignal-reset nav ul{list-style-type:none}.onesignal-reset menu,.onesignal-reset ul{list-style-type:disc}.onesignal-reset ol{list-style-type:decimal}.onesignal-reset menu menu,.onesignal-reset menu ul,.onesignal-reset ol menu,.onesignal-reset ol ul,.onesignal-reset ul menu,.onesignal-reset ul ul{list-style-type:circle}.onesignal-reset menu menu menu,.onesignal-reset menu menu ul,.onesignal-reset menu ol menu,.onesignal-reset menu ol ul,.onesignal-reset menu ul menu,.onesignal-reset menu ul ul,.onesignal-reset ol menu menu,.onesignal-reset ol menu ul,.onesignal-reset ol ol menu,.onesignal-reset ol ol ul,.onesignal-reset ol ul menu,.onesignal-reset ol ul ul,.onesignal-reset ul menu menu,.onesignal-reset ul menu ul,.onesignal-reset ul ol menu,.onesignal-reset ul ol ul,.onesignal-reset ul ul menu,.onesignal-reset ul ul ul{list-style-type:square}.onesignal-reset li{display:list-item;min-height:auto;min-width:auto;padding-left:20px}.onesignal-reset strong{font-weight:700}.onesignal-reset em{font-style:italic}.onesignal-reset code,.onesignal-reset kbd,.onesignal-reset pre,.onesignal-reset samp{font-family:monospace}.onesignal-reset a{color:blue;text-decoration:underline}.onesignal-reset a:visited{color:#529}.onesignal-reset a,.onesignal-reset a *,.onesignal-reset input[type=checkbox],.onesignal-reset input[type=radio],.onesignal-reset input[type=submit],.onesignal-reset select{cursor:pointer}.onesignal-reset button,.onesignal-reset input[type=submit]{text-align:center;padding:2px 6px 3px;border-radius:4px;text-decoration:none;font-family:arial,helvetica,sans-serif;font-size:small;-webkit-appearance:push-button;color:buttontext;border:1px solid #a6a6a6;background:#d3d3d3;background:#fff;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(100%,#ddd),color-stop(100%,#d1d1d1),color-stop(100%,#ddd));background:-webkit-linear-gradient(top,#fff,#ddd 100%,#d1d1d1 0,#ddd 0);background:linear-gradient(180deg,#fff 0,#ddd 100%,#d1d1d1 0,#ddd 0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffff\',endColorstr=\'#dddddd\',GradientType=0);-o-box-shadow:1px 1px 0 #eee;box-shadow:1px 1px 0 #eee;outline:initial}.onesignal-reset button{padding:1px 6px 2px;margin-right:5px}.onesignal-reset input[type=hidden]{display:none}.onesignal-reset textarea{-webkit-appearance:textarea;background:#fff;padding:2px;margin-left:4px;word-wrap:break-word;white-space:pre-wrap;font-size:11px;font-family:arial,helvetica,sans-serif;line-height:13px;resize:both}.onesignal-reset input,.onesignal-reset select,.onesignal-reset textarea{border:1px solid #ccc}.onesignal-reset select{font-size:11px;font-family:helvetica,arial,sans-serif;display:inline-block}.onesignal-reset input:focus,.onesignal-reset textarea:focus{outline:5px auto -webkit-focus-ring-color;outline:initial}.onesignal-reset input[type=text]{background:#fff;padding:1px;font-family:initial;font-size:small}.onesignal-reset input[type=checkbox],.onesignal-reset input[type=radio]{border:1px solid #2b2b2b;border-radius:4px;outline:intial}.onesignal-reset input[type=radio]{margin:2px 2px 3px}.onesignal-reset button:active,.onesignal-reset input[type=submit]:active{background:#3b679e;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3b679e),color-stop(50%,#2b88d9),color-stop(51%,#207cca),color-stop(100%,#7db9e8));background:-webkit-linear-gradient(top,#3b679e,#2b88d9 50%,#207cca 51%,#7db9e8);background:linear-gradient(180deg,#3b679e 0,#2b88d9 50%,#207cca 51%,#7db9e8);border-color:#5259b0}.onesignal-reset abbr[title],.onesignal-reset acronym[title],.onesignal-reset dfn[title]{cursor:help;border-bottom-width:1px;border-bottom-style:dotted}.onesignal-reset ins{background-color:#ff9;color:#000}.onesignal-reset del{text-decoration:line-through}.onesignal-reset blockquote,.onesignal-reset q{quotes:none}.onesignal-reset blockquote:after,.onesignal-reset blockquote:before,.onesignal-reset li:after,.onesignal-reset li:before,.onesignal-reset q:after,.onesignal-reset q:before{content:""}.onesignal-reset input,.onesignal-reset select{vertical-align:middle}.onesignal-reset table{border-collapse:collapse;border-spacing:0}.onesignal-reset hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0}.onesignal-reset [dir=rtl]{direction:rtl}.onesignal-reset mark{background-color:#ff9;color:#000;font-style:italic;font-weight:700}.onesignal-reset menu{padding-left:40px;padding-top:8px}.onesignal-reset [hidden],.onesignal-reset template{display:none}.onesignal-reset abbr[title]{border-bottom:1px dotted}.onesignal-reset sub,.onesignal-reset sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.onesignal-reset sup{top:-.5em}.onesignal-reset sub{bottom:-.25em}.onesignal-reset img{border:0}.onesignal-reset figure{margin:0}.onesignal-reset textarea{overflow:auto;vertical-align:top}.onesignal-reset{font-size:medium;line-height:1;direction:ltr;text-align:left;text-align:start;font-family:Times New Roman,Times,serif;color:#000;font-style:normal;font-weight:400;text-decoration:none;list-style-type:disc}.onesignal-reset pre{white-space:pre}#onesignal-bell-container.onesignal-reset{z-index:2147483000;position:fixed}#onesignal-bell-container.onesignal-reset.onesignal-bell-container-bottom-left{bottom:0;left:0}#onesignal-bell-container.onesignal-reset.onesignal-bell-container-bottom-right{bottom:0;right:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:initial;position:absolute;z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-transform:scale(.01) translateZ(0);transform:scale(.01) translateZ(0);opacity:0;-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left{bottom:20px;left:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm{-webkit-transform-origin:center center;transform-origin:center center;width:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{left:42px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{bottom:39px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{left:5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{left:7px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md{-webkit-transform-origin:center center;transform-origin:center center;width:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-message{left:61px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{bottom:58px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{left:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{left:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg{-webkit-transform-origin:center center;transform-origin:center center;width:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{left:81px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{bottom:78px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{left:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{left:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-badge{left:4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-message{-webkit-transform-origin:left center;transform-origin:left center}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-message:after{right:100%;border-right-color:#000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-button{left:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right{bottom:20px;right:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm{-webkit-transform-origin:center center;transform-origin:center center;width:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{right:42px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{bottom:39px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{right:5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{right:7px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md{-webkit-transform-origin:center center;transform-origin:center center;width:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-message{right:61px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{bottom:58px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{right:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{right:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg{-webkit-transform-origin:center center;transform-origin:center center;width:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{right:81px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{bottom:78px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{right:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{right:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-badge{right:4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-message{-webkit-transform-origin:right center;transform-origin:right center}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-message:after{left:100%;border-left-color:#000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-button{right:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button{position:absolute;bottom:0;border-radius:50%;-webkit-transition:border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;cursor:pointer;z-index:2147483000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button svg{width:100%;height:100%;overflow:visible}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button.onesignal-bell-launcher-button-hover{cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge{position:absolute;bottom:0;border-radius:50%;text-align:center;top:0;cursor:pointer;-webkit-filter:drop-shadow(0 2px 4px rgba(34,36,38,0));filter:drop-shadow(0 2px 4px rgba(34,36,38,0));-webkit-transition:border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;transition:border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;z-index:2147483400;opacity:0;-webkit-transform:scale(.01);transform:scale(.01);pointer-events:none}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge.onesignal-bell-launcher-badge-hover{cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge.onesignal-bell-launcher-badge-opened{opacity:1;-webkit-transform:scale(1);transform:scale(1)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message{position:absolute;color:#fff;background:#000;cursor:pointer;border-radius:5px;-webkit-transform:translateY(-50%) scaleX(0) translateZ(0);transform:translateY(-50%) scaleX(0) translateZ(0);opacity:0;pointer-events:none;-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;top:50%;z-index:2147481000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message:after{top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:transparent}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{z-index:2147482000;max-width:100%;white-space:nowrap;text-overflow:ellipsis}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message.onesignal-bell-launcher-message-opened{pointer-events:auto;opacity:1;-webkit-transform:translateY(-50%) scaleX(1) translateZ(0);transform:translateY(-50%) scaleX(1) translateZ(0)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog{cursor:pointer;position:absolute;background-color:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.1);opacity:0;width:200px;-webkit-transform:scale(0) translateZ(0);transform:scale(0) translateZ(0);-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;z-index:2147481000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol{counter-reset:foo;display:table;border-spacing:.3em .75em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol>li{counter-increment:foo;display:table-row;margin-bottom:.75em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol>li:before{content:counter(foo) ".";display:table-cell;text-align:right}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog:after,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog:before{top:100%;border:solid transparent;content:" ";height:0;width:0;position:absolute}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{z-index:2147482000;max-width:100%;white-space:nowrap;text-overflow:ellipsis;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog.onesignal-bell-launcher-dialog-opened{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0);opacity:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a{box-sizing:border-box;text-decoration:none;color:initial}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:focus,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:hover,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:hover:active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:visited{text-decoration:none;color:initial}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button{box-sizing:border-box;border:1px solid transparent;padding:.625em 1em;box-shadow:none;border-radius:4px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.65px;cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action{color:#fff;background:#e54b4d;width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover{background:#dd2022}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active{background:#b1191b}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm{height:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-button{width:32px;height:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-badge{font-size:8px;width:12px;height:12px;line-height:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{padding:9.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message:after{border-width:6.6px;margin-top:-6.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:6.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:8.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md{height:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-button{width:48px;height:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-badge{font-size:12px;width:18px;height:18px;line-height:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message{padding:14.4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message:after{border-width:9.9px;margin-top:-9.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:9.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:11.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg{height:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-button{width:64px;height:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-badge{font-size:12px;width:24px;height:24px;line-height:24px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{padding:19.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message:after{border-width:13.2px;margin-top:-13.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:13.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:15.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .background{fill:#e54b4d}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .foreground{fill:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .stroke{fill:none;stroke:#fff;stroke-width:3px;stroke-miterlimit:10}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button.onesignal-bell-launcher-badge-active svg .background,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button.onesignal-bell-launcher-button-active svg .background{fill:#dd2022!important}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button .pulse-ring{border:7px solid hsla(0,0%,100%,.4)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-badge{border:1px solid #fff;background:#000;color:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .background{fill:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .foreground{fill:#e54b4d}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .stroke{fill:none;stroke:#e54b4d;stroke-width:3px;stroke-miterlimit:10}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button.onesignal-bell-launcher-badge-active svg .background,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button.onesignal-bell-launcher-button-active svg .background{fill:#f2f2f2!important}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button .pulse-ring{border:7px solid rgba(229,75,77,.4)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-badge{border:1px solid #fff;background:#e54b4d;color:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-enabled{-webkit-transform:scale(1);transform:scale(1);opacity:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-disabled{visibility:hidden}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-inactive{opacity:.5}#onesignal-bell-container.onesignal-reset .pulse-ring{border-radius:50%;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-animation:notifyButtonPulse .35s ease-in-out;animation:notifyButtonPulse .35s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1;opacity:0;z-index:1000;pointer-events:none}@media print{#onesignal-bell-container{display:none}}@-webkit-keyframes notifyButtonPulse{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:0;border-width:10px}50%{opacity:1;border-width:5px}to{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0;border-width:1px}}@keyframes notifyButtonPulse{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:0;border-width:10px}50%{opacity:1;border-width:5px}to{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0;border-width:1px}}', ""]);
}, function(e, n, t) {
    n = e.exports = t(24)(), n.push([e.id, "#onesignal-modal-container{font-size:14px;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2258594000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(51,51,51,.2);-webkit-font-smoothing:initial;padding:2em}#onesignal-modal-container #onesignal-modal-dialog{width:600px;max-width:100%;box-sizing:border-box;margin:0 auto;box-shadow:0 0 20px 3px rgba(0,0,0,.22)!important;background:#fff!important;padding:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}#onesignal-modal-container #onesignal-modal-dialog .modal-body{box-sizing:border-box;margin:0;padding-bottom:1.714em}#onesignal-modal-container #onesignal-modal-dialog .modal-body-icon{box-sizing:border-box;float:left;width:80px;height:80px;background-size:contain;background-position:0 0;background-repeat:no-repeat}#onesignal-modal-container #onesignal-modal-dialog .modal-body-icon.default-icon{background-size:initial;background-position:50% 0}#onesignal-modal-container #onesignal-modal-dialog .modal-body-message{box-sizing:border-box;text-align:center;width:100%;display:block;font-size:1.143em;padding:0 1.5em;line-height:1.45em;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-weight:300;color:#666!important}#onesignal-modal-container #onesignal-modal-dialog .modal-body-title{background:#24a3f3;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:1em;text-align:center;font-size:1.4em;font-weight:300;color:#fff!important;margin-bottom:1.25em}#onesignal-modal-container #onesignal-modal-dialog .modal-exit{position:absolute;right:15px;top:15px;color:#fff;font-size:1.5em}#onesignal-modal-container #onesignal-modal-dialog button{box-sizing:border-box;display:inline-block;padding:.375rem 1rem;font-size:.9625em;font-weight:400;line-height:1.5;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:.25rem;font-family:inherit;letter-spacing:.05em;-webkit-transition:background-color 75ms ease;transition:background-color 75ms ease;margin:0}#onesignal-modal-container #onesignal-modal-dialog .modal-button{padding:.714em 2em;font-size:1em;text-transform:uppercase;border-radius:2px;font-weight:400}#onesignal-modal-container #onesignal-modal-dialog .modal-button.primary{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 6px 0 rgba(0,0,0,.12);background:#24a3f3!important;color:#fff!important}#onesignal-modal-container #onesignal-modal-dialog .modal-button.primary:hover{background:#1e6ef2}#onesignal-modal-container #onesignal-modal-dialog .modal-button.primary:active{background:#0d5bdd}#onesignal-modal-container #onesignal-modal-dialog .modal-button.secondary{box-shadow:none;background:#fff!important;color:#4285f4!important}#onesignal-modal-container #onesignal-modal-dialog .modal-button.secondary:hover{color:#0e60e9}#onesignal-modal-container #onesignal-modal-dialog .modal-button.secondary:active{color:#083c92}#onesignal-modal-container #onesignal-modal-dialog .primary.modal-button+.secondary.modal-button{margin-right:.714em}#onesignal-modal-container #onesignal-modal-dialog .modal-footer{position:relative;margin:.571em;margin-bottom:1.15em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}#onesignal-modal-container #onesignal-modal-dialog .align-right{float:right}#onesignal-modal-container #onesignal-modal-dialog .clearfix{display:block}#onesignal-modal-container #onesignal-modal-dialog .clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}", ""])
}, function(e, n, t) {
    n = e.exports = t(24)(), n.push([e.id, "#onesignal-popover-container{font-size:14px;position:fixed;z-index:2258594000;left:0;right:0;-webkit-font-smoothing:initial}#onesignal-popover-container.slide-down{top:0}#onesignal-popover-container.slide-down.close-popover #onesignal-popover-dialog{-webkit-animation-name:slideDownExit;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideDownExit;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-down #onesignal-popover-dialog{width:500px;-webkit-animation-name:slideDownEnter;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideDownEnter;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog{padding:1.714em;width:612px;margin-bottom:18px}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog #blocked-popover{display:block}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog #normal-popover{display:none}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message{padding:0 .2em;text-align:center;width:100%}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message img{width:100%}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message .unblock-image{margin:2em 0 .5em}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-button.secondary{padding:.714em 2em}#onesignal-popover-container #blocked-popover{display:none}#onesignal-popover-container.slide-up{bottom:0}#onesignal-popover-container.slide-up.close-popover #onesignal-popover-dialog{-webkit-animation-name:slideUpExit;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideUpExit;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-up #onesignal-popover-dialog{width:100%;-webkit-animation-name:slideUpEnter;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:backwards;animation-name:slideUpEnter;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:backwards}#onesignal-popover-container #onesignal-popover-dialog{box-sizing:border-box;max-width:100%;margin:0 auto;box-shadow:0 0 20px 3px rgba(0,0,0,.22)!important;background:#fff!important;padding:1.286em;border-bottom-left-radius:2px;border-bottom-right-radius:2px;font-family:Roboto,Noto,Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-popover-container #onesignal-popover-dialog .popover-body{box-sizing:border-box;margin:0}#onesignal-popover-container #onesignal-popover-dialog .popover-body-icon{box-sizing:border-box;float:left;width:80px;height:80px;background-size:contain;background-position:0 0;background-repeat:no-repeat}#onesignal-popover-container #onesignal-popover-dialog .popover-body-icon.default-icon{background-size:initial;background-position:50% 0}#onesignal-popover-container #onesignal-popover-dialog .popover-body-message{box-sizing:border-box;padding:0 .2em 0 1.286em;float:left;width:calc(100% - 80px);font-size:1.143em;line-height:1.45em;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#666!important}#onesignal-popover-container #onesignal-popover-dialog button{box-sizing:border-box;display:inline-block;padding:.375rem 1rem;font-size:.9625em;font-weight:400;line-height:1.5;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:.25rem;font-family:inherit;letter-spacing:.05em;-webkit-transition:background-color 75ms ease;transition:background-color 75ms ease;margin:0}#onesignal-popover-container #onesignal-popover-dialog .popover-button{padding:.714em 2em;font-size:1em;text-transform:uppercase;border-radius:2px;font-weight:400}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 6px 0 rgba(0,0,0,.12);background:#4285f4!important;color:#fff!important}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary:hover{background:#1e6ef2}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary:active{background:#0d5bdd}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary{box-shadow:none;background:#fff!important;color:#4285f4!important}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary:hover{color:#0e60e9}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary:active{color:#083c92}#onesignal-popover-container #onesignal-popover-dialog .primary.popover-button+.secondary.popover-button{margin-right:.714em}#onesignal-popover-container #onesignal-popover-dialog .popover-footer{position:relative;margin:.25em .25em 0 0}#onesignal-popover-container #onesignal-popover-dialog .align-right{float:right}#onesignal-popover-container #onesignal-popover-dialog .clearfix{display:block;-webkit-backface-visibility:initial!important;backface-visibility:initial!important}#onesignal-popover-container #onesignal-popover-dialog .clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}@-webkit-keyframes slideDownEnter{0%{-webkit-transform:translateY(-150%)}to{-webkit-transform:translateY(0)}}@keyframes slideDownEnter{0%{-webkit-transform:translateY(-150%);transform:translateY(-150%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideDownExit{0%{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(-150%)}}@keyframes slideDownExit{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-150%);transform:translateY(-150%)}}@-webkit-keyframes slideUpEnter{0%{-webkit-transform:translateY(150%)}to{-webkit-transform:translateY(0)}}@keyframes slideUpEnter{0%{-webkit-transform:translateY(150%);transform:translateY(150%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideUpExit{0%{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(150%)}}@keyframes slideUpExit{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(150%);transform:translateY(150%)}}", ""])
}, function(e, n) {
    "use strict";
    function t(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? e : n
    }
    function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
    }
    function r(e) {
        function n() {
            e.apply(this, arguments)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e, n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = function(e) {
        function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            t(this, n);
            var o = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return Object.defineProperty(o, "message", {
                configurable: !0,
                enumerable: !1,
                value: e,
                writable: !0
            }), Object.defineProperty(o, "name", {
                configurable: !0,
                enumerable: !1,
                value: o.constructor.name,
                writable: !0
            }), Error.hasOwnProperty("captureStackTrace") ? (Error.captureStackTrace(o, o.constructor), i(o)) : (Object.defineProperty(o, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(e).stack,
                writable: !0
            }), o)
        }
        return o(n, e), n
    }(r(Error));
    n["default"] = a, e.exports = n["default"]
}, function(e, n, t) {
    (function(n) {
        e.exports = n.OneSignal = t(40)
    }).call(n, function() {
        return this
    }())
}, function(e, n, t) {
    (function(n) {
        e.exports = n.OneSignal = t(41)
    }).call(n, function() {
        return this
    }())
}, function(e, n, t) {
    (function(n) {
        e.exports = n.ServiceWorker = t(57)
    }).call(n, function() {
        return this
    }())
}, function(e, n) {
    function t() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === t || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (n) {
            try {
                return c.call(null, e, 0)
            } catch (n) {
                return c.call(this, e, 0)
            }
        }
    }
    function r(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (n) {
            try {
                return d.call(null, e)
            } catch (n) {
                return d.call(this, e)
            }
        }
    }
    function a() {
        h && f && (h = !1, f.length ? p = f.concat(p) : b = -1, p.length && s())
    }
    function s() {
        if (!h) {
            var e = o(a);
            h = !0;
            for (var n = p.length; n;) {
                for (f = p, p = []; ++b < n;) f && f[b].run();
                b = -1, n = p.length
            }
            f = null, h = !1, r(e)
        }
    }
    function l(e, n) {
        this.fun = e, this.array = n
    }
    function u() {}
    var c, d, g = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : t
        } catch (e) {
            c = t
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    }();
    var f, p = [],
        h = !1,
        b = -1;
    g.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        p.push(new l(e, n)), 1 !== p.length || h || o(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, g.title = "browser", g.browser = !0, g.env = {}, g.argv = [], g.version = "", g.versions = {}, g.on = u, g.addListener = u, g.once = u, g.off = u, g.removeListener = u, g.removeAllListeners = u, g.emit = u, g.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, g.cwd = function() {
        return "/"
    }, g.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, g.umask = function() {
        return 0
    }
}, function(e, n) {
    e.exports = '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t width="99.7px" height="99.7px" viewBox="0 0 99.7 99.7" style="enable-background:new 0 0 99.7 99.7;" xml:space="preserve">\n<g>\n\t<circle class="background" cx="49.9" cy="49.9" r="49.9"/>\n\t<g id="Layer_2">\n\t\t<g>\n\t\t\t<path class="foreground" d="M50.1,66.2H27.7c0,0-2-0.2-2-2.1c0-1.9,1.7-2,1.7-2s6.7-3.2,6.7-5.5c0-2.3-1.1-3.9-1.1-13.3\n\t\t\t\ts6-16.6,13.2-16.6c0,0,1-2.4,3.9-2.4c2.8,0,3.8,2.4,3.8,2.4c7.2,0,13.2,7.2,13.2,16.6s-1,11-1,13.3c0,2.3,6.7,5.5,6.7,5.5\n\t\t\t\ts1.7,0.1,1.7,2c0,1.8-2.1,2.1-2.1,2.1H50.1z"/>\n\t\t\t<path class="foreground" d="M42.9,68.5h14.5c0,0-1,6.3-7.2,6.3S42.9,68.5,42.9,68.5z"/>\n\t\t\t<ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n'
}, function(e, n, t) {
    var i = t(60);
    "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    t(27)(i, {});
    i.locals && (e.exports = i.locals)
}, function(e, n, t) {
    var i = t(61);
    "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    t(27)(i, {});
    i.locals && (e.exports = i.locals)
}, function(e, n, t) {
    var i = t(62);
    "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    t(27)(i, {});
    i.locals && (e.exports = i.locals)
}, function(e, n, t) {
    "use strict";
    function i() {
        function e(n) {
            function t(e) {
                return function() {
                    return l[e].apply(null, arguments), u
                }
            }
            function i() {
                if (!n) return Promise.reject(new Error("ServiceWorker not found."));
                var e = r.parsePayload(o(arguments)),
                    t = new MessageChannel;
                return t.port1.addEventListener("message", c), n.postMessage(e, [t.port2])
            }
            function s(e) {
                var n = e.data;
                n && (n.__broadcast ? r.emission(l, {
                    broadcast: !0
                })(e) : r.emission(l, {
                    broadcast: !1
                })(e))
            }
            var l = a(),
                u = {
                    on: t("on"),
                    once: t("once"),
                    off: t("off"),
                    emit: i,
                    at: e
                },
                c = r.emission(l, {
                    broadcast: !1
                });
            return navigator.serviceWorker.addEventListener("message", s), u
        }
        return e(navigator.serviceWorker.controller)
    }
    var o = t(20),
        r = t(39),
        a = t(38);
    e.exports = i
}, function(e, n, t) {
    "use strict";
    function i() {
        function e(e) {
            return function() {
                return u[e].apply(null, arguments), c
            }
        }
        function n(e) {
            var n = {
                reply: s(e)
            };
            r.emission(u, n)(e)
        }
        function t(e) {
            function n(e) {
                return e.map(t)
            }
            function t(n) {
                return n.postMessage({
                    type: e,
                    payload: i,
                    __broadcast: !0
                })
            }
            var i = o(arguments, 1);
            return self.clients.matchAll({
                includeUncontrolled: !0
            }).then(n)
        }
        function i(e) {
            var n = r.parsePayload(o(arguments, 1));
            return e.postMessage(n)
        }
        function s(e) {
            return i.bind(null, e.ports[0])
        }
        function l(e) {
            var n = r.parsePayload(o(arguments, 1));
            return self.clients.matchAll({
                includeUncontrolled: !0
            }).then(function(t) {
                var i = !1;
                if (t.forEach(function(t) {
                        if (t.id === e) return i = !0, t.postMessage(n)
                    }), !i) return Promise.reject("Could not find service worker client with ID " + e + " to reply to.")
            })
        }
        var u = a(),
            c = {
                on: e("on"),
                once: e("once"),
                off: e("off"),
                broadcast: t,
                emit: l
            };
        return self.addEventListener("message", n), c
    }
    var o = t(20),
        r = t(39),
        a = t(38);
    e.exports = i
}, function(e, n, t) {
    (function(n) {
        var t, i = "function" == typeof n;
        t = i ? function(e) {
            n(e)
        } : function(e) {
            setTimeout(e, 0)
        }, e.exports = t
    }).call(n, t(29).setImmediate)
}, function(e, n) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}]);
//# sourceMappingURL=OneSignalSDK.js.map