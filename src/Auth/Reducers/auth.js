import { SET_USER_DATA, SET_SIGNIN_ERROR, SET_IS_SIGNIN_SUCCESS } from '../Actions/types';

const initialState = {
  user: {},
  isSigninSuccess: false,
  signinError: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case SET_IS_SIGNIN_SUCCESS:
      return {
        ...state,
        isSigninSuccess: action.value,
      };
    case SET_SIGNIN_ERROR:
      return {
        ...state,
        signinError: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
