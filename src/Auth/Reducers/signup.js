import { SET_SIGNUP_ERROR, SET_IS_SIGNUP_SUCCESS } from '../Actions/types';

const initialState = {
  isSignupSuccess: false,
  signupError: {},
}

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: action.value,
      };
    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
