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

export function modalFullQuestion(show) { 
  return {
    type: ActionTypes.APP_MODAL_FULL_QUESTION_SHOW,
    payload: show
  }
}

export function modalMiniQuestion(show) { 
  return {
    type: ActionTypes.APP_MODAL_MINI_QUESTION_SHOW,
    payload: show
  }
}

export function modalLogin(show) { 
  return {
    type: ActionTypes.APP_MODAL_LOGIN_SHOW,
    payload: show
  }
}