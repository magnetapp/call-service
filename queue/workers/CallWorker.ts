/**
 * CallWorker.ts
 * 
 * Todo
 * 
 */

import { IWorker } from './IWorker'
import { ITask } from './../lib/Task';
import { CallService } from './../services/CallService';

export class CallWorker {
  
  callService: any;

  constructor(data?: any) { 
    this.callService = new CallService();    
  }

  // Let's go!!!!
  go(): Promise<any> {
    return this.callService.setup()
      .then(callInfo => this.callService.make)
      .then((data) => {
        console.log('Yeah?', data);
      })
      .catch(err => {
        console.error(err);
      })
  }
}