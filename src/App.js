import React, { useEffect } from 'react'; 
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { change_page, setMobileMod } from './redux/actions/app';
import { pages, app } from './redux/selectors';
import Header from './components/Header';
import './App.css';

function App() {
  const dispatch = useDispatch();  

  const page = useSelector(pages.page); 
  const mobile = useSelector(app.mobile); 

  useEffect(() => {
    if(localStorage.getItem('page') === null) {  
      localStorage.setItem('page','main'); 
    }   
    dispatch(change_page(localStorage.getItem('page')));
    dispatch(setMobileMod(isMobile));
  },[]);

  
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
    </div>
  );
}

export default App;
