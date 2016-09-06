import { AngularFireModule, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'HgiChLckragcAXVrJw36fBpedYCuNrkn3U9CqbhS',
  authDomain: 'znow.firebaseapp.com',
  databaseURL: 'https://znow.firebaseio.com',
  storageBucket: 'znow.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
