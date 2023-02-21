import ActionTypes from '../constants'; 
import api from '../../http/index';
 
export function setFirstName(name) {
  return {
    type: ActionTypes.MODAL_BYER_FIRST_NAME,
    payload: name
  }
}

export function setLastName(name) {
  return {
    type: ActionTypes.MODAL_BYER_LAST_NAME,
    payload: name
  }
}

export function setTel(tel) {
  return {
    type: ActionTypes.MODAL_BYER_TEL,
    payload: tel
  }
}

export function setEmail(email) {
  return {
    type: ActionTypes.MODAL_BYER_EMAIL,
    payload: email
  }
}

export function setComent(coment) {
  return {
    type: ActionTypes.MODAL_BYER_PROJECTDETAIL,
    payload: coment
  }
}
 
export function setCity(city) {
  return {
    type: ActionTypes.MODAL_BYER_CITY,
    payload: city
  }
}

export function setAddres(addres) {
  return {
    type: ActionTypes.MODAL_BYER_STREET_ADDRESS,
    payload: addres
  }
}

export function setIndex(index) {
  return {
    type: ActionTypes.MODAL_BYER_ZIP,
    payload: index
  }
}
  
export function setReferalFirstName(name) {
  return {
    type: ActionTypes.MODAL_REFERAL_FIRST_NAME,
    payload: name
  }
}

export function setTypeProject(types) {
  console.log(types)
  return {
    type: ActionTypes.MODAL_TYPE_PROJECT,
    payload: types
  }
}

export function setReferalTel(tel) {
  return {
    type: ActionTypes.MODAL_REFERAL_TEL,
    payload: tel
  }
}

export function setReferalEmail(email) {
  return {
    type: ActionTypes.MODAL_REFERAL_EMAIL,
    payload: email
  }
}

export function setReferalComent(coment) {
  return {
    type: ActionTypes.MODAL_REFERAL_COMENT,
    payload: coment
  }
}
 
export function setReferalCity(city) {
  return {
    type: ActionTypes.MODAL_REFERAL_CITY,
    payload: city
  }
}

export function setMaterials(material) {
  console.log(material)
  return {
    type: ActionTypes.MODAL_MATERIALS,
    payload: material
  }
}

export function setOwner(owner) {
  return {
    type: ActionTypes.MODAL_OWNER,
    payload: owner
  }
}

export function setFinancing(financing) {
  return {
    type: ActionTypes.MODAL_FINANCING,
    payload: financing
  }
}
 
export function setStatus(status) {
  return {
    type: ActionTypes.MODAL_STATUS,
    payload: status
  }
}

export function setCallback(callback) {
  return {
    type: ActionTypes.MODAL_CALLBACK,
    payload: callback
  }
}

export function setGetContact(getcontact) {
  return {
    type: ActionTypes.MODAL_GETCONTACT,
    payload: getcontact
  }
}
  
export function linkpage(link) { 
  return {
    type: ActionTypes.CATALOG_LINKPAGE,
    payload: link 
  }
}
 
export async function sendMiniServer(body,dispatch) {

  try {
    const requestOptions = {
      method: 'post',
      headers: { 
      'Content-Type': 'application/json',
      },
      body
    };  
    const response = await api.main_api.post('/sendmini',requestOptions) 
    if(response.status === 200) {   
      return response.data.msg 
    }  
  } catch (error) {
    console.log(error)
    return error.response?.status;
  }
}
 
export async function sendFullServer(body,dispatch) { 
  try {
    const requestOptions = {
      method: 'post',
      headers: { 
      'Content-Type': 'application/json',
      },
      body
    };  
    const response = await api.main_api.post('/sendfull',requestOptions)
    if(response.status === 200) {  
      return response.data.msg 
    }  
  } catch (error) {
    console.log(error)
    return error.response?.status;
  }
}
 
export async function sendRegistrServer(body,dispatch) { 
  try {
    const requestOptions = {
      method: 'post',
      headers: { 
      'Content-Type': 'application/json',
      },
      body
    };  
    const response = await api.main_api.post('/sendref',requestOptions)
    if(response.status === 200) {  
      return response.data.msg 
    }  
  } catch (error) {
    console.log(error)
    return error.response?.status;
  }
}

 