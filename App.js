/**
 * App.ts
 *
 * Let's start-up some junk.
 *
 */
"use strict";
var queue_1 = require('./queue');
var config_1 = require('./config');
// Start the Queue
var queue = new queue_1.Queue(config_1.Config.FB_URL(), config_1.Config.FB_QUEUEPATH());
queue.start();
//# sourceMappingURL=App.js.map