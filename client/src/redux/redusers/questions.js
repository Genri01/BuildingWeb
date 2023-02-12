import ActionTypes from '../constants';   
 
const initialState = { 
  byer_first_name: '',
  byer_last_name: '',
  byer_email: '', 
  byer_tel: '',
  coment: '',   
  addres_street: '', 
  addres_city: '', 
  addres_index: null, 
  referal_first_name: '',
  referal_tel: '',
  referal_email: '', 
  referal_coment: '',   
  referal_addres_city: '',  
  type_project: [],
  materials: 'yes',   
  owner: 'yes',   
  financing: 'yes',   
  status: 'yes',   
  callback: '',   
  getcontact: '',   
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
    case ActionTypes.MODAL_REFERAL_FIRST_NAME:
      return {
        ...state,
        referal_first_name: payload
      }; 
    case ActionTypes.MODAL_REFERAL_TEL:
      return {
        ...state,
        referal_tel: payload
      }; 
    case ActionTypes.MODAL_REFERAL_EMAIL:
      return {
        ...state,
        referal_email: payload
      }; 
    case ActionTypes.MODAL_REFERAL_COMENT:
      return {
        ...state,
        referal_coment: payload
      };   
    case ActionTypes.MODAL_REFERAL_CITY:
      return {
        ...state,
        referal_addres_city: payload
      };   
    case ActionTypes.MODAL_TYPE_PROJECT:  
      return {
        ...state,
        type_project: [...payload]
      }; 
    case ActionTypes.MODAL_MATERIALS:
      return {
        ...state,
        materials: payload
      }; 
    case ActionTypes.MODAL_OWNER:
      return {
        ...state,
        owner: payload
      }; 
    case ActionTypes.MODAL_FINANCING:
      return {
        ...state,
        financing: payload
      };  
    case ActionTypes.MODAL_STATUS:
      return {
        ...state,
        status: payload
      }; 
    case ActionTypes.MODAL_CALLBACK:
      return {
        ...state,
        callback: payload
      }; 
    case ActionTypes.MODAL_GETCONTACT:
      return {
        ...state,
        getcontact: payload
      }; 
   
    default:
      return state;
  }
}
