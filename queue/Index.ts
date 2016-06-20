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

import {Auth}   from './lib/Auth';
import {StartQueue} from './lib/StartQueue';

export class Queue {
  
  private url: string;
  private queuePath: string;
  private pathToKeyFile: string;
  
  constructor(url: string, queuePath: string, pathToKeyFile: string) {
    this.url = url;
    this.queuePath = queuePath;
    this.pathToKeyFile = pathToKeyFile;
  }
  
  start() {
    Auth.firebase(this.url, this.pathToKeyFile).then(($firebaseInstance: any) => StartQueue($firebaseInstance, this.queuePath))
      .catch((error: any) => {
        console.error(error);
      });
  }
}
