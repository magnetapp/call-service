// Worker.js
// Various Workers to process Tasks

import { ITask } from './Task';
import { FooWorker } from './../workers/FooWorker';

export class Worker {
  
  constructor() { }
  
  static fooWorker(task: ITask): Promise<any> {
    return new FooWorker(task.data).go();
  }
}