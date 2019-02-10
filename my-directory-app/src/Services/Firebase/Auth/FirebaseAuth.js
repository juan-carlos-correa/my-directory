import * as firebase from 'firebase';
import config from '../config';

export default class FirebaseAuth {
  constructor () {
    !firebase.apps.length && firebase.initializeApp(config);

    this.auth = firebase.auth;
  }

  getAuth () {
    return this.auth();
  }

  async sendEmailVerificationToCurrentUser () {
    try {
      return this.auth()
        .currentUser
        .sendEmailVerification();
    } catch (e) {
      console.log('error sendEmailVerification', e);
    }
  }

  signOut () {
    this.auth().signOut();
  }
};
