import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import { Link, useNavigate,useLocation } from 'react-router-dom';  
import { change_page } from '../../redux/actions/app'; 
import BackgroundVideo from '../BackgroundVideo';
import TopLine from '../TopLine';

import images from '../../assets/images';
import './style.css';

function Header(props) {
  const { statuy, cart, Logo_black }= images;
  const { userName, page, mobile, isAuth} = props;
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(change_page(localStorage.getItem('page'))); 
    // dispatch(setPopupMainMsg(''));
  },[page]); 

  const {hash, key} = useLocation();

  useEffect(()=>{
      if(hash){
         const targetElement = document.getElementById(hash.substring(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])
 
    return (
      <div className={` ${ mobile ? 'mobileHeaderWrapper' : 'headerWrapper' }`}>
        { mobile ? 
          <>
            <TopLine linkTitle='READY TO EARN $250? LEAVE A REFERRAL TODAY!' btnTxt='GET ON ESTEMATE' /> 
            <BackgroundVideo videoSource="https://static.videezy.com/system/resources/previews/000/041/086/original/031_07.mp4" /> 
          </>
          :
          <>
            <TopLine linkTitle='READY TO EARN $250? LEAVE A REFERRAL TODAY!' btnTxt='GET ON ESTEMATE' /> 
            <BackgroundVideo videoSource="https://static.videezy.com/system/resources/previews/000/041/086/original/031_07.mp4" />  
          </> 
        }
      </div>
    );
}

export default Header;