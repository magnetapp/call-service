/**
 * CallService.ts
 * 
 * A service to make calls
 */

import { Config } from './../../config';
import { XirsysModel } from './../../models/Xirsys';
import { FirebaseService } from './FirebaseService';
import https = require('https');

// Methods?
// ...
// setup
// make

export class CallService {

  $fb: any;
  callerId: string;
  calleeId: string;

  constructor(callerId?: string, calleeId?: string) { 
    let fbs = new FirebaseService();
    this.$fb = fbs.get();
    this.callerId = callerId;
    this.calleeId = calleeId;
  }


  // Set-up a call between two parties by fetching the necessary data from our STUN/TURN server
  setup(): Promise<any> {
    
    let requestData = new XirsysModel({
      secret: Config.XIRSYS_SECRET(),
      secure: 1
    });

    let requestDataStr = JSON.stringify(requestData);

    let options = {
      hostname: 'service.xirsys.com',
      path: '/ice',
      method: 'POST',
      headers: {
        'Content-Length': Buffer.byteLength(requestDataStr)
      }
    };
    
    return new Promise((resolve, reject) => {
      
      let response = '';

      let req = https.request(options, (res) => {
        
        // As the repsonse streams-in, add it chunk-by-chunk
        res.on('data', (chunk: string) => {
          response += chunk;
        });

        // When the responsee finishes, return the parsed object
        res.on('end', () => resolve(JSON.parse(response)));
      });

      // Write the request data
      req.write(requestDataStr);

      // End the request
      req.end();

      // If there is an error
      req.on('error', e => {
        console.error(e);
        reject(e)
      });
    });
  }

  // Create a call 
  make(callData: any): Promise<any> {
    
    console.log('Data from Xirsys:', callData);

    return new Promise((resolve, reject) => {
      let $db = this.$fb.database()
      let $ref = $db.ref('calls/test');
      return $ref.set(callData).then(resolve).catch(reject);
    });
  }
}
