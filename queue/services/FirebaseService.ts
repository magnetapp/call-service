/*
 * FirebaseService.ts
 * 
 */

import { Config } from './../../config';

const firebase = require('firebase');

let $firebaseApp = null;

export class FirebaseService {

  constructor() { }
  
  auth(firebaseUrl: string): Promise<any> {
    
    return new Promise((resolve, reject) => {
      
      console.log('Authenticating to Firebase');
      
      const configuration = {
        serviceAccount: {
          "type": "service_account",
          "project_id": Config.FB_PROJECT_ID(),
          "private_key_id": Config.FB_PRIVATE_KEY_ID(),
          "private_key": `-----BEGIN PRIVATE KEY-----\n${Config.FB_PRIVATE_KEY()}\n-----END PRIVATE KEY-----\n`,
          "client_email": Config.FB_CLIENT_EMAIL(),
          "client_id": Config.FB_CLIENT_ID(),
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://accounts.google.com/o/oauth2/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": Config.FB_CLIENT_CERT_URL()
        },
        databaseURL: firebaseUrl
      };

      // Init firebase app
      $firebaseApp = firebase.initializeApp(configuration);

      if ($firebaseApp) {
        console.log('Succesfully authenticated to ' + firebaseUrl);
        resolve($firebaseApp);
      } else {
        reject('Cannot auth to Firebase');
      }
    });
  }

  get(): any {
    if ($firebaseApp) {
      return $firebaseApp;
    } else {
      throw new Error('Firebase app not found.');
    }
  }
}


// import Firebase = require('firebase');
// import {Config} from './../../config';

// export interface IFirebaseService {
//   create(path: string, data: Object): Promise<Object>;
//   createAt(path: string, data: Object): Promise<Object>;
//   read(path: string): Promise<Object>;
//   update(path: string, data: Object): Promise<Object>;
//   delete(path: string, data: Object): void;
// }

// export class FirebaseService implements IFirebaseService {
  
//   private firebase: any;
  
//   constructor(_firebaseUrl?: string) {
//     if (!this.firebase) {
//       var firebaseUrl = _firebaseUrl || Config.FB_URL();
//       this.firebase = new Firebase(firebaseUrl);
//     }  
//   }
  
//   private waitForResponse($ref: any): Promise<Object> {
//     return new Promise((resolve, reject) => {
//       $ref.once('child_added', ($snap) => {
//         resolve({key: $snap.key(), value: $snap.val()});
//       }, reject);
//     });
//   }
  
//   create(path: string, data: Object): Promise<Object> {
//     var $ref = this.firebase.child(path);
//     $ref.push(data);
//     return this.waitForResponse($ref);
//   }
  
//   createAt(path: string, data: Object): Promise<Object> {
//     var $ref = this.firebase.child(path);
//     $ref.set(data);
//     return this.waitForResponse($ref);
//   }
  
//   read(path: string):Promise<Object> {
//     return this.waitForResponse(this.firebase.child(path));
//   }
  
//   update(path: string, data: Object): Promise<Object> {
//     var $ref = this.firebase.child(path);
//     $ref.update(data);
//     return this.waitForResponse($ref);
//   }
  
//   delete(path: string, data: Object): void {
//     this.firebase.child(path).remove();
//   }
// }