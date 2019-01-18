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

  getErrorMessageSignup (code) {
    let msg = 'Hubo un error al crear la cuenta';

    if (code === 'auth/invalid-email') {
      msg = 'El email proporcionado es inválido';
    }

    if (code === 'auth/email-already-in-use') {
      msg = 'El email ya se encuentra registrado por otra cuenta';
    }

    if (code === 'auth/operation-not-allowed') {
      msg = 'Esta operación no está permitida';
    }

    if (code === 'auth/weak-password') {
      msg = 'La contraseña proporcionada no es suficientemente fuerte';
    }

    return msg;
  }
};
