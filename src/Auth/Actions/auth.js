import { SET_USER_DATA, REMOVE_USER_DATA } from './types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const setUserData = async (dispatch, userUid) => {
  try {
    const userFirebase = new UserFirebase();
    const user = await userFirebase.getUserData(userUid);
    const payload = { ...user.data(), uid: userUid };

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

export default {
  setUserData,
  removeUserDataAction,
};
