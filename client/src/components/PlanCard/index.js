import React from 'react'; 
import './style.css';

export default function PlanCard(props) {
  const { title, subtitle, twoCol, oneCol, mobile } = props;

  return (
    <div className={`${mobile ? 'mobilePlanCardWrapper' : 'planCardWrapper'}`}>  
      <h2 className='planCardTitle'>{title}</h2> 
      <h3 className='planCardSubName'>{subtitle}</h3> 
      <div className='planCardOneCol'>{oneCol}</div>
      <h6 className='planCardTwoCol'>{twoCol}</h6>
    </div>
  );
}
 