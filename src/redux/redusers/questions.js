import ActionTypes from '../constants';   
 
const initialState = { 
  byer_first_name: '',
  byer_last_name: '',
  byer_tel: '',
  byer_email: '', 
  coment: '',   
  addres_street: '', 
  addres_city: '', 
  addres_index: '',   
};
 
export default function questions(state = initialState, { type, payload }) { 
 
  switch (type) {
  
    case ActionTypes.MODAL_BYER_TEL:
      return {
        ...state,
        byer_tel: payload
      }; 
    case ActionTypes.MODAL_BYER_FIRST_NAME:
      return {
        ...state,
        byer_first_name: payload
      }; 
    case ActionTypes.MODAL_BYER_LAST_NAME:
      return {
        ...state,
        byer_last_name: payload
      }; 
    case ActionTypes.MODAL_BYER_PROJECTDETAIL:
      return {
        ...state,
        coment: payload
      };   
    case ActionTypes.MODAL_BYER_EMAIL:
      return {
        ...state,
        byer_email: payload
      };  
    case ActionTypes.MODAL_BYER_CITY:
      return {
        ...state,
        addres_city: payload
      }; 
    case ActionTypes.MODAL_BYER_STREET_ADDRESS:
      return {
        ...state,
        addres_street: payload
      }; 
    case ActionTypes.MODAL_BYER_ZIP:
      return {
        ...state,
        addres_index: payload
      }; 
   
    default:
      return state;
  }
}
