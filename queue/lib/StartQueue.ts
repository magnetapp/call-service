// Queue.js
// Fetch Tasks from the Queue

import { Triage } from './Triage';

const Queue = require('firebase-queue');

export function StartQueue(firebase: any, queuePath: string) {
  
  let $app;
  let queue;
  
  console.log('Starting the Queue');

  $app = firebase.database().ref(queuePath);
  queue = new Queue($app, Triage.task);

  if (queue) {
    console.log(`Queue started, watching for Tasks on ${queuePath}`);
  }

  // Graceful shutdown
  process.on('SIGINT',() => {
    
    console.log('Starting queue shutdown');
    
    queue.shutdown().then(() => {
      console.log('Finished queue shutdown');
      process.exit(0);
    });
  });
}

