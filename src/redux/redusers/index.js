import { combineReducers } from 'redux'; 
import app from './app' 
import pages from './pages'

const rootReducer = combineReducers({ 
  app, 
  pages
});

export default rootReducer;