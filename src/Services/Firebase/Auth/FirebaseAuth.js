import * as firebase from 'firebase';
import config from '../config';

export default class FirebaseAuth {
  constructor () {
    !firebase.apps.length && firebase.initializeApp(config);

    this.auth = firebase.auth();
  }

  getAuth () {
    return this.auth;
  }

  observeAuth () {
    return this.auth().onAuthStateChanged;
  }

  signOut () {
    this.auth.signOut();
  }
};
