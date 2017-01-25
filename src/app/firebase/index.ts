import { AngularFireModule, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyDcClaxOo9R3K1pbq-0k_Xh_ZrXFSv8gbA',
  authDomain: 'znow.firebaseapp.com',
  databaseURL: 'https://znow.firebaseio.com',
  storageBucket: 'znow.appspot.com',
  messagingSenderId: ''
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
