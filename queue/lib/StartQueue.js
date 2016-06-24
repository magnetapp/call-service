// Queue.js
// Fetch Tasks from the Queue
"use strict";
var Triage_1 = require('./Triage');
var Queue = require('firebase-queue');
function StartQueue(firebase, queuePath) {
    var $app;
    var queue;
    console.log('Starting the Queue');
    $app = firebase.database().ref(queuePath);
    queue = new Queue($app, Triage_1.Triage.task);
    if (queue) {
        console.log("Queue started, watching for Tasks on " + queuePath);
    }
    // Graceful shutdown
    process.on('SIGINT', function () {
        console.log('Starting queue shutdown');
        queue.shutdown().then(function () {
            console.log('Finished queue shutdown');
            process.exit(0);
        });
    });
}
exports.StartQueue = StartQueue;
//# sourceMappingURL=StartQueue.js.map