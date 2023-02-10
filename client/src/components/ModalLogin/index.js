import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Modal, Input, Form, Button } from 'antd';     
import { questions } from '../../redux/selectors'; 
import { modalLogin } from '../../redux/actions/app'; 
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { setFirstName } from '../../redux/actions/questions'; 
import { validateEmail, changeEmail } from '../../helpers/index';  
import './style.css'; 

export default function ModalLogin(props) {

  const { mobile, show } = props;

  const [form] = Form.useForm(); 
  const dispatch = useDispatch(); 
 
  const byer_email = useSelector(questions.byer_email);  
  const byer_first_name = useSelector(questions.byer_first_name); 
  
  const [errorText, changeErrorText] = useState(false);  
  const [name, changeName] = useState('');  
  const [password, changePassword] = useState('');  
  
  const [errEmail, setErrEmail] = useState(false);
 
  return (
    <Modal
      className='modalMini'
      title="Login"
      centered
      open={show} 
      onCancel={() => {  
        changeName('')
        changePassword('') 
        dispatch(modalLogin(false));
        changeErrorText(false);
      }}
    > 
      <div className='modalLoginContainer'>  
        <Form form={form}> 
          <Form.Item label="Login">
            <Input 
              placeholder="Login"  
              onChange={(e) => { changeName(e.target.value); changeErrorText(false); }} 
              value={name}  
              name="name" 
              type="text" 
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password
              onChange={(e) => { changePassword(e.target.value); changeErrorText(false); }} 
              value={password}  
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              className='passwordInput'
            /> 
          </Form.Item> 
        </Form> 
      </div> 
      {
       errorText ? <div className='errorText'>Email not confirmed</div> : <></>
      } 
      <div className='btnContainerLogin'>
        <Button onClick={() => { changeErrorText(true) }} disabled={( name !== ''  && password !== '') ? false : true} style={{ width: '300px' }} className="textButton" type='primary' >LogIn</Button>
      </div>
    </Modal>
  );
};