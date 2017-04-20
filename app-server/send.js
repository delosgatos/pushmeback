/**
 * Created by o.kotov on 06.04.2017.
 */

const webpush = require('web-push');
const firebase = require("firebase");
var config = {
    apiKey: "AIzaSyC2rxJbo_r9xkusnVQZ0vBXqpNhAQmWdHM",
    authDomain: "pushmeback-store.firebaseapp.com",
    databaseURL: "https://pushmeback-store.firebaseio.com",
    storageBucket: "pushmeback-store.appspot.com",
    messagingSenderId: "168046315561"
};
firebase.initializeApp(config);
// const loki = require('lokijs');
/*
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(err) {
        console.error(err);
        return;
    }
    console.log("We are connected");
});
*/
/*var keys, db = new loki('keys.json');
if(!(keys = db.getCollection('keys'))) {
    keys = db.addCollection('keys', { unique: ["publicKey"] });
}*/

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('AIzaSyCl_d383cZi7b2kGZtl944tClFOsphCMYQ');
/*webpush.setVapidDetails(
    'mailto:delosgatos@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);*/
webpush.setVapidDetails(
    'http://clickscloud.ru',
    'BLdDVFnwfXx8TIO83AZwcSzlymY5qHO4CyjqrhUbL_zzROPBxFysTds2rRZcf4v7lebEkR7WvWzyp9PY_p6m1jo',
    '07rNX436pEhQcwT70seLGgexb5_GfgqABZ4aDApTWWs'
);

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
    TTL: 9000000,
    /*gcmAPIKey: 'AIzaSyCl_d383cZi7b2kGZtl944tClFOsphCMYQ',
    vapidDetails: {
        subject: 'http://clickscloud.ru',
        publicKey: 'BLdDVFnwfXx8TIO83AZwcSzlymY5qHO4CyjqrhUbL_zzROPBxFysTds2rRZcf4v7lebEkR7WvWzyp9PY_p6m1jo',
        privateKey: '07rNX436pEhQcwT70seLGgexb5_GfgqABZ4aDApTWWs'
    },*/
    /*headers: {
        '< header name >': '< header value >'
    }*/
};

var sendPush = function(subscription) {
    try {
        var z = webpush.sendNotification(
            subscription,
            payload,
            options
        ).then(function (e) {
            console.log("============== S U C C E S S =============")
            console.log(e);
        }).catch(function (reason) {
            console.log("============== E R R O R =============")
            console.log(reason);
        });
    } catch (err) {
        console.error(err);
    }
};


firebase.database().ref('push').once('value', function(snapshot) {
    snapshot.forEach(function(child) {
        sendPush(child.val());
    });
});
