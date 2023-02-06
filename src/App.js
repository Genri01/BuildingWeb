import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { isMobile } from 'react-device-detect';
import Main from './routes/index';
import { change_page, setMobileMod } from './redux/actions/app';
import { pages, app } from './redux/selectors';
import Header from './components/Header';
import Footer from './components/Footer'; 
import ModalQuestionFull from './components/ModalQuestionFull'; 
import ModalQuestionMini from './components/ModalQuestionMini'; 
import ModalLogin from './components/ModalLogin'; 
import ModalRegistration from './components/ModalRegistration'; 

import './App.css';

function App() {
  const dispatch = useDispatch();  

  const page = useSelector(pages.page); 
  const mobile = useSelector(app.mobile); 
  const app_modal_question_full_show = useSelector(app.app_modal_question_full_show); 
  const app_modal_question_mini_show = useSelector(app.app_modal_question_mini_show); 
  const app_modal_login_show = useSelector(app.app_modal_login_show); 
  const app_modal_register_show = useSelector(app.app_modal_register_show); 

  useEffect(() => { 
    dispatch(setMobileMod(isMobile));
  },[]);

  useEffect(() => {
    // if(localStorage.getItem('page') === null) {  
    //   localStorage.setItem('page','/'); 
    // }   
    // dispatch(change_page(localStorage.getItem('page'))); 
  },[page]);
 
  return (
    <div className="App">
      <Header 
        mobile={mobile}  
        page={page} 
        onClick={(e) => {  
          localStorage.setItem('page',e.target.id);
          dispatch(change_page(e.target.id));
        }}   
      />
      <Main mobile={mobile} />
      <Footer mobile={mobile} />  
      <ModalQuestionFull show={app_modal_question_full_show} />
      <ModalQuestionMini show={app_modal_question_mini_show} />
      <ModalLogin show={app_modal_login_show} />
      <ModalRegistration show={app_modal_register_show} />
    </div>
  );
}

export default App;
