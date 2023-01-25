import ActionTypes from '../constants';

const initialState = {
  tab: 0,
};

export default function header(state = initialState, { type, payload }) {
 
  switch (type) {
    case ActionTypes.HEADER_TAB:
      return {
        ...state,
        tab: payload
      }; 
    default:
      return state;
  }
}