// Triage.js
// A Worker factory
"use strict";
var Task_1 = require('./Task');
var Worker_1 = require('./Worker');
var Triage = (function () {
    function Triage() {
    }
    Triage.task = function (task, progress, resolveTask, rejectTask) {
        console.log("Task recieved (" + task.type + ")");
        function getWorker(taskType) {
            if (taskType === Task_1.TASK_TYPE.CALL) {
                console.log('Creating a Worker: Call');
                return Worker_1.Worker.callWorker;
            }
            else {
                throw new Error("Task " + taskType + " does not exist.");
            }
        }
        // Get a Worker from the getWorker factory function above
        var fn = getWorker(task.type);
        // Execute the Worker
        return fn(task)
            .then(function () {
            resolveTask();
        })
            .catch(function (error) {
            rejectTask(error);
        });
    };
    return Triage;
}());
exports.Triage = Triage;
//# sourceMappingURL=Triage.js.map