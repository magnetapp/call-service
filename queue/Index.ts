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

import { FirebaseService } from './services/FirebaseService';
import { StartQueue } from './lib/StartQueue';

export class Queue {
  
  private url: string;
  private queuePath: string;
  private fbs: any;

  constructor(url: string, queuePath: string) {
    this.url = url;
    this.queuePath = queuePath;
    this.fbs = new FirebaseService();
  }
  
  start() {
    this.fbs.auth(this.url)
      .then(($firebaseInstance: any) => {
        return StartQueue($firebaseInstance, this.queuePath)
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
