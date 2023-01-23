
import React, { useState } from 'react'; 
import { Button } from 'antd';
import './style.css';
import { setComent } from '../../redux/actions/cart'
import { useDispatch, useSelector  } from 'react-redux';
import { cart } from '../../redux/selectors';

export default function ContactUsForm(props) {

  const dispatch = useDispatch();
  const coment = useSelector(cart.coment);

 
  return (
    <div className="contactUsFormWrapper"> 
      <div className='titleContactUsFormContainer'>
        <div className='titleContactUsForm textContactUsForm'>Project Ditails:</div>
      </div>
      <div className='contactUsFormContainer'>
        <textarea value={coment} onChange={(e) => {dispatch(setComent(e.target.value))}} className='comments' placeholder="" />
      </div>
      <Button style={{ width: '240px', height: '40px' }} type="primary">Submit</Button>
    </div>
  );
}
 