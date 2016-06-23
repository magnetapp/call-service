// Triage.js
// A Worker factory

import { Task, ITask, TASK_TYPE } from './Task';
import { Worker } from './Worker';

export class Triage {
  
  constructor() { }

  static task(task: ITask, progress: any, resolveTask: Function, rejectTask: Function) {
    
    console.log(`Task recieved (${task.type})`);   
    
    function getWorker(taskType: TASK_TYPE) {
      if (taskType === TASK_TYPE.CALL) {
        console.log('Creating a Worker: Call');
        return Worker.callWorker;
      } else {
        throw new Error(`Task ${taskType} does not exist.`)
      }
    }
    
    // Get a Worker from the getWorker factory function above
    var fn = getWorker(task.type);
    
    // Execute the Worker
    return fn(task)
      .then(() => {
        resolveTask();
      })
      .catch((error) => { 
        rejectTask(error);
      });
  }
}
