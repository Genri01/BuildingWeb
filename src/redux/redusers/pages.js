import ActionTypes from '../constants';

const initialState = {
  page: '/', 
  activeLink: "https://static.videezy.com/system/resources/previews/000/041/086/original/031_07.mp4"
};

export default function pages(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.APP_PAGES_SCREEN:
      return {
        ...state,
        page: payload,
      }; 
    case ActionTypes.APP_HEADER_ACTIVE_LINK:
      return {
        ...state,
        activeLink: payload,
      };
    default:
      return state;
  }
}