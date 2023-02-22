import React from 'react';
import './style.css';

export default function WhyPeopleChooseItem(props) {
    const { icon, title, text, mobile, iconsize, style, revert } = props;
    const br = text.split('<br/>'); 
 
    return (
      <div className={`${mobile ? 'mobileWorkOrderItem' : revert ? 'whyPeopleChooseItemReverse' : 'whyPeopleChooseItem'}`}>
        <div className='whyPeopleChooseItemImg'>
          <img className={`${iconsize === undefined ? '' : iconsize} whyPeopleChooseItemImg`} src={icon} alt="icon" />
        </div>
        <div className={`${mobile ? 'mobileWhyPeopleChooseTextContainer' : revert ? 'whyPeopleChooseReverseTxt' : 'whyPeopleChooseTextContainer'}`}>
          <div className='whyPeopleChooseItemTitle'>{title}</div>
          <div style={style} className={`${mobile ? 'mobileWhyPeopleChooseItemSubTitle' : revert ? 'whyPeopleChooseItemReverseSubTxt' : 'whyPeopleChooseItemSubTitle'}`}> 
            <div className={`${mobile ? 'mobileWhyPeopleChooseItemSubTitle' : revert ? 'whyPeopleChooseSubTxtContainerReverse' : 'subTxtContainer'}`}>
              { br.map((item,k)=>(<React.Fragment key={k}>{item}<br/></React.Fragment>)) }   
            </div>
          </div>
        </div> 
      </div>
    );
}  