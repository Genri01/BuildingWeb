
import React from 'react';
import Title from '../Title';
import FeedbackItem from '../FeedbackItem';
import { feedback } from '../../config';
import './style.css';


export default function FeedbackBlock(props) {
  const { mobile, id } = props;
  return (
    <div id={id} className="feedbackWrapper">
      {
        mobile ?
        <>
          <Title size={24} text="Отзывы наших клиентов" margin="0px 0px 50px 0px" />
          <div className='mobileFeedbackItemContainer'>
            {
              feedback.map((item, i) => (<FeedbackItem key={i} mobile={mobile} name={item.name} subname={item.sub_name} feed={item.text} cool={item.star} />))
            } 
          </div>
        </>
        :
        <>
          <Title text="Отзывы наших клиентов" margin="20px 0px 50px 0px" />
          <div className='feedbackItemContainer'>
            {
              feedback.map((item, i) => (<FeedbackItem key={i} name={item.name} subname={item.sub_name} feed={item.text} cool={item.star} />))
            } 
          </div>
        </>
      }
    </div>
  );
}

