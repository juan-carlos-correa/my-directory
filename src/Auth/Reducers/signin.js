import {
  SET_IS_SIGNIN_SUCCESS,
  SET_IS_SIGNIN_ERROR,
  SET_SIGNIN_ERROR_MESSAGE,
  SET_SIGNIN_SUCCESS_MESSAGE,
  SET_IS_SIGNIN_LOADING,
  RESET_SIGNIN_VALUES,
} from '../Actions/types';

const initialState = {
  isSigninError: false,
  isSigninSuccess: false,
  signinErrorMessage: '',
  signinSuccessMessage: '',
  isSigninLoading: false,
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_SIGNIN_SUCCESS:
      return {
        ...state,
        isSigninSuccess: action.value,
      };
    case SET_IS_SIGNIN_ERROR:
      return {
        ...state,
        isSigninError: action.value,
      };
    case SET_SIGNIN_ERROR_MESSAGE:
      return {
        ...state,
        signinErrorMessage: action.value,
      };
      case SET_SIGNIN_SUCCESS_MESSAGE:
        return {
          ...state,
          signinSuccessMessage: action.value,
        };
      case SET_IS_SIGNIN_LOADING:
        return {
          ...state,
          isSigninLoading: action.value,
        };
      case RESET_SIGNIN_VALUES:
        return {
          ...state,
          isSigninError: false,
          isSigninSuccess: false,
          signinErrorMessage: '',
          signinSuccessMessage: ''
        };
    default:
      return state;
  }
};

export default signinReducer;
