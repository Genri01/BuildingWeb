import ActionTypes from '../constants';
 
export function setMobileMod(mode) {
  return {
    type: ActionTypes.APP_MOBILE,
    payload: mode
  }
}

export function change_page(page) { 
  return {
    type: ActionTypes.APP_PAGES_SCREEN,
    payload: page
  }
}