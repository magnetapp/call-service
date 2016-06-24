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

  // Seccret Key provided by Xirsys for STUN/TURN access
  static XIRSYS_SECRET(): string {
    return process.env.XIRSYS_SECRET || '';
  }

  static FB_PROJECT_ID(): string {
    return process.env.FB_NAME || '';
  }

  static FB_CLIENT_EMAIL(): string {
    return process.env.FB_CLIENT_EMAIL || '';
  }

  static FB_PRIVATE_KEY(): string {
    let key = process.env.FB_PRIVATE_KEY;
    return (key) ? key.replace(/\\n/g, '\n') : '';
  }

  static FB_PRIVATE_KEY_ID(): string {
    return process.env.FB_PRIVATE_KEY_ID || '';
  }

  static FB_CLIENT_ID(): string {
    return process.env.FB_CLIENT_ID || '';
  }

  static FB_CLIENT_CERT_URL(): string {
    return process.env.FB_CLIENT_CERT_URL || '';
  }
}