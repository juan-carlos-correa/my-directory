import FirebaseAuth from './FirebaseAuth';

export default class AuthWithEmailAndPassword extends FirebaseAuth {
  constructor () {
    super();
  }

  async signin ({ name, email, password }) {
    try {
      const newUser = await this.auth().createUserWithEmailAndPassword(email, password);
      await newUser.updateProfile({ displayName: name });
      return true;
    } catch (e) {
      const { code, message } = e;
      return { code, message };
    }
  }

  async login ({ email, password }) {
    try {
      await this.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (e) {
      const { code, message } = e;
      return { code, message };
    }
  }

  observeAuth () {
    return this.auth().onAuthStateChanged;
  }

  signOut () {
    this.auth.signOut();
  }
};
