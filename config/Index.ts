/**
 * Config
 * 
 * This is the application-wide Configuration class. For simplicity, always use
 * static methods to return any config value;
 * 
 */

export class Config  {

  constructor() { }
  
  // Build a Firebase URL based on the configured FB_NAME environment variable
  static FB_URL(): string {
    if (process.env.FB_NAME) {
      return `https://${process.env.FB_NAME}.firebaseio.com`;
    } else {
      throw new Error('Cannot get Firebase URL. The environment variable \'FB_NAME\' is not set.');
    }
  }
  
  // Your secret Firebase token
  static FB_TOKEN(): string {
    return process.env.FB_TOKEN || '';
  }

  // Path to the secret key file provided by Firebase
  static FB_KEY_PATH(): string {
    return process.env.FB_KEY_PATH || '';
  }
  
  // The worker queue uses this path to pick up Tasks. 
  // e.g. https://appname.firebaseio.com/path/to/queue/tasks
  static FB_TASKPATH(): string {
    return `${this.FB_QUEUEPATH}/tasks`;
  }
  
  // Where to add a new Task.
  // e.g. https://appname.firebaseio.com/path/to/queue
  static FB_QUEUEPATH(): string {
    return '/queue';
  }

  static XIRSYS_SECRET(): string {
    return process.env.XIRSYS_SECRET || '';
  }
}