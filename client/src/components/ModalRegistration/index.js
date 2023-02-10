import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Modal, Input, Form, Button, Spin, Result } from 'antd';    
import ContactUsForm from '../ContactUsForm';
import { questions } from '../../redux/selectors'; 
import { modalLogin, modalRegistration } from '../../redux/actions/app'; 
import { setFirstName } from '../../redux/actions/questions'; 
import { validateEmail, changeEmail } from '../../helpers/index';  
import './style.css'; 

export default function ModalRegistration(props) {

  const { mobile, show } = props;

  const [form] = Form.useForm(); 
  const dispatch = useDispatch(); 
 
  const byer_email = useSelector(questions.byer_email);   
  
  const [name, changeName] = useState('');  
  const [password, changePassword] = useState('');  
  const [passwordRpeate, changePasswordRpeate] = useState('');  
  const [loading, changeLoading] = useState(false);  

  const [errEmail, setErrEmail] = useState(false);
  
  const [good, setGood] = useState(false); 

  React.useEffect(() => {
    let loader = ''
    if(loading) {
      loader = setTimeout(() => {
        changeLoading(false);
        setGood(true); 
      }, 2000);
    } 

    return () => {
      clearTimeout(loader);
    };
  }, [loading]);

 
 
  return (
    <Modal
      className='modalMini'
      title="Registration"
      centered
      open={show} 
      onCancel={() => {
        setGood(false);
        changeName('')
        changePassword('')
        changePasswordRpeate('')
        changeEmail('',setErrEmail,dispatch,validateEmail)
        dispatch(modalRegistration(false))
      }}
    > 
      <div className='modalLoginContainer'>  
        {
         good ?
          <Result
            status="success"
            title="Successfully Registration"
            subTitle="An email has been sent to your email address to confirm registration." 
          />
         : <Form form={form}> 
            <Form.Item label="Email">
              <Input 
                placeholder="Email" 
                onChange={(e) => { changeEmail(e.target.value,setErrEmail,dispatch,validateEmail) }} 
                value={byer_email} 
                className={`${errEmail ? 'error_input' : ''}`} 
                name="password" 
                type="text"
              />
            </Form.Item>
            <Form.Item label="Name">
              <Input 
                placeholder="Name"  
                onChange={(e) => { changeName(e.target.value) }} 
                value={name} 
                // className={`${byer_first_name === '' ? '' : ''}`} 
                name="name" 
                type="text" 
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input  
                placeholder="Password"  
                onChange={(e) => { changePassword(e.target.value) }} 
                value={password} 
                className={`${password === passwordRpeate ? '' : 'error_input'}`} 
                name="password" 
                type="text" 
              />
            </Form.Item> 
            <Form.Item label="Password Repeate">
              <Input 
                placeholder="Password"  
                onChange={(e) => { changePasswordRpeate(e.target.value) }} 
                value={passwordRpeate} 
                className={`${password === passwordRpeate ? '' : 'error_input'}`} 
                name="password" 
                type="text" 
              />
            </Form.Item> 
          </Form> 
        }
      </div>  
      <div className='btnContainerLogin'>
        {
          loading ? 
          <Spin tip="Loading" size="small">
            <div className="content" />
          </Spin> : 
          good ?  <></>  : <Button disabled={(errEmail !== true && name !== '' && password === passwordRpeate && password !== '') ? false : true} onClick={()=>{ changeLoading(true) }} style={{ width: '300px' }} className="textButton" type='primary' >Registration</Button>
        }
      </div>
    </Modal>
  );
};