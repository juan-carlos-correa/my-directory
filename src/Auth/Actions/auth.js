import { SET_USER_DATA, SET_IS_SIGNIN_ERROR, SET_SIGNIN_ERROR_MESSAGE } from './types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const setUserData = async (dispatch, userUid) => {
  try {
    const userFirebase = new UserFirebase();
    const user = await userFirebase.getUserData(userUid);

    if (user.exists) {
      dispatch({ type: SET_USER_DATA, payload: user.data() });
    }
  } catch (e) {
    console.log('setUserData error', e);
  }
};

export default {
  setUserData,
};
