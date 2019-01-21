import { SET_USER_DATA, REMOVE_USER_DATA } from '../Actions/types';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_USER_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
