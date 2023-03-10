import React, { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';  
import { Form, Input } from 'antd'; 
import InputMask from 'react-input-mask';
import { YMaps, Map, Polygon, ZoomControl } from 'react-yandex-maps';
import ContactUsForm from '../ContactUsForm'; 
import Title from '../Title';

import { questions } from '../../redux/selectors';  
import { setFirstName,setTel } from '../../redux/actions/questions'; 
import { validateEmail, validateTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 

import './style.css';
 
export default function 
 
ContactBlock(props) {
  const { mobile } = props;
  const [form] = Form.useForm(); 

  const dispatch = useDispatch(); 
 
  const byer_email = useSelector(questions.byer_email); 
  const byer_tel = useSelector(questions.byer_tel); 
  const byer_first_name = useSelector(questions.byer_first_name); 

  const [quality, setQuality] = useState(maskTelephone);
  const [submitDisable, changeSubmit] = useState(true);  
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

  useEffect(() => {
    validateTelephone(mask,byer_tel,setErrTel) 
  },[byer_tel]);
  
  return (
    <div className={mobile ? 'mobileContactWrapper' : "contactWrapper"}> 
      <div className={mobile ? 'mobileContactLeftWraper' : "contactLeftWraper"}> 
        <div className='textConcatWrapper'>
          <Title text="Get In Touch" />
          <div className='textConcat'>{`
            Whether you’re looking to inquire about our services, products or have a question or a commercial query please get in touch by filling out the form below to ask a question, request more information, or schedule an appointment. 
          `}</div>
        </div> 
        <div className={mobile ? 'mobileAreaContainer' : "areaContainer"}>
        <div className={mobile ? 'mobileFormContainer':'formContainer'}>
          <Title size={30} margin={'50px 0px 0px 0px'} center={true} text="Enter your details to contact you" />
          <div className={mobile ? 'mobileFormItemContainer':'formItemContainer'}>
            <Form form={form}  labelCol={{ span: 3 }} wrapperCol={{ span: 22 }}> 
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
                  onChange={(e) => { changeEmail(false,e.target.value,setErrEmail,dispatch,validateEmail) }} 
                  value={byer_email} 
                  className={`locationInput ${errEmail ? 'error_input' : ''}`} 
                  name="email" 
                  type="text"
                />
              </Form.Item>
              <Form.Item label="*">
                <InputMask  
                  placeholder="Telephone" 
                  className={`locationInput ${errTel ? 'error_input' : ''}`} 
                  name="telephone" 
                  mask={`${mask}`} 
                  maskChar={'_'} 
                  value = {byer_tel} 
                  onChange={(e) => { 
                    dispatch(setTel(e.target.value)) 
                  }} 
                />
              </Form.Item> 
            </Form>
          </div> 
        </div> 
        <ContactUsForm 
          name = {byer_first_name}
          email = {byer_email}
          phone = {byer_tel}
          errEmail = {errEmail}
          errTel = {errTel}
          disabled={{ disabled: byer_first_name === '' || errTel === true || errEmail === true, style: { backgroundColor: 'rgb(187 28 32)' } }} 
        />  
        </div> 
      </div>
      <div className={mobile?"mobileContactRightWraper":"contactRightWraper"}> 
        <Title text="Service area" />
        <YMaps key={'en_US'} query={{lang: 'en_US'}}>
          <Map  className={`${mobile ? 'mobile-iframe' : 'iframe'}`} defaultState={{ center: [46.14462034221224, -94.58679115253476], zoom: 5 }}>
            <Polygon options={{ fill: true, fillColor:'#640d0f' ,opacity: 0.3, strokeColor: '#640d0f' }}  geometry={[ 
              [
                [43.546581008862205, -96.72759106244365],
                [48.964218378975346, -97.23940056641634],
                [49.410559618086054, -95.15470855068773],
                [48.00297768081079, -89.56704553850476],
                [45.26044950363559, -86.99565526914395],
                [42.472623381234484, -87.79689784134419],
                [42.48486168171082, -90.65518654420013], 
              ] 
            ]} /> 
            <ZoomControl /> 
          </Map>
        </YMaps>   
      </div>  
    </div>
  );
}
