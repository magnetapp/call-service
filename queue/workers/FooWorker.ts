/**
 * FooWorker.ts
 * 
 * it's nothing
 * 
 */

import { IWorker } from './IWorker'
import { ITask } from './../lib/Task';
import { IFirebaseService, FirebaseService } from './../services/FirebaseService';

export class FooWorker {
  
  // firebase: IFirebaseService;

  constructor(data: any) { 
    // The Firebase Instance
    // this.firebase = new FirebaseService();
  }

  // Let's go!!!!
  go(): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }
}