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

export default function ButkovProcessBlock(props) {
  const { mobile, id } = props; 

  const itemsCard = [
    {
      title: 'Initial contact',
      li: [
        'As soon as you leave a request, we will contact you shortly to get more details about your project and set up an estimate with the day and time that is most convenient for you.',
        // 'At this meeting we will determine the feasibility of your project.'
      ]
    },
    {
      title: 'Estimate/Proposal',
      li: [
        'As soon as we schedule an estimate, you will receive a notification with the date, time, and the expert’s name. You’ll receive a notification about an estimate within one hour of arrival.', 
        'You can receive and discuss the proposal with an expert right at the project, set up start day, discuss all terms. Sometimes it may take up to 24 hours to provide you with a proposal including all information.'
      ]
    },
    {
      title: 'Discussion all terms and conditions',
      li: [
        'After you received the proposal, feel free to contact us to discuss all terms, set a start date and time, make changes.', 
      ]
    },
    {
      title: 'Certificate of completion/Final payment',
      li: [
        'Before the end of the project, you will receive the final invoice. Please make sure everything is correct. If you have questions, please contact us. After completing services and all check-ins, you can make a payment online or call the office and go ahead with your payment.', 
      ]
    },
    {
      title: 'You are a satisfied customer',
      li: [
        'For us feedback is very important, we would like to know about your experience with Butkov, please fill out quick survey and give us opportunity to improve our service and your experience with us for next time.', 
      ]
    },
  ]

 
  return (
    <div id={id} className={`${mobile ? 'mobileButkovProcessWrapper' : "butkovProcessWrapper"}`}> 
      <Title height mobile={mobile} margin={mobile ? '30px 0px' : '0'} text="Butkov's five step process" />
      <div className='subCenterText'>
        From concept to completion, we will provide you with the home improvement guidance needed to navigate your way through our design/ build process.
      </div>
      <div className='processContainerCarts'>
        {
          itemsCard.map((item,key) => (
            <div style={{ borderLeft: `${mobile ? 'none': (key != '3') && (key != '0') ? '1px solid black' : 'none'}`, width:`${mobile ? '100%' : '20%'}`, marginTop:`${mobile ? '0' : '50px'}`}} key={key} className='processCardWrapper'>
              <h4 className='processCardTitle'>{`${key+1}. ${item.title}`}</h4>
                <ul className='processCardList'>
                {
                  item.li.map((i,k) => (<li key={k} className='processCardListItem'>{i}</li>))
                }  
                </ul>   
            </div>
          )) 
        }
      </div>  
    </div>
  );
}
