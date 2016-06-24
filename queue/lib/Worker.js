// Worker.js
// Various Workers to process Tasks
"use strict";
var CallWorker_1 = require('./../workers/CallWorker');
var Worker = (function () {
    function Worker() {
    }
    Worker.callWorker = function (task) {
        return new CallWorker_1.CallWorker(task.data).go();
    };
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=Worker.js.map