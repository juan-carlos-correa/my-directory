import * as firebase from 'firebase';
import config from '../config';

export default class FirebaseDatabase {
  constructor () {
    !firebase.apps.length && firebase.initializeApp(config);
    this.db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    this.db.settings(settings);
  }
}
