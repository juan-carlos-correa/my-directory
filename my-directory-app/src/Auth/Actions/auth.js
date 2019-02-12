import { SET_USER_DATA, REMOVE_USER_DATA } from './types';
import { SET_IS_LOADING_FETCH, SET_ERROR_MSG, SET_RESET_FETCH } from '../../Utils/Actions/fetch/types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

const isLoading = (value) => ({
  type: SET_IS_LOADING_FETCH,
  value,
})

export const setUserData = async (dispatch, userUid) => {
  try {
    const userFirebase = new UserFirebase();
    const user = await userFirebase.getUserData(userUid);
    const payload = { ...user.data(), uid: userUid, emailVerified: true };
    console.log(payload)
    if (user.exists) {
      dispatch({ type: SET_USER_DATA, payload });
    }
  } catch (e) {
    console.log('setUserData error', e);
  }
};

export const removeUserDataAction = (dispatch) => {
  try {
    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    authWithEmailAndPassword.signOut();
    dispatch({ type: REMOVE_USER_DATA });
  } catch (e) {
    console.log(e);
  }
}

export const verifyAuth = () => (dispatch) => {
  dispatch(isLoading(true));

  const authWithEmailAndPassword = new AuthWithEmailAndPassword();

  authWithEmailAndPassword.getAuth().onAuthStateChanged(async (user) => {
    if (user && user.emailVerified) {
      const { uid } = user;
      await setUserData(dispatch, uid);
    } else if (user && !user.emailVerified) {
      dispatch({ type: SET_ERROR_MSG, value: 'Necesitas validar tu correo' });
      dispatch({ type: SET_USER_DATA, payload: { emailVerified: false, email: user.email } });
      setTimeout(() => dispatch({ type: SET_RESET_FETCH }), 6000);
    } else {
      dispatch({ type: REMOVE_USER_DATA });
    }

    dispatch(isLoading(false));
  })
}

export default {
  setUserData,
  removeUserDataAction,
  verifyAuth,
};
