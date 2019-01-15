import FirebaseAuth from './FirebaseAuth';

export default class AuthWithEmailAndPassword extends FirebaseAuth {
  async signup ({ name, email, password }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    return newUser;
  }

  async login ({ email, password }) {
    await this.auth.signInWithEmailAndPassword(email, password);
  }

  async sendEmailVerificationToCurrentUser () {
    try {
      return this.auth
        .currentUser
        .sendEmailVerification();
    } catch (e) {
      console.log('error sendEmailVerification', e)
    }
  }
};
