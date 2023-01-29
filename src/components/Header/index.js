import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';  
import { useNavigate,useLocation } from 'react-router-dom';  
import { change_page } from '../../redux/actions/app'; 
import BackgroundVideo from '../BackgroundVideo';
import TopLine from '../TopLine';
 
import './style.css';

function Header(props) {
 
  const { page, mobile } = props;
  
  const dispatch = useDispatch();  
    return (
      <div className="headerWrapper"> 
        <TopLine mobile={mobile} linkTitle='READY TO EARN $250? LEAVE A REFERRAL TODAY!' btnTxt='GET ON ESTEMATE' /> 
        <BackgroundVideo page={page} mobile={mobile} />  
      </div>
    );
}

export default Header;