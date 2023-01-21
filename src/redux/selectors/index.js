 
export const app = {
  mobile: (state) => state.app.mobile
}

export const pages = {
  page:(state) => state.pages.page,
  header_visible:(state) => state.pages.header_visible,
  activeLink:(state) => state.pages.activeLink,
}

export const cart = {
  byer_initial_dead: (state) => state.cart.byer_initial_dead,
  byer_date_birthday: (state) => state.cart.byer_date_birthday,
  byer_date_dead: (state) => state.cart.byer_date_dead,
  byer_file: (state) => state.cart.byer_file,
  byer_file_img: (state) => state.cart.byer_file_img,
  install: (state) => state.cart.install,
  byer_initial: (state) => state.cart.byer_initial,
  byer_tel: (state) => state.cart.byer_tel,
  coment: (state) => state.cart.coment, 
  byer_consult_initial: (state) => state.cart.byer_consult_initial,
  byer_consult_tel: (state) => state.cart.byer_consult_tel,
  coment_consult: (state) => state.cart.coment_consult,
  byer_email: (state) => state.cart.byer_email,
  addres_city: (state) => state.cart.addres_city,
  addres: (state) => state.cart.addres,
  addres_index: (state) => state.cart.addres_index,
  addres_region: (state) => state.cart.addres_region,
  delivery_method: (state) => state.cart.delivery_method,
  pay_method: (state) => state.cart.pay_method,
  insert: (state) => state.cart.insert,
  category: (state) => state.cart.category,
  buy: (state) => state.cart.buy,
  link: (state) => state.cart.link,
  msg_main_popup: (state) => state.cart.msg_main_popup,
  width: (state) => state.cart.width,
  material: (state) => state.cart.material,
  fileName: (state) => state.cart.fileName,
}
 