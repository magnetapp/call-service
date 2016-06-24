/**
 * App.ts
 * 
 * Let's start-up some junk.
 * 
 */

import { Queue } from './queue';
import { Config } from './config';

// Start the Queue
var queue = new Queue(Config.FB_URL(),  Config.FB_QUEUEPATH());
queue.start();