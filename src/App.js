import React, { useEffect, useState } from 'react';
import { Button, message, Steps, theme, Modal, Checkbox, Select, Input, TimePicker, Space } from 'antd';
import Main from './routes/index';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux'; 
import { change_page, setMobileMod } from './redux/actions/app';
import { pages, app } from './redux/selectors';
import Header from './components/Header';
import Footer from './components/Footer'; 

import './App.css';

function App() {
  const dispatch = useDispatch();  

  const page = useSelector(pages.page); 
  const mobile = useSelector(app.mobile); 

  const [value, setValue] = useState(''); 
  const [submitDisable, changeSubmit] = useState(false);
  const { TextArea } = Input;
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [modal2Open, setModal2Open] = useState(false);



  const next = () => {
    setCurrent(current + 1);
  };
  
  const prev = () => {
    setCurrent(current - 1);
  };
 
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
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
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    }
  ];

  const options = [
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

  const placeInput = [
    {
      placeholder: 'First Name', 
    }, 
    {
      placeholder: 'Last Name', 
    }, 
    {
      placeholder: 'Email Address', 
    }, 
    {
      placeholder: 'Phone Number', 
    }, 
  ];

  const placeInputs = [
    {
      placeholder: 'City', 
    }, 
    {
      placeholder: 'Zip', 
    } 
  ];
  
  const steps = [
    {
      title: 'One step',
      content: 
      <>
        <div className='questionColor'>How can we help you?</div>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
        <div className='questionColor'>Have you already purchesed the matirials for this project?</div>
        <Select
          defaultValue="Yes"
          style={{
            width: 320,
          }}
          onChange={handleChange}
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
          defaultValue="Yes"
          style={{
            width: 320,
          }}
          onChange={handleChange}
          options={selectOptions}
        />
        <div className='questionColor'>Are you interestedd in financing?</div>
        <Select
          defaultValue="Yes"
          style={{
            width: 320,
          }}
          onChange={handleChange}
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
          defaultValue="Yes"
          style={{
            width: 320,
          }}
          onChange={handleChange}
          options={selectOptions}
        />
        <div className='questionColor'>When would you like us to call you back?</div>
        <TimePicker style={{ width: 170 }} use12Hours format="h:mm a" onChange={onChangeTime} />
        <div className='questionColor'>Please tell us a little more about your project:</div>
        <TextArea
          style={{
            width: 400,
            marginBottom: '20px'
          }} 
          autoSize={{
            minRows: 2,
            maxRows: 6,
          }}
        />
        <div className='questionColor'>How can we get in touch with you? <span style={{ color: 'red' }}>*</span></div>
        <Checkbox.Group options={threeOptions} defaultValue={['Apple']} onChange={onChange} />
        <Space style={{ justifyContent: 'center' }} size={[8, 16]} wrap>
          { 
            placeInput.map((item, key) => (
              <div className='inputContainerSpan'>
                <Input key={key+90} placeholder={ item.placeholder } />
                <span style={{ color: 'red' }}>*</span>
              </div>
            ))
          }
        </Space>
        <div className='questionColor'>Please input your address</div>
        <div className='inputContainerSpan'>
          <Input  style={{ width: 400 }} placeholder="Street Address" />
          <span style={{ color: 'red' }}>*</span> 
        </div>
        <Space style={{ justifyContent: 'center' }} size={[40, 40]} wrap>
          {placeInputs.map((item, key) => ( 
            <div className='inputContainerSpan'>
              <Input key={key+34} placeholder={ item.placeholder } />
              <span style={{ color: 'red'}}>*</span>
            </div>
          ))}
        </Space> 
      </>,
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
 
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));


  useEffect(() => { 
    dispatch(setMobileMod(isMobile));
  },[]);

  useEffect(() => {
    // if(localStorage.getItem('page') === null) {  
    //   localStorage.setItem('page','/'); 
    // }   
    // dispatch(change_page(localStorage.getItem('page'))); 
  },[page]);
 
  return (
    <div className="App">
      <Header 
        mobile={mobile}  
        page={page} 
        onClick={(e) => {  
          localStorage.setItem('page',e.target.id);
          dispatch(change_page(e.target.id));
        }}   
      />
      <Main mobile={mobile} />
      <Footer mobile={mobile} /> 
      <Modal
        title="Please follow a few steps"
        centered
        open={modal2Open}
        okButtonProps={{ disabled:submitDisable, style: {backgroundColor: 'rgb(187 28 32)' } }}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Steps className="steps" current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }} >
        {current < steps.length - 1 && (
          <Button style={{ backgroundColor: 'rgb(187 28 32)' }} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" style={{ backgroundColor: 'rgb(187 28 32)' }} disabled={submitDisable} onClick={() => message.success('Processing complete!')}>
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Back
          </Button>
        )}
      </div>
      </Modal>
    </div>
  );
}

export default App;
