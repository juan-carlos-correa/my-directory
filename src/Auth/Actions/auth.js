import {
  SET_SIGNUP_ERROR_MESSAGE,
  SET_IS_SIGNUP_SUCCESS,
  SET_IS_SIGNUP_ERROR
} from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const signinWithEmailAndPassword = async (dispatch, { name, email, password }) => {
  try {
    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    await authWithEmailAndPassword.signin({ email, password });

    dispatch({ type: SET_IS_SIGNUP_SUCCESS, value: true });
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
  }
};

export default {
  signinWithEmailAndPassword,
}
