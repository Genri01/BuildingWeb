import React from 'react';  
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import './style.css';

export default function CommercialCart(props) { 
  const { img, title, mobile } = props;
 
  return (
    <div className={`${mobile ? 'mobileWorkOrderItem' : 'commercialItem'}`}>
      <div className='commercialItemImg'><img src={img} alt="imgCommercial" /></div>
      <div className='commercialTitleContainer'>
        <div className='commercialItemTitle'>
          {title}
        </div> 
      </div> 
      <div className='owerlayImg'/>
    </div>
  );
}
