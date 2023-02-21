import React from 'react';
import './style.css';

export default function WhyPeopleChooseItem(props) {
    const { icon, title, text, mobile, customclass, iconsize, style } = props;
    const br = text.split('<br/>'); 



    return (
      <div className={`${customclass === undefined ? '' : customclass} ${mobile ? 'mobileWorkOrderItem' : 'whyPeopleChooseItem'}`}>
        <div className='whyPeopleChooseItemImg'>
          <img className={`${iconsize === undefined ? '' : iconsize} whyPeopleChooseItemImg`} src={icon} alt="icon" />
        </div>
        <div className='whyPeopleChooseTextContainer'>
          <div className='whyPeopleChooseItemTitle'>{title}</div>
          <div style={style} className='whyPeopleChooseItemSubTitle'>
             { br.map((item,k)=>(<React.Fragment key={k}>{item}<br/></React.Fragment>)) } 
          </div>
        </div> 
      </div>
    );
}  