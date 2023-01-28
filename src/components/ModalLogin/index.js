import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Modal, Input, Form, Button } from 'antd';    
import ContactUsForm from '../ContactUsForm';
import { questions } from '../../redux/selectors'; 
import { modalLogin } from '../../redux/actions/app'; 
import { setFirstName } from '../../redux/actions/questions'; 
import { validateEmail, changeTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
import InputMask from 'react-input-mask';
import './style.css'; 

export default function ModalLogin(props) {

  const { mobile, show } = props;

  const [form] = Form.useForm(); 
  const dispatch = useDispatch(); 
 
  const byer_email = useSelector(questions.byer_email); 
  const byer_tel = useSelector(questions.byer_tel); 
  const byer_first_name = useSelector(questions.byer_first_name); 
  
  const [submitDisable, changeSubmit] = useState(true);  
 
  const [quality, setQuality] = useState(maskTelephone);

  const [mask, setMask] = useState('');
  const [errTel, setErrTel] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  
  useEffect(() => {
    fetch('https://api.sypexgeo.net/json')
    .then(response => response.json())
    .then(data => {
      if(data.country!= null) {
        setMask(quality[data.country.iso]);
      }
    });
  },[]);
 

  // if(errTel === false) { changeSubmit(false) }
  // if(errEmail === false) { changeSubmit(false) }
  // if(byer_first_name !== '') { changeSubmit(false) }


  return (
    <Modal
      className='modalMini'
      title="Login"
      centered
      open={show} 
      onCancel={() => dispatch(modalLogin(false))}
    > 
      <div className='modalLoginContainer'>  
        <Form form={form}> 
          <Form.Item label="Login">
            <Input 
              placeholder="Login"  
              onChange={(e) => { dispatch(setFirstName(e.target.value)) }} 
              value={byer_first_name} 
              className={`${byer_first_name === '' ? '' : ''}`} 
              name="name" 
              type="text" 
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input 
              placeholder="Password" 
              onChange={(e) => { changeEmail(e.target.value,setErrEmail,dispatch,validateEmail) }} 
              value={byer_email} 
              className={`${errEmail ? 'error_input' : ''}`} 
              name="email" 
              type="text"
            />
          </Form.Item> 
        </Form> 
      </div>  
      <div className='btnContainerLogin'>
        <Button style={{ width: '300px' }} className="textButton" type='primary' >LogIn</Button>
      </div>
    </Modal>
  );
};