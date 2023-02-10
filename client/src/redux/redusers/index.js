import { combineReducers } from 'redux'; 
import app from './app'
import questions from './questions'
import pages from './pages'

const rootReducer = combineReducers({ 
  app,
  questions,
  pages
});

export default rootReducer;