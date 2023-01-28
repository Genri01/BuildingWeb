 
export const app = {
  mobile: (state) => state.app.mobile,
  app_modal_question_full_show: (state) => state.app.app_modal_question_full_show,
  app_modal_question_mini_show: (state) => state.app.app_modal_question_mini_show,
  app_modal_login_show: (state) => state.app.app_modal_login_show 
}

export const pages = {
  page:(state) => state.pages.page, 
  activeLink:(state) => state.pages.activeLink,
}
 
export const questions = {
  byer_first_name: (state) => state.questions.byer_first_name,
  byer_last_name: (state) => state.questions.byer_last_name,
  byer_tel: (state) => state.questions.byer_tel,
  byer_email: (state) => state.questions.byer_email,
  coment: (state) => state.questions.coment,
  addres_street: (state) => state.questions.addres_street,
  addres_city: (state) => state.questions.addres_city,
  addres_index: (state) => state.questions.addres_index  
}
 