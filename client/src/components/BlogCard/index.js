import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { setInsert,linkpage } from '../../redux/actions/questions';
import { useDispatch } from 'react-redux';
import './style.css'

export default function BlogCard(props) {
  const { card } = props; 
  const { img, title } = card; 
  const dispatch = useDispatch();

  return (
    <div className="BlogCardWrapper">
      <div className="BlogCardImgContainer"> 
        <img src={img} alt='imgcard' width='100%' height='100%' />
      </div>
      <div className='BlogCardTxtContainer'>
        <div className='BlogCardTxt'>{ title }</div>
      </div>
      <div className="BlogCardBtnContainer">  
        <Button className="bottonTitle" block type="primary">{'READ MORE >>'}</Button>  
      </div>
      <div className='owerlayCard' /> 
    </div>
  ); 
}
  