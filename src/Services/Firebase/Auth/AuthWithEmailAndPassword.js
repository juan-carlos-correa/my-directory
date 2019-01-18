import FirebaseAuth from './FirebaseAuth';

export default class AuthWithEmailAndPassword extends FirebaseAuth {
  async signup ({ name, email, password }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
    return newUser;
  }

  async login ({ email, password }) {
    await this.auth.signInWithEmailAndPassword(email, password);
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

  getErrorMessageSignin (code) {
    let msg = 'Hubo un error al iniciar sesión';

    if (code === 'auth/invalid-email') {
      msg = 'El email proporcionado es inválido';
    }

    if (code === 'auth/user-disabled') {
      msg = 'El email proporcionado ha sido deshabilitado';
    }

    if (code === 'auth/user-not-found') {
      msg = 'El email proporcionado no fue encontrado';
    }

    if (code === 'auth/wrong-password') {
      msg = 'La contraseña proporcionada es incorrecta';
    }

    return msg;
  }
};
