import {
  SET_SIGNUP_ERROR_MESSAGE,
  SET_IS_SIGNUP_SUCCESS,
  SET_IS_SIGNUP_ERROR,
  SET_SIGNUP_SUCCESS_MESSAGE,
  SET_IS_LOADING,
  RESET_SIGNUP_VALUES,
} from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const signupWithEmailAndPassword = async (dispatch, { name, email, password }) => {
  const authWithEmailAndPassword = new AuthWithEmailAndPassword();
  const userFirebase = new UserFirebase();
  dispatch({ type: SET_IS_LOADING, value: true });

  try {
    const dataStored = await authWithEmailAndPassword.signup({ email, password });

    const { uid: userId } = dataStored.user;

    await userFirebase.writeUserData({ userId, name, email, isAdmin: true });

    await authWithEmailAndPassword.sendEmailVerificationToCurrentUser();

    const msg = `Se ha enviado un correo de verificación a ${email}`;

    dispatch({ type: SET_IS_SIGNUP_SUCCESS, value: true });
    dispatch({ type: SET_SIGNUP_SUCCESS_MESSAGE, value: msg });
  } catch ({ code, message }) {
    const msg = authWithEmailAndPassword.getErrorMessageSignup(code);
    dispatch({ type: SET_IS_SIGNUP_ERROR, value: true });
    dispatch({ type: SET_SIGNUP_ERROR_MESSAGE, value: msg });
  } finally {
    dispatch({ type: SET_IS_LOADING, value: false });
    setTimeout(() => dispatch({ type: RESET_SIGNUP_VALUES }), 6000);
  }
};

export default {
  signupWithEmailAndPassword,
}
