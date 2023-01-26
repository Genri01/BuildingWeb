import ActionTypes from '../constants';

const initialState = {
  mobile: false,
  app_modal_question_full_show: false,
  app_modal_question_mini_show: false,  
};
 
export default function app(state = initialState, { type, payload }) {
 
  switch (type) {
    case ActionTypes.APP_MOBILE:
      return {
        ...state,
        mobile: payload
      }; 
    case ActionTypes.APP_MODAL_FULL_QUESTION_SHOW:
      return {
        ...state,
        app_modal_question_full_show: payload
      }; 
    case ActionTypes.APP_MODAL_MINI_QUESTION_SHOW:
      return {
        ...state,
        app_modal_question_mini_show: payload
      }; 
    default:
      return state;
  }
}