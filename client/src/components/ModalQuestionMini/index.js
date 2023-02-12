import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Modal, Input, Form } from 'antd';    
import ContactUsForm from '../ContactUsForm';
import { questions } from '../../redux/selectors'; 
import { modalMiniQuestion } from '../../redux/actions/app'; 
import { setFirstName } from '../../redux/actions/questions'; 
import { validateEmail, changeTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
import InputMask from 'react-input-mask';
import './style.css'; 

export default function ModalQuestionMini(props) {

  const { mobile, show } = props;

  const [form] = Form.useForm(); 
  const dispatch = useDispatch(); 
 
  const byer_email = useSelector(questions.byer_email); 
  const byer_tel = useSelector(questions.byer_tel); 
  const byer_first_name = useSelector(questions.byer_first_name); 
  
  const [submitDisable, changeSubmit] = useState(true);  
 
  const [quality, setQuality] = useState(maskTelephone);

  const [mask, setMask] = useState('');
  const [errTel, setErrTel] = useState(true);
  const [errEmail, setErrEmail] = useState(true);
  
  useEffect(() => {
    fetch('https://api.sypexgeo.net/json')
    .then(response => response.json())
    .then(data => {
      if(data.country!= null) {
        setMask(quality[data.country.iso]);
      }
    });
  },[]);
 
  return (
    <Modal
      className='modalMini'
      title="Contact Us"
      centered
      open={show} 
      onCancel={() => dispatch(modalMiniQuestion(false))}
    > 
      <div className='modalMiniformContainer'>  
        <Form form={form}> 
          <Form.Item label="*">
            <Input 
              placeholder="Name"  
              onChange={(e) => { dispatch(setFirstName(e.target.value)) }} 
              value={byer_first_name} 
              className={`${byer_first_name === '' ? 'error_input' : ''}`} 
              name="name" 
              type="text" 
            />
          </Form.Item>
          <Form.Item label="*">
            <Input 
              placeholder="Email" 
              onChange={(e) => {  changeEmail(false,e.target.value,setErrEmail,dispatch,validateEmail) }} 
              value={byer_email} 
              className={`${errEmail ? 'error_input' : ''}`} 
              name="email" 
              type="text"
            />
          </Form.Item>
          <Form.Item label="*">
            <InputMask  
              placeholder='Phone' 
              className={`locationInput ${errTel ? 'error_input' : ''}`} 
              name='phone' 
              mask={`${mask}`} 
              maskChar={'_'} 
              value={byer_tel} 
              onChange={(e)=>{ changeTelephone(false,e.target.value,mask,byer_tel,setErrTel,dispatch) }} 
            />
          </Form.Item> 
        </Form> 
      </div> 
      <ContactUsForm 
        name = {byer_email}
        email = {byer_email}
        phone = {byer_tel}
        disabled={{ disabled: submitDisable, style: { backgroundColor: 'rgb(187 28 32)' } }} 
      /> 
    </Modal>
  );
};