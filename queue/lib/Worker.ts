// Worker.js
// Various Workers to process Tasks

import { ITask } from './Task';
import { CallWorker } from './../workers/CallWorker';

export class Worker {
  
  constructor() { }
  
  static callWorker(task: ITask): Promise<any> {
    return new CallWorker(task.data).go();
  }
}