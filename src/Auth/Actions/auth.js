import {
  SET_SIGNUP_ERROR_MESSAGE,
  SET_IS_SIGNUP_SUCCESS,
  SET_IS_SIGNUP_ERROR,
  SET_SIGNUP_SUCCESS_MESSAGE,
  SET_IS_LOADING,
  RESET_SIGNUP_VALUES,
  SET_IS_SIGNIN_ERROR,
  SET_SIGNIN_ERROR_MESSAGE,
  SET_IS_SIGNIN_LOADING,
  RESET_SIGNIN_VALUES,
} from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const signupWithEmailAndPassword = async (dispatch, { name, email, password }) => {
  try {
    dispatch({ type: SET_IS_LOADING, value: true });

    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    const userFirebase = new UserFirebase();

    const dataStored = await authWithEmailAndPassword.signup({ email, password });

    const { uid: userId } = dataStored.user;

    await userFirebase.writeUserData({ userId, name });

    await authWithEmailAndPassword.sendEmailVerificationToCurrentUser();

    const msg = `Se ha enviado un correo de verificación a ${email}`;

    dispatch({ type: SET_IS_SIGNUP_SUCCESS, value: true });
    dispatch({ type: SET_SIGNUP_SUCCESS_MESSAGE, value: msg });
  } catch ({ code, message }) {
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

    dispatch({ type: SET_IS_SIGNUP_ERROR, value: true });
    dispatch({ type: SET_SIGNUP_ERROR_MESSAGE, value: msg });
  } finally {
    dispatch({ type: SET_IS_LOADING, value: false });
    setTimeout(() => dispatch({ type: RESET_SIGNUP_VALUES }), 6000);
  }
};

export const signinWithEmailAndPassword = async (dispatch, { email, password }) => {
  try {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: true });

    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    await authWithEmailAndPassword.login({ email, password });
  } catch ({ code, message }) {
    dispatch({ type: SET_IS_SIGNIN_ERROR, value: true });
    dispatch({ type: SET_SIGNIN_ERROR_MESSAGE, value: message });
  } finally {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: false });
    dispatch({ type: RESET_SIGNIN_VALUES, value: false });
  }
}

export default {
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
}
