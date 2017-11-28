export namespace AuthConfig {
  //Auth Configuration.
  //Set to your Firebase app, you can find your credentials on Firebase app console -> Add Web App.
  export const firebaseConfig = {
    apiKey: "AIzaSyB32XthgrQAgqEJQaPL2ORLh1wX6bF3F14",
    authDomain: "pubparty-6d4de.firebaseapp.com",
    databaseURL: "https://pubparty-6d4de.firebaseio.com",
    projectId: "pubparty-6d4de",
    storageBucket: "pubparty-6d4de.appspot.com",
    messagingSenderId: "691061870789"
  };
  //You can find your googleWebClientId on your Firebase app console -> Authentication -> Sign-in Method -> Google -> Web client ID
  export const googleWebClientId: string = '691061870789-j9oo7o010irp0ao7v66pr0e001k85ogn.apps.googleusercontent.com';
  //Set to true if you want to enable email verifications.
  export const emailVerification: boolean = false;
}
