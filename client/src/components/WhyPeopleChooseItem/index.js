import React from 'react';
import './style.css';

export default function WhyPeopleChooseItem(props) {
    const { icon, title, text, mobile, customclass, iconsize } = props;
 
    return (
      <div className={`${customclass === undefined ? '' : customclass} ${mobile ? 'mobileWorkOrderItem' : 'whyPeopleChooseItem'}`}>
        <div className='whyPeopleChooseItemImg'>
          <img className={`${iconsize === undefined ? '' : iconsize} whyPeopleChooseItemImg`} src={icon} alt="icon" />
        </div>
        <div className='whyPeopleChooseTextContainer'>
          <div className='whyPeopleChooseItemTitle'>{title}</div>
          <div className='whyPeopleChooseItemSubTitle'>{text}</div>
        </div> 
      </div>
    );
}  