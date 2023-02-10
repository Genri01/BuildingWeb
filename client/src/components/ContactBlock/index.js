import React, { useState } from 'react'; 
import { Button, Form, Input, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import ContactUsForm from '../ContactUsForm';
import images from '../../assets/images';
import { YMaps, Map, Polygon, ZoomControl } from 'react-yandex-maps';
import Title from '../Title';
import './style.css';

export default function ContactBlock(props) {
  const { mobile } = props;
  const [form] = Form.useForm(); 
   
  return (
    <div className={`${mobile ? 'mobilecontactWrapper' : "contactWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>   
          <div className='contactLeftWraper'> 
            <div className='textConcatWrapper'>
              <Title text="Get In Touch" />
              <div className='textConcat'>{`
                Whether you’re looking to inquire about our services, products or have a question or a commercial query please get in touch by filling out the form below to ask a question, request more information, or schedule an appointment. 
              `}</div>
            </div> 
            <div className='areaContainer'>
            <div className='formContainer'>
              <Title center={true} text="Enter your details to contact you" />
              <div className='formItemContainer'>
                <Form form={form}  labelCol={{ span: 3 }} wrapperCol={{ span: 22 }}> 
                  <Form.Item label="*">
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item label="*">
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="*">
                    <Input placeholder="Phone" />
                  </Form.Item> 
                </Form>
              </div> 
            </div> 
              <ContactUsForm /> 
            </div> 
          </div>
          <div className="contactRightWraper"> 
            <Title text="Service area" />
            <YMaps>
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
        </>
      }
    </div>
  );
}
