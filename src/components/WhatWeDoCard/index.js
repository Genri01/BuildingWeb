import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { setInsert,linkpage } from '../../redux/actions/questions';
import { useDispatch } from 'react-redux';
import { modalFullQuestion,change_page } from '../../redux/actions/app';
import './style.css'

export default function WhatWeDoCard(props) {
  const { img, title, link } = props;  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="CardsItemWrapper">
      <div onClick={()=>{ navigate(`residentional/${link}`);dispatch(change_page(link))}} className="CardsItemTop">
        <div className='owerlay'>
         <div className='owerlay_txt'>{ title }</div>
        </div>
        <img src={img} alt='imgcard' width='100%' height='100%' />
      </div>  
      <div className="CardsItemBottom">  
      <Button onClick={() => { dispatch(modalFullQuestion(true)); }} className="bottonTitle" block type="primary">GET A FREE QUOTE</Button>  
      </div>
    </div>
  ); 
}
 