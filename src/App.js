import React, { useEffect } from 'react';
import Main from './routes/index';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { change_page, setMobileMod } from './redux/actions/app';
import { pages, app } from './redux/selectors';
import HeaderMenu from './components/HeaderMenu';
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
      <HeaderMenu 
        mobile={mobile}  
        page={page} 
        onClick={(e) => {  
          localStorage.setItem('page',e.target.id);
          dispatch(change_page(e.target.id));
        }}   
      />
      {/* <Main mobile={mobile} /> */}
    </div>
  );
}

export default App;
