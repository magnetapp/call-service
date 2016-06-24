/**
 * CallWorker.ts
 *
 * Todo
 *
 */
"use strict";
var CallService_1 = require('./../services/CallService');
var CallWorker = (function () {
    function CallWorker(data) {
        this.callService = new CallService_1.CallService();
    }
    // Let's go!!!!
    CallWorker.prototype.go = function () {
        var _this = this;
        return this.callService.setup()
            .then(function (callInfo) { return _this.callService.make(callInfo); })
            .catch(function (err) {
            console.error(err);
        });
    };
    return CallWorker;
}());
exports.CallWorker = CallWorker;
//# sourceMappingURL=CallWorker.js.map