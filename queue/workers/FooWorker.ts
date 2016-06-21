/**
 * FooWorker.ts
 * 
 * it's nothing
 * 
 */

import { IWorker } from './IWorker'
import { ITask } from './../lib/Task';
import { FirebaseService } from './../services/FirebaseService';

export class FooWorker {
  
  $fb: any;

  constructor(data: any) { 
    // The Firebase Instance
    let fbs = new FirebaseService();
    this.$fb = fbs.get();
  }

  // Let's go!!!!
  go(): Promise<any> {
    return new Promise((resolve, reject) => {
      
      let $db = this.$fb.database()
      let $ref = $db.ref('test');
      
      $ref.set({'foo': 'bar'})
        .then(resolve)
        .catch(reject);
    });
  }
}