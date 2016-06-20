// Task.js
// Various Task-related utility methods

import Firebase = require('firebase');

export enum TASK_TYPE {
  CALL
}

export interface ITask {
  type: TASK_TYPE;
  data: Object;
  timestamp: string;
}

export class Task implements ITask {
  
  type: TASK_TYPE;
  data: Object;
  timestamp: string;
  
  constructor(taskType: TASK_TYPE, data: Object) {
    this.type = taskType;
    this.data = data;
    this.timestamp = Firebase.ServerValue.TIMESTAMP;
  }
}
