import React from 'react'; 
import BackgroundVideo from '../BackgroundVideo';  

import TopLine from '../TopLine';
 
import './style.css'; 
function Header(props) {
 
  const { page, mobile, pagesArr, clickMenu } = props; 

  return (
    <div className="headerWrapper"> 
      <TopLine mobile={mobile} linkTitle='READY TO EARN $250? LEAVE A REFERRAL TODAY!' btnTxt='GET ON ESTEMATE' /> 
      <BackgroundVideo page={page} mobile={mobile} pagesArr={pagesArr} clickMenu={clickMenu} />   
    </div>
  );
}

export default Header;