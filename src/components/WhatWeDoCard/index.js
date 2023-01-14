import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import './style.css'

export default function WhatWeDoCard(props) {
  const { img, title } = props; 
  const dispatch = useDispatch();
  return (
    <div className="CardsItemWrapper">
      <div className="CardsItemTop">
        <div className='owerlay'>
          <div className='owerlay_txt'>{ title }</div>
        </div>
        <img src={img} alt='imgcard' width='100%' height='100%' />
      </div>
      <div className="CardsItemBottom">  
      <Button className="bottonTitle" block type="primary">GET A FREE QUOTE</Button>  
      </div>
    </div>
  ); 
}
 