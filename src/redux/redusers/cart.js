import ActionTypes from '../constants';

const initialState = {
  byer_initial_dead: '',
  byer_date_birthday: '',
  byer_date_dead: '',
  byer_file: [],
  byer_file_img: [],
  install: false,
  byer_initial: '',
  byer_tel: '',
  coment: '',
  byer_consult_initial: '',
  byer_consult_tel: '',
  coment_consult: '',
  byer_email: '',
  addres_region: '',
  addres_city: '',
  addres: '',
  addres_index: '',
  delivery_method: '',
  pay_method: '',
  insert: {},
  category: 'all',
  buy: [],
  link: '/',
  msg_main_popup:'',
  width: 0,
  material: 0,
  fileName:{}
};

export default function cart(state = initialState, { type, payload }) { 
 
  switch (type) {
    case ActionTypes.CART_BYER_INITIAL_DEAD:
      return {
        ...state,
        byer_initial_dead: payload
      }; 
    case ActionTypes.CART_BYER_DATE_BERTHDAY:
      return {
        ...state,
        byer_date_birthday: payload
      }; 
    case ActionTypes.CART_BYER_DATE_DEAD:
      return {
        ...state,
        byer_date_dead: payload
      }; 
    case ActionTypes.CART_BYER_FILE:
      return {
        ...state,
        byer_file: payload
      }; 

    case ActionTypes.CART_BYER_DEL_FILE:
      let tempArrFiles = state.byer_file;
      let clearArr = tempArrFiles.filter((item) => (item.file.name !== payload))

      return {
        ...state,
        byer_file: clearArr
      }; 
    case ActionTypes.CART_BYER_FILE_IMG:
      return {
        ...state,
        byer_file_img: payload
      }; 
 
    case ActionTypes.CART_INSTALL:
      return {
        ...state,
        install: payload
      }; 
    case ActionTypes.CART_BYER_INITIAL:
      return {
        ...state,
        byer_initial: payload
      }; 
    case ActionTypes.CART_BYER_TEL:
      return {
        ...state,
        byer_tel: payload
      }; 
    case ActionTypes.CART_COMENT:
      return {
        ...state,
        coment: payload
      }; 
    case ActionTypes.CART_CONSULT_BYER_INITIAL:
      return {
        ...state,
        byer_consult_initial: payload
      }; 
    case ActionTypes.CART_CONSULT_BYER_TEL:
      return {
        ...state,
        byer_consult_tel: payload
      }; 
    case ActionTypes.CART_CONSULT_COMENT:
      return {
        ...state,
        coment_consult: payload
      }; 
    case ActionTypes.CART_BYER_EMAIL:
      return {
        ...state,
        byer_email: payload
      }; 
    case ActionTypes.CART_ADDRES_REGION:
      return {
        ...state,
        addres_region: payload
      }; 
    case ActionTypes.CART_ADDRES_CITY:
      return {
        ...state,
        addres_city: payload
      }; 
    case ActionTypes.CART_ADDRES:
      return {
        ...state,
        addres: payload
      }; 
    case ActionTypes.CART_ADDRES_INDEX:
      return {
        ...state,
        addres_index: payload
      }; 
    case ActionTypes.CART_DELIVERY_METHOD:
      return {
        ...state,
        delivery_method: payload
      }; 
    case ActionTypes.CART_PAY_METHOD:
      return {
        ...state,
        pay_method: payload
      }; 
    case ActionTypes.CART_INSERT:
      return {
        ...state,
        insert: payload
      }; 
    case ActionTypes.CATALOG_CATEGORY:
      return {
        ...state,
        category: payload
      }; 
    case ActionTypes.CATALOG_BUY:
      let tempbuy = state.buy
      tempbuy.push(payload); 
      return {
        ...state,
        buy: tempbuy
      }; 
    case ActionTypes.CATALOG_BUYDEL:
      let buy1 = state.buy; 
      let tempsbuy = buy1.filter((item) => (item.id !== payload))
  
      return {
        ...state,
        buy: tempsbuy
      }; 
      
    case ActionTypes.CATALOG_INCRIMENTBUY:
      let buy2 = state.buy; 
      buy2.forEach(item => {
        if(item.id === payload.id) {
          item.count = payload.count;
        }
      });
      return {
        ...state,
        buy: [...buy2]
      }; 
    case ActionTypes.CATALOG_DECRIMENTBUY:
      let buy3 = state.buy; 
      buy3.forEach(item => {
        if(item.id === payload.id) {
          if(item.count <= 1) {
            item.count = 1;
          } else {
            item.count = payload.count;
          }
        }
      });
      return {
        ...state,
        buy: [...buy3]
      }; 
    case ActionTypes.CATALOG_BUYCLEAR:
      return {
        ...state,
        buy: []
      }; 
    case ActionTypes.CATALOG_LINKPAGE:
      return {
        ...state,
        link: payload
      }; 
    case ActionTypes.CART_POPUP_MAIN:
      return {
        ...state,
        msg_main_popup: payload
      }; 
    case ActionTypes.CATALOG_MATERIALMONUMENT:
      return {
        ...state,
        material: payload
      }; 
    case ActionTypes.CATALOG_WIDTHMONUMENT:
      return {
        ...state,
        width: payload
      }; 
    case ActionTypes.CATALOG_FILENAME:
      return {
        ...state,
        fileName: payload
      }; 
    default:
      return state;
  }
}
