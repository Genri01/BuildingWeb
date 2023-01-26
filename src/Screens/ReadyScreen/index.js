import React,{ Fragment } from 'react';
import { Input, Space, Checkbox, Button } from 'antd'; 
import WhatWeDoBlock from '../../components/WhatWeDoBlock'
import WhyPeopleChooseBlock from '../../components/WhyPeopleChooseBlock'
import WhatPeopleSay from '../../components/WhatPeopleSay'
import Title from '../../components/Title';
import images from '../../assets/images';   

import './style.css';
  
function ReadyScreen(props) {
 
  const { mobile } = props;
  const { ant_0, ant_1, ant_2, ant_3, ant_4, ant_5, ant_6 } = images;
 
  const placeInputs = [
    {
      question:'Referral First & Last Name',
      
    },
    {
      question:'Referral Email',
      
    },
    {
      question:'Referral Phone',
      
    },
    {
      question:'Referral Street, City, State, Zip Code',
      
    },
    {
      question:'Your First & Last Name',
      
    },
    {
      question:'Your Email',
      
    },
    {
      question:'Your Phone Number',
      
    },
    {
      question:'Your Street, City, State, Zip Code',
      
    },
    {
      question:'How Did You Hear About Our Referral Program?',
      
    } 
  ]
   
  const checkbox = [
    'Bathroom Remodeling',
    'Commercial Roofing',
    'Decks',
    'Doors & Windows',
    'Gutters',
    'Roof Installation & Repair',
    'Shower Remodeling',
    'Siding Installation & Repair',
    'Soffit & Fascia',
    'Storm Damage Repair',
    'Tile Installation & Repair',
    'Other', 
  ]
   
  const imgAnty = [ant_0, ant_1, ant_2, ant_3, ant_4, ant_5, ant_6]
//  size={[40, 40]} wrap 
    const onChange = (e) => {
      console.log(`checked = ${e.target.checked}`);
    };
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
                <div className=''>
                  <Input placeholder={ item.placeholder } />
                </div> 
              </div>
            ))
          }
        </Space> 
        <div className='checkBoxContainer'>
          <div className='checkBoxContainerTitle'>What Type of Project?</div>
          {
            checkbox.map((item,key) => (
              <Fragment key={key}>
                <Checkbox onChange={onChange}>{item}</Checkbox>
                <br />
              </Fragment>
            ))
          }
        </div>
        <div className='textExample'>*Credits and payments will be made on referrals once the project is completed. Project must exceed $5,000 to qualify. To be eligible for the bonus, the person you refer must not already be a customer of A to Z Construction Inc.</div>
        <div className='readyButtonContainer'>
          <Button className="bottonTitle" block type="primary">Send Form</Button>  
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
