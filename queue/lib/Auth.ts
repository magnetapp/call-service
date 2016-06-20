var firebase = require('firebase');

export class Auth {

  constructor() { }
  
  static firebase(firebaseUrl: string, pathToKeyFile: string): Promise<any> {
    
    return new Promise(function (resolve, reject) {
      
      console.log('Authenticating to Firebase');

      try {
        // Init firebase app
        let app = firebase.initializeApp({
          serviceAccount: pathToKeyFile,
          databaseURL: firebaseUrl
        });

        if (app) {
          console.log('Succesfully authenticated to ' + firebaseUrl);
          resolve(app);
        } else {
          reject('Cannot auth to Firebase');
        }
      } catch (ex) {
        reject(`Cannot auth to Firebase: ${ex}`);
      }
    });
  }
}
