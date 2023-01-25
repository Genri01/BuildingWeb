import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import TextButtonContainer from '../TextButtonContainer';
import CartContainer from '../CartContainer';
import TwoBtnContainer from '../TwoBtnContainer';
import Amentities from '../Amentities';
import Title from '../Title'; 


import './style.css';

export default function FinanceOptionBlock(props) {
  const { mobile } = props; 

  const itemsCard = [
    {
      title: 'Initial Consultation & Assessment',
      li: [
        'Schedule a phone, virtual, or in-home consultation. Schedule your consult online, click “Connect” or “Schedule Now”, select your meeting type and time!',
        'At this meeting we will determine the feasibility of your project.'
      ]
    },
    {
      title: 'Initial Consultation & Assessment',
      li: [
        'Schedule a phone, virtual, or in-home consultation. Schedule your consult online, click “Connect” or “Schedule Now”, select your meeting type and time!',
        'At this meeting we will determine the feasibility of your project.'
      ]
    },
    {
      title: 'Initial Consultation & Assessment',
      li: [
        'Schedule a phone, virtual, or in-home consultation. Schedule your consult online, click “Connect” or “Schedule Now”, select your meeting type and time!',
        'At this meeting we will determine the feasibility of your project.'
      ]
    },
    {
      title: 'Initial Consultation & Assessment',
      li: [
        'Schedule a phone, virtual, or in-home consultation. Schedule your consult online, click “Connect” or “Schedule Now”, select your meeting type and time!',
        'At this meeting we will determine the feasibility of your project.'
      ]
    },
    {
      title: 'Initial Consultation & Assessment',
      li: [
        'Schedule a phone, virtual, or in-home consultation. Schedule your consult online, click “Connect” or “Schedule Now”, select your meeting type and time!',
        'At this meeting we will determine the feasibility of your project.'
      ]
    },
  ]


  return (
    <div className={`${mobile ? 'mobileButkovProcessWrapper' : "butkovProcessWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>  
          <Title text="Financing options" />
          <div className='subCenterText'>
            From concept to completion, we will provide you with the home improvement guidance needed to navigate your way through our design/ build process.
          </div>
            
        </>
      }
    </div>
  );
}
