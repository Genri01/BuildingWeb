import React, { useEffect, useState, Fragment } from 'react';
import { Input, Space, Checkbox, Button, message } from 'antd';  
import Title from '../../components/Title';
import images from '../../assets/images';   
import { questions } from '../../redux/selectors';   
import { useDispatch, useSelector  } from 'react-redux'; 
import { validateEmail, changeTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
import InputMask from 'react-input-mask';
import { 
  setFirstName,
  setAddres,
  setCallback,
  setCity,
  setComent, 
  setFinancing,
  setGetContact,
  setIndex,
  setLastName,
  setMaterials,
  setOwner, 
  setStatus, 
  setTypeProject,
  setReferalCity,
  setReferalComent,
  setReferalEmail,
  sendRegistrServer,
  setReferalFirstName,
  setReferalTel
} from '../../redux/actions/questions'; 
import './style.css';
  
function ReadyScreen(props) {
 
  const { mobile } = props;
  const { ant_0, ant_1, ant_2, ant_3, ant_4, ant_5, ant_6 } = images;
 
  const [quality, setQuality] = useState(maskTelephone);

  const [mask, setMask] = useState('');

  const [errTel, setErrTel] = useState(true);
  const [errEmail, setErrEmail] = useState(true);

  const [errTelRef, setErrTelRef] = useState(true);
  const [errEmailRef, setErrEmailRef] = useState(true);

  const dispatch = useDispatch(); 

  const referal_first_name = useSelector(questions.referal_first_name);    
  const referal_email = useSelector(questions.referal_email); 
  const referal_tel = useSelector(questions.referal_tel);    
  const referal_addres_city = useSelector(questions.referal_addres_city); 
  const byer_first_name = useSelector(questions.byer_first_name);    
  const byer_email = useSelector(questions.byer_email);    
  const byer_tel = useSelector(questions.byer_tel);    
  const addres_street = useSelector(questions.addres_street);   
  const referal_coment = useSelector(questions.referal_coment); 
  const type_project = useSelector(questions.type_project);  
 
  const placeInputs = [ 
    {
      question:'Referral First & Last Name',
      value: referal_first_name,
      placeholder: 'Name',
      fun: (e) => { dispatch(setReferalFirstName(e.target.value)) } 
    },
    {
      question:'Referral Email',
      value: referal_email,
      placeholder: 'Email',
      fun: (e) => { changeEmail(true,e.target.value,setErrEmailRef,dispatch,validateEmail)  } 
    },
    {
      question:'Referral Phone',
      value: referal_tel,
      placeholder: 'Phone',
      fun: (e) => { dispatch(setReferalTel(e.target.value)) } 
    },
    {
      question:'Referral Street, City, State, Zip Code',
      value: referal_addres_city,
      placeholder: 'Address',
      fun: (e) => { dispatch(setReferalCity(e.target.value)) } 
    },
    {
      question:'Your First & Last Name',
      value: byer_first_name,
      placeholder: 'Name',
      fun: (e) => { dispatch(setFirstName(e.target.value)) } 
    },
    {
      question:'Your Email',
      value: byer_email,
      placeholder: 'Email',
      fun: (e) => {  changeEmail(false,e.target.value,setErrEmail,dispatch,validateEmail) } 
    },
    {
      question:'Your Phone Number',
      value: byer_tel,
      placeholder: 'Phone',
      fun: (e) => { changeTelephone(false,e.target.value,mask,byer_tel,setErrTel,dispatch) } 
    },
    {
      question:'Your Street, City, State, Zip Code',
      value: addres_street,
      placeholder: 'Address', 
      fun: (e) => { dispatch(setAddres(e.target.value)) } 
    },
    {
      question:'How Did You Hear About Our Referral Program?',
      value: referal_coment,
      placeholder: 'Comment',
      fun: (e) => { dispatch(setReferalComent(e.target.value)) } 
    } 
  ]
   
  const checkbox = [
    'Bathroom Remodeling',
    'Kitchen Remodeling',
    'Basement Remodeling',
    'Roof Installation & Repair',
    'Siding Installation & Repair',
    'Tile Installation',
    'Shower Remodeling',
    'GuHers', 
  ]
   
  const plainOptions = [
    {
      label: 'Bathroom Remodeling',
      value: 'Bathroom Remodeling',
    },
    {
      label: 'Kitchen Remodeling',
      value: 'Kitchen Remodeling',
    },
    {
      label: 'Basement Remodeling',
      value: 'Basement Remodeling',
    },
    {
      label: 'Roof Installation & Repair',
      value: 'Roof Installation & Repair',
    },
    {
      label: 'Siding Installation & Repair',
      value: 'Siding Installation & Repair',
    },
    {
      label: 'Tile Installation',
      value: 'Tile Installation',
    },
    {
      label: 'Shower Remodeling',
      value: 'Shower Remodeling',
    },
    {
      label: 'GuHers',
      value: 'GuHers',
    },
  ];
 
  const imgAnty = [ant_0, ant_1, ant_2, ant_3, ant_4, ant_5, ant_6]
 
  const typeProjectChange = (checkedValues) => { 
    dispatch(setTypeProject(checkedValues));
  };

   
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
      <div className="ready_screen" > 
        <Title text={'READY TO EARN $250?'} />
        <div className="amentitiesTextContainer">
          <div className="amentitiesTextSubTitle">Do you know anyone that is in need of a new roof or looking to improve their home? Send them to A to Z Construction Inc. and earn $250!</div>
        </div>
        <Space className='inputsContainerSpace' direction="vertical" size={'middle'}>
          {
            placeInputs.map((item, key) => ( 
              <div key={key} className='inputContainerItem'>
                <div className='questionItem'>
                  <div className='question'>{item.question}</div>
                  <span style={{ color: 'red', marginLeft: '5px',marginBottom: '9px'}}>*</span>
                </div> 
                {
                  key === 2 ? <InputMask  
                    placeholder={ item.placeholder } 
                    className={`locationInput ${errTelRef ? 'error_input' : ''}`} 
                    name={ item.name } 
                    mask={`${mask}`} 
                    maskChar={'_'} 
                    value={referal_tel} 
                    onChange={(e)=>{ changeTelephone(true,e.target.value,mask,referal_tel,setErrTelRef,dispatch) }} 
                  /> : 
                  key === 6 ? <InputMask   
                    placeholder={ item.placeholder } 
                    className={`locationInput ${errTel ? 'error_input' : ''}`} 
                    name={ item.name } 
                    mask={`${mask}`} 
                    maskChar={'_'} 
                    value={byer_tel} 
                    onChange={(e)=>{ changeTelephone(false,e.target.value,mask,byer_tel,setErrTel,dispatch) }} 
                  /> : 
                  <Input   
                    value={item.value}
                    className={
                      key === 0 ? `${referal_first_name === '' ? 'error_input' : ''}` : 
                      key === 1 ? `${errEmailRef ? 'error_input' : ''}` : 
                      key === 3 ? `${referal_addres_city === '' ? 'error_input' : ''}` : 
                      key === 4 ? `${byer_first_name === '' ? 'error_input' : ''}` : 
                      key === 5 ? `${errEmail ? 'error_input' : ''}` : 
                      key === 7 ? `${addres_street === '' ? 'error_input' : ''}` : 
                      key === 8 ? `${referal_coment === '' ? 'error_input' : ''}` : 
                      `locationInput` 
                      }  onChange={item.fun} placeholder={ item.placeholder }  
                  />
                } 
              </div>
            ))
          }
        </Space> 
        <div className='checkBoxContainer'>
          <div className='checkBoxContainerTitle'>What Type of Project?</div>
            <div className='checkboxContainer'>
              <Checkbox.Group style={{ flexWrap: 'wrap' }} value={type_project} options={plainOptions} onChange={typeProjectChange} /> 
            </div>  
        </div>
        <div className='textExample'>*Credits and payments will be made on referrals once the project is completed. Project must exceed $5,000 to qualify. To be eligible for the bonus, the person you refer must not already be a customer of A to Z Construction Inc.</div>
        <div className='readyButtonContainer'>
          <Button 
            onClick={async() => { 
              const result = await sendRegistrServer({ 
                referal_first_name,  
                referal_email,
                referal_tel, 
                referal_addres_city,
                byer_first_name,
                byer_email,
                byer_tel,
                addres_street,  
                referal_coment,
                type_project,  
              },dispatch); 
              message.success('Form success');   
            }}
            className="bottonTitle" 
            block type="primary"
            disabled={referal_first_name !== '' && referal_email !== '' && referal_tel !== '' && referal_addres_city !== '' && byer_first_name !== '' && byer_tel !== '' && errTel !== true && errTelRef !== true && errEmailRef !== true && errEmail !== true ? false : true} 
          >Send Form</Button>  
        </div>
        <div className='readyAntitiesContainer'>
          {
            imgAnty.map((item, key) => (
              <div key={key} className='readyImgContainer'>
                <img width={100} src={item} alt="img" />
              </div>
            ))
          }
        </div>
      </div>
    );
}

export default ReadyScreen;
