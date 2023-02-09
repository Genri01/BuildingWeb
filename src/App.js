import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from "react-redux"; 
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom'
import Main from './routes/index';
import { change_link, change_page, setMobileMod, modalMiniQuestion, modalLogin, modalRegistration } from './redux/actions/app';
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
  const navigate = useNavigate();   

  const page = useSelector(pages.page); 
  const pagesArr = useSelector(pages.pagesArr); 
  const mobile = useSelector(app.mobile); 
  const app_modal_question_full_show = useSelector(app.app_modal_question_full_show); 
  const app_modal_question_mini_show = useSelector(app.app_modal_question_mini_show); 
  const app_modal_login_show = useSelector(app.app_modal_login_show); 
  const app_modal_register_show = useSelector(app.app_modal_register_show);  

  const [statePage, setStatePage] = useState(''); 

  useEffect(() => { 
    dispatch(setMobileMod(isMobile));
  },[]); 

  useEffect(() => { 
    if(localStorage.getItem('page') === null) {  
      localStorage.setItem('page','/'); 
    }   
    let tmpPage = page === '/' ? 'main' : page
    setStatePage(tmpPage); 
    dispatch(change_page(localStorage.getItem('page')));  
  },[page]);

  
  return (
    <div className="App">
      <Header 
        mobile={mobile}  
        page={statePage} 
        pagesArr={pagesArr}  
        clickMenu={(e) => {  
          localStorage.setItem('page',e.key);
          if(e.key === 'bathroom' ||
          e.key === 'kitchen' ||
          e.key === 'roofing' ||
          e.key === 'basment' ||
          e.key === 'tile' ) {
            navigate(`residentional/${e.key}`)
          } else if(e.key === 'butkovprocess' ||
          e.key === 'financingoptions' ||
          e.key === 'rewiews' ||
          e.key === 'blog' ||
          e.key === 'faq' ) {
            navigate(`moreinfo/${e.key}`,{ state: { id: e.key} })
          } else if(e.key === 'login') { 
            dispatch(modalLogin(true))
          }  else if(e.key === 'registration') { 
            dispatch(modalRegistration(true))
          } else {
            navigate(`${e.key}`)
          }
          dispatch(change_page(e.key));
          if(e.key !== 'registration' && e.key !== 'login') {
            window.location.reload();
          }
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
