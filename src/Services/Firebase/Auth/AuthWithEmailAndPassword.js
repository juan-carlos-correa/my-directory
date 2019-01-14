import FirebaseAuth from './FirebaseAuth';

export default class AuthWithEmailAndPassword extends FirebaseAuth {
  async signin ({ name, email, password }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    return newUser;
  }

  async login ({ email, password }) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
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
