import ActionTypes from '../constants'; 
import axios from 'axios';

export function setInitialDead(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL_DEAD,
    payload: initial
  }
}

export function setBirthdayDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_BERTHDAY,
    payload: date
  }
}

export function setDeadDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_DEAD,
    payload: date
  }
}

export function setFile(date) {
  return {
    type: ActionTypes.CART_BYER_FILE,
    payload: date
  }
}

export function delFile(filename) {
  return {
    type: ActionTypes.CART_BYER_DEL_FILE,
    payload: filename
  }
}

export function setFileImg(date) {
  return {
    type: ActionTypes.CART_BYER_FILE_IMG,
    payload: date
  }
}

export function delFileImg(filename) {
  return {
    type: ActionTypes.CART_BYER_DEL_FILE_IMG,
    payload: filename
  }
}

export function setInstall(install) {
  return {
    type: ActionTypes.CART_INSTALL,
    payload: install
  }
}

export function setConsultInitial(initial) {
  return {
    type: ActionTypes.CART_CONSULT_BYER_INITIAL,
    payload: initial
  }
}

export function setConsultTel(tel) {
  return {
    type: ActionTypes.CART_CONSULT_BYER_TEL,
    payload: tel
  }
}

export function setConsultComent(coment) {
  return {
    type: ActionTypes.CART_CONSULT_COMENT,
    payload: coment
  }
}

export function setInitial(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL,
    payload: initial
  }
}

export function setTel(tel) {
  return {
    type: ActionTypes.CART_BYER_TEL,
    payload: tel
  }
}

export function setEmail(email) {
  return {
    type: ActionTypes.CART_BYER_EMAIL,
    payload: email
  }
}

export function setComent(coment) {
  return {
    type: ActionTypes.CART_COMENT,
    payload: coment
  }
}

export function setInsert(insert) {
  return {
    type: ActionTypes.CART_INSERT,
    payload: insert
  }
}

export function setRegion(region) {
  return {
    type: ActionTypes.CART_ADDRES_REGION,
    payload: region
  }
}

export function setCity(city) {
  return {
    type: ActionTypes.CART_ADDRES_CITY,
    payload: city
  }
}

export function setAddres(addres) {
  return {
    type: ActionTypes.CART_ADDRES,
    payload: addres
  }
}

export function setIndex(index) {
  return {
    type: ActionTypes.CART_ADDRES_INDEX,
    payload: index
  }
}

export function setPopupMainMsg(msg) {
  return {
    type: ActionTypes.CART_POPUP_MAIN,
    payload: msg
  }
}

export function setDeliveryMethod(method) {
  return {
    type: ActionTypes.CART_DELIVERY_METHOD,
    payload: method
  }
}

export function setPayMethod(method) {
  return {
    type: ActionTypes.CART_PAY_METHOD,
    payload: method
  }
}

export function setCategory(method) {
  return {
    type: ActionTypes.CATALOG_CATEGORY,
    payload: method
  }
}

export function setBuy(buy) { 
  return {
    type: ActionTypes.CATALOG_BUY,
    payload: buy
  }
}

export function setFileName(name) { 
  return {
    type: ActionTypes.CATALOG_FILENAME,
    payload: name
  }
}

export function setDelBuy(del) { 
  return {
    type: ActionTypes.CATALOG_BUYDEL,
    payload: del
  }
}

export function incrimentBuy(inn) { 
  return {
    type: ActionTypes.CATALOG_INCRIMENTBUY,
    payload: inn
  }
}

export function decrimentBuy(dec) { 
  return {
    type: ActionTypes.CATALOG_DECRIMENTBUY,
    payload: dec
  }
}

export function setWidth(width) { 
  return {
    type: ActionTypes.CATALOG_WIDTHMONUMENT,
    payload: width
  }
}

export function setMaterial(material) { 
  return {
    type: ActionTypes.CATALOG_MATERIALMONUMENT,
    payload: material
  }
}

export function clearBuy() { 
  return {
    type: ActionTypes.CATALOG_BUYCLEAR, 
  }
}

export function linkpage(link) { 
  return {
    type: ActionTypes.CATALOG_LINKPAGE,
    payload: link 
  }
}
 
 