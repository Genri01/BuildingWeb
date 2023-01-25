import { combineReducers } from 'redux';
import header from './header'
import app from './app'
import cart from './cart'
import pages from './pages'

const rootReducer = combineReducers({
  header,
  app,
  cart,
  pages
});

export default rootReducer;