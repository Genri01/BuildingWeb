import React, { useEffect, useState } from 'react';
import { Button, message, InputNumber, theme, Modal, Checkbox, Select, Input, TimePicker, Space } from 'antd';  
import { useDispatch, useSelector  } from 'react-redux'; 
import { questions, app } from '../../redux/selectors';  
import { modalFullQuestion } from '../../redux/actions/app'; 
import { 
  setTel,
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
  sendFullServer
} from '../../redux/actions/questions';

import { validateEmail, validateTelephone, changeEmail, maskTelephone } from '../../helpers/index'; 
import InputMask from 'react-input-mask';
import './style.css'; 

export default function ModalQuestionFull(props) {

  const { mobile, show } = props;
  
  const dispatch = useDispatch(); 

  const [value, setValue] = useState('');  
  const { TextArea } = Input;
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
 
  const byer_last_name = useSelector(questions.byer_last_name); 
  const byer_tel = useSelector(questions.byer_tel); 
  const byer_email = useSelector(questions.byer_email); 
  const byer_first_name = useSelector(questions.byer_first_name);    
  const addres_city = useSelector(questions.addres_city);    
  const addres_index = useSelector(questions.addres_index);    
  const addres_street = useSelector(questions.addres_street);    
  const owner = useSelector(questions.owner);    
  const financing = useSelector(questions.financing);    
  const status = useSelector(questions.status);    
  const callback = useSelector(questions.callback);    
  const coment = useSelector(questions.coment);    
  const getcontact = useSelector(questions.getcontact);     
  const type_project = useSelector(questions.type_project);     
  const materials = useSelector(questions.materials);     
   
  const app_modal_question_full_show = useSelector(app.app_modal_question_full_show); 
  
  const [submitDisable, changeSubmit] = useState(true);  
 
  const [quality, setQuality] = useState(maskTelephone);

  const [mask, setMask] = useState('');

  const [errTel, setErrTel] = useState(true);
  const [errEmail, setErrEmail] = useState(true);
 
  const next = () => {
    setCurrent(current + 1);
  };
  
  const prev = () => {
    setCurrent(current - 1);
  };
 
  const materialChange = (value) => {
    dispatch(setMaterials(value)); 
  };

  const typeProjectChange = (checkedValues) => { 
    dispatch(setTypeProject(checkedValues));
  };

  const ownerChange = (checkedValues) => { 
    dispatch(setOwner(checkedValues));
  };

  const financingChange = (checkedValues) => { 
    dispatch(setFinancing(checkedValues));
  };

  const statusChange = (checkedValues) => { 
    dispatch(setStatus(checkedValues));
  };
  
  const timeCallChange = (time, timeString) => {
    dispatch(setCallback({ time, timeString })); 
  };

  const getContactChange = (checkedValues) => { 
    dispatch(setGetContact(checkedValues));
  };
 
  const plainOptions = [
    {
      label: 'Bathroom remodel',
      value: 'Bathroom remodel',
    },
    {
      label: 'Kitchen remodel',
      value: 'Kitchen remodel',
    },
    {
      label: 'Basement remodel',
      value: 'Basement remodel',
    },
    {
      label: 'Roofing',
      value: 'Roofing',
    },
    {
      label: 'Tile work',
      value: 'Tile work',
    },
    {
      label: 'Comercial',
      value: 'Comercial',
    },
  ];

  const threeOptions = [
    {
      label: 'Phone',
      value: 'Phone',
    },
    {
      label: 'Text',
      value: 'Text',
    },
    {
      label: 'Email',
      value: 'Email',
    },
  ];

  const selectOptions = [
    {
      value: 'yes',
      label: 'Yes',
    },
    {
      value: 'no',
      label: 'No',
    }
  ];

  const selectOptionsStatus = [
    {
      value: 'Ready to hire',
      label: 'Ready to hire',
    },
    {
      value: 'Planning & Budgeting',
      label: 'Planning & Budgeting',
    }
  ];
 
  const placeInput = [
    {
      value: byer_first_name,
      placeholder: 'First Name',
      fun: (e) => { dispatch(setFirstName(e.target.value)) }
    }, 
    {
      value: byer_last_name, 
      placeholder: 'Last Name', 
      fun: (e) => { dispatch(setLastName(e.target.value)) } 
    }, 
    {
      value: byer_email,
      placeholder: 'Email Address', 
      fun: (e) => { changeEmail(false,e.target.value,setErrEmail,dispatch,validateEmail) } 
    }, 
    {
      value: byer_tel,
      placeholder: 'Phone Number', 
      fun: (e) => { validateTelephone(false,e.target.value,mask,byer_tel,setErrTel,dispatch) } 
    }, 
  ];
 
  const contentStyle = {
    lineHeight: '66px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
   
  const steps = [
    {
      title: 'One step',
      content: 
      <>
        <div className='questionColor'>How can we help you?</div> 
          <Checkbox.Group value={type_project} options={plainOptions} onChange={typeProjectChange} />  
        <div className='questionColor'>Have you already purchesed the matirials for this project?</div>
        <Select
          value={materials}
          style={{
            width: mobile ? 200 : 320,
          }}
          onChange={materialChange}
          options={selectOptions}
        />
      </>,
    },
    {
      title: 'Two step',
      content: 
      <>
        <div className='questionColor'>Are you owner or authorized to make property changes?</div> 
        <Select
          value={owner}
          style={{
            width: mobile ? 200 : 320,
          }}
          onChange={ownerChange}
          options={selectOptions}
        />
        <div className='questionColor'>Are you interestedd in financing?</div>
        <Select
          value={financing}
          style={{
            width: mobile ? 200 : 320,
          }}
          onChange={financingChange}
          options={selectOptions}
        />
      </>,
    },
    {
      title: 'Three step',
      content: 
      <>
        <div className='questionColor'>Choose the appropriate status for this project:</div> 
        <Select
          value={status}
          style={{
            width: mobile ? 200 : 320,
          }}
          onChange={statusChange}
          options={selectOptionsStatus}
        />
        <div className='questionColor'>When would you like us to call you back?</div>
        <TimePicker value={callback.time} style={{ width: 170 }} use12Hours format="h:mm a" onChange={timeCallChange} />
        <div className='questionColor'>Please tell us a little more about your project:</div>
        <TextArea
          value={coment}
          style={{
            width: mobile ? 200 : 400,
            marginBottom: '20px'
          }} 
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
          onChange={(e) => { dispatch(setComent(e.target.value))}}
        />
        <div className='questionColor'>How can we get in touch with you? <span style={{ color: 'red' }}>*</span></div>
        <Checkbox.Group value={getcontact} options={threeOptions} onChange={getContactChange} />
        <Space style={{ justifyContent: 'center' }} size={[8, 16]} wrap>
          { 
            placeInput.map((item, key) => (
              <div key={key} className='inputContainerSpan'>
                {
                  key === 3 ? <InputMask  
                  placeholder={ item.placeholder } 
                  className={`locationInput ${errTel ? 'error_input' : ''}`} 
                  name={ item.name } 
                  mask={`${mask}`} 
                  maskChar={'_'} 
                  value={byer_tel} 

                  onChange={(e) => { 
                    dispatch(setTel(e.target.value)) 
                  }} 

                  // onChange={(e)=>{ validateTelephone(mask, e.target.value,setErrTel, dispatch) }} 
                /> : 
                <Input   
                  value={item.value}
                  className={
                    key === 3 ? `locationInput ${errTel ? 'error_input' : ''}` : 
                    key === 2 ? `${errEmail ? 'error_input' : ''}` :
                    key === 1 ? `${byer_first_name === '' ? 'error_input' : ''}` :
                    key === 0 ? `${byer_last_name === '' ? 'error_input' : ''}` :
                    `locationInput` 
                    }  onChange={item.fun} placeholder={ item.placeholder }  
                />
                }
                <span style={{ color: 'red' }}>*</span>
              </div>
            ))
          }
 
        </Space>
        <div className='questionColor'>Please input your address</div>
        <div className='inputContainerSpan'>
          <Input 
            value={addres_street}
            onChange={(e) => { dispatch(setAddres(e.target.value)) } } 
            style={{ width: mobile ? 200 : 400 }} 
            placeholder="Street Address" 
            className={ `locationInput ${addres_street.length < 6 ? 'error_input' : ''}` }
          />
          <span style={{ color: 'red' }}>*</span> 
        </div>
        <Space style={{ justifyContent: 'center' }} size={[40, 40]} wrap> 
            <div className='inputContainerSpan'> 
              <Input  
                value={addres_city}  
                className={`locationInput ${addres_city === '' ? 'error_input' : ''}`}  
                onChange={(e) => { dispatch(setCity(e.target.value)) }} 
                placeholder='City' 
              /> 
              <span style={{ color: 'red'}}>*</span>
              <InputNumber 
                min={0}
                // defaultValue={null}
                // value={Number(addres_index)}  
                className={`locationInputNumber ${addres_index === null ? 'error_input' : ''}`}  
                onChange={(value) => { dispatch(setIndex(value)) }} 
                placeholder='Zip'  
              /> 
              <span style={{ color: 'red'}}>*</span> 
            </div> 
        </Space> 
      </>,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
 
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
    <Modal
      title="Please follow a few steps"
      centered
      open={app_modal_question_full_show}
      okButtonProps={{ disabled:submitDisable, style: { backgroundColor: `${ !submitDisable ?' #640d0fd9' : '' }`, color: `${ !submitDisable ? '#fff' : '' }` } }}
      onOk={() => dispatch(modalFullQuestion(false))}
      onCancel={() => dispatch(modalFullQuestion(false))}
      footer={<></>}
    >
      {/* <Steps className="steps" current={current} items={items} /> */}
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }} >
      {
      current < steps.length - 1 && (
      <Button style={{ backgroundColor: `#a50f12`, color: `#fff` }} type="primary" onClick={() => next()}> Next </Button>
      )}
      {
      current === steps.length - 1 && (
      <Button 
        type="primary" 
        style={{ backgroundColor: `${ !submitDisable ?' #640d0fd9' : '' }`, color: `${ !submitDisable ? '#fff' : '' }` }} 
        disabled={byer_last_name !== '' && byer_first_name !== '' && addres_city !== '' && addres_index !== '' && addres_street !== '' && addres_street.length >= 5 && errTel !== true && errEmail !== true ? false : true} 
        onClick={async() => { 
          const result = await sendFullServer({
            byer_first_name,
            byer_tel,
            byer_email,
            byer_last_name,
            addres_city,  
            addres_index,
            addres_street,
            owner,
            financing,
            status,
            callback,  
            coment, 
            getcontact,  
            type_project,    
            materials, 
          },dispatch); 
          message.success(result);
          dispatch(modalFullQuestion(false)) 
        }}> Submit </Button>
      )} 
      { current > 0 && ( <Button style={{ margin: '0 8px' }} onClick={() => prev()}> Back </Button> ) }
      </div>
    </Modal>
  );
};