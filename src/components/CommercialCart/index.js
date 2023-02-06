import React from 'react';  
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import { Image } from 'antd';
import './style.css';

export default function CommercialCart(props) { 
  const { img, title, mobile, owerlay } = props;
 
  return (
    <div className={`${mobile ? 'mobileWorkOrderItem' : 'commercialItem'}`}>
      
      <div className='commercialItemImg'><Image src={img} /></div>
      {(owerlay && <><div className='commercialTitleContainer'>
        <div className='commercialItemTitle'>
          {title}
        </div> 
      </div> 
      <div className='owerlayImg'/></>
      )}
    </div>
  );
}
