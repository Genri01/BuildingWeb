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

export function change_link(link) { 
  return {
    type: ActionTypes.APP_HEADER_ACTIVE_LINK,
    payload: link
  }
}