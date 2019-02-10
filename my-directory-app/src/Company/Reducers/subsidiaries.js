import { SET_SUBSIDIARIES, SET_SINGLE_SUBSIDIARY, REMOVE_SINGLE_SUBSIDIARY } from '../Actions/types';

const initialState = [];

const subsidiariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBSIDIARIES:
      return action.payload;
    case SET_SINGLE_SUBSIDIARY:
      return [
        ...state,
        action.subsidiary,
      ];
    case REMOVE_SINGLE_SUBSIDIARY:
      return state.filter(subsidiary => subsidiary.uid !== action.uid);
    default:
      return state,
  };
};

export default subsidiariesReducer;
