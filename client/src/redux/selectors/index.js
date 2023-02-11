 
export const app = {
  mobile: (state) => state.app.mobile,
  app_modal_question_full_show: (state) => state.app.app_modal_question_full_show,
  app_modal_question_mini_show: (state) => state.app.app_modal_question_mini_show,
  app_modal_login_show: (state) => state.app.app_modal_login_show, 
  app_modal_register_show: (state) => state.app.app_modal_register_show 
}

export const pages = {
  page:(state) => state.pages.page,  
  pagesArr:(state) => state.pages.pagesArr,  
}
 
export const questions = {
  byer_first_name: (state) => state.questions.byer_first_name,
  byer_last_name: (state) => state.questions.byer_last_name,
  byer_tel: (state) => state.questions.byer_tel,
  byer_email: (state) => state.questions.byer_email,
  coment: (state) => state.questions.coment,
  addres_street: (state) => state.questions.addres_street,
  addres_city: (state) => state.questions.addres_city,
  addres_index: (state) => state.questions.addres_index,
  referal_first_name: (state) => state.questions.referal_first_name,
  referal_tel: (state) => state.questions.referal_tel,
  referal_email: (state) => state.questions.referal_email,
  referal_coment: (state) => state.questions.referal_coment,
  referal_addres_city: (state) => state.questions.referal_addres_city,
  type_project: (state) => state.questions.type_project,
  materials: (state) => state.questions.materials,
  owner: (state) => state.questions.owner,
  financing: (state) => state.questions.financing,
  status: (state) => state.questions.status,
  callback: (state) => state.questions.callback,
  getcontact: (state) => state.questions.getcontact  

}
 