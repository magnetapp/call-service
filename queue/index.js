/**
 * Queue
 *
 * Authenticate and create a firebase-queue instance.
 *
 * Note: auth requires that the host machine sets two environment variables:
 *
 * 1.) FB_NAME => a valid Firebase application name
 * 2.) FB_TOKEN => a valid Firebase application Auth Token
 *
 */
"use strict";
var FirebaseService_1 = require('./services/FirebaseService');
var StartQueue_1 = require('./lib/StartQueue');
var Queue = (function () {
    function Queue(url, queuePath) {
        this.url = url;
        this.queuePath = queuePath;
        this.fbs = new FirebaseService_1.FirebaseService();
    }
    Queue.prototype.start = function () {
        var _this = this;
        this.fbs.auth(this.url)
            .then(function ($firebaseInstance) {
            return StartQueue_1.StartQueue($firebaseInstance, _this.queuePath);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=index.js.map