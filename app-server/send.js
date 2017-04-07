/**
 * Created by o.kotov on 06.04.2017.
 */

const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();


const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dJLZyK7iUgc:APA91bGff3hieB2j7qG6n6FqNNItMksZcJBMmRHFmam_McN16TCB_VYfXqpYYetlaxjUcpr1ITn5Ce0TX7pafjMEOwXpuqzTzIA7T1JCWZC8XM5Zvpa4Zd010HWnxzjg9ukdtKAOfeLU',
    keys: {
        p256dh:"BM-gZ58N5XGVbl6AQgJefwJerxjuSnio0s0a_E-w2Wulz75spJ3raGhTva0Qr69EwA88aUCyXvjZROI-b2K_4Hc="
        ,auth:"A_p6BIB6VZ8UUpt-tlZTSA=="
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

