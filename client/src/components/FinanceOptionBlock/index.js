import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import PlanCard from '../PlanCard';
import images from '../../assets/images';
import Title from '../Title'; 


import './style.css'; 

export default function FinanceOptionBlock(props) {
  const { mobile, id } = props; 
  const { sinchrony } = images; 

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
   
  const plans = [
    {
      title: 'Plan 600',
      subTitle: `Reduced 9.99% APR and fixed monthly payments equal to 1.25% of promo purchase amount - Until Paid in Full3`, 
      oneCol: `Estimated payoff period 132 months. See below for additional information.`, 
      twoCol: `3Monthly interest will be charged on promo purchases from the purchase date at a reduced 9.99% APR, and fixed monthly payments are required equal to 1.25% of initial promo purchase amount until promo is paid in full. The fixed monthly payment will be rounded to the next highest whole dollar and may be higher than the minimum payment that would be required if the purchase was a non-promotional purchase. Regular account terms apply to non-promotional purchases.` 
    },
    {
      title: 'Plan 602',
      subTitle: `Reduced 5.99% APR and fixed monthly payments equal to 3.00% of promo purchase amount - Until Paid in Full5`, 
      oneCol: `Estimated payoff period 37 months. See below for additional information.`, 
      twoCol: `5 Monthly interest will be charged on promo purchases from the purchase date at a reduced 5.99% APR, and fixed monthly payments are required equal to 3.00% of initial promo purchase amount until promo is paid in full. The fixed monthly payment will be rounded to the next highest whole dollar and may be higher than the minimum payment that would be required if the purchase was a non-promotional purchase. Regular account terms apply to non-promotional purchases.` 
    },
    {
      title: 'Plan 604',
      subTitle: `No Monthly Interest if Paid in Full Within 18 Months (Deferred Interest)6`, 
      oneCol: `Monthly interest will be charged to your account from the purchase date if the promotional purchase is not paid in full within 18 months. Fixed monthly payments are required equal to 2.50% of the highest balance applicable to this promo purchase until paid in full. See below for additional information.`, 
      twoCol: `4Monthly interest will be charged on promo purchases from the purchase date at a reduced 7.99% APR, and fixed monthly payments are required equal to 2.00% of initial promo purchase amount until promo is paid in full. The fixed monthly payment will be rounded to the next highest whole dollar and may be higher than the minimum payment that would be required if the purchase was a non-promotional purchase. Regular account terms apply to non-promotional purchases.` 
    },
    {
      title: 'Plan 605',
      subTitle: `Reduced 9.99% APR and fixed monthly payments equal to 1.25% of promo purchase amount - Until Paid in Full3`, 
      oneCol: `Estimated payoff period 132 months. See below for additional information.`, 
      twoCol: `6No monthly interest will be charged on the promo purchase if you pay the promo purchase amount in full within 18 Months. If you do not, monthly interest will be charged on the promo purchase from the purchase date. Fixed monthly payments are required equal to 2.50% of the highest balance applicable to this promo purchase until paid in full. The fixed monthly payment will be rounded to the next highest whole dollar and may be higher than the minimum payment that would be required if the purchase was a non-promotional purchase. Depending on purchase amount, promotion length and payment allocation, the required minimum monthly payments may or may not pay off purchase by end of promotional period. Regular account terms apply to non-promotional purchases and, after promotion ends, to promotional purchases, except that the fixed monthly payment will continue to be required until the promo purchase is paid in full.` 
    }
  ]

  return (
    <div id={id} className={`${mobile ? 'mobileFinanceOptionWrapper' : "financeOptionWrapper"}`}> 
      <Title text="Financing options" />
      {/* <div style={{ marginTop: mobile ? '10px' : '0px' }} className='subCenterText'>
        From concept to completion, we will provide you with the home improvement guidance needed to navigate your way through our design/ build process.
      </div> */}
      <div className='textFinance'>
        <div className="Forty"> 
          <img src={sinchrony} alt="Synchrony banking logo" width="100%" /> 
        </div>
        <h2 className='titleFinance'>Promotional financing options<sup>1</sup> to complete your dream project.</h2>
        <p style={{ textIndent: '30px' }}>You don't have to let a small budget keep you from getting what you really want or need. That's why Butkov offers promotional financing options when your purchase is made with a Visa, MasterCard, Amex, and Discover credit card issued by Synchrony Bank.</p><br/>
        <p style={{ textIndent: '30px' }}>Synchrony Bank is one of the premier consumer financial services companies in the United States with over 80 years of retail heritage, and today is the largest provider of private label credit cards in the United States<sup>2</sup>.</p><br/>
        <p style={{ textIndent: '30px' }}>Synchrony banking logo Synchrony Bank can provide you with promotional financing options for major purchases, offering you a budget-friendly way to help you get what you really want or need. Expand your purchasing power and convenience with:</p><br/>
        <ul style={{ marginLeft: '40px', marginBottom: '20px' }} >
          <li>A simple application process, and fast credit decisions</li>
          <li>Unsecured, revolving credit lines</li>
          <li>Open credit line for future purchases</li>
          <li>Promotional financing options1</li>
          <li>Convenient monthly payment options</li>
          <li>On-line account management</li>  
        </ul> 
        <div>To learn more about promotional financing options from Synchrony Financial, please contact Butkov at 612-516-0263 or info@butkovconstruction.com</div><br/>
        <div className="subText"><sup>1 </sup><div style={{ fontSize: '18px', paddingLeft: '3px' }}> Subject to credit approval. Minimum monthly payments required. See store for details.</div></div>
        <div className="subText"><sup>2 </sup><div style={{ fontSize: '18px', paddingLeft: '3px' }}> Based on purchase volume and receivables.</div></div><br/>
        <div>For all promotions: Qualifying purchase must be made with your Visa, MasterCard, Amex, or Discover credit card issued by Synchrony Bank and a $29 account activation fee will apply and be charged at the time first purchase posts to account. For new accounts: Purchase APR is 26.99%; Minimum Monthly Interest Charge is $2. Existing cardholders should see their credit card agreement for their applicable terms. Subject to credit approval.</div><br/>
        <div>If your application is approved, or, if you are an existing cardholder, the below promotional financing options may be available.</div>
      </div>
      <div className='planContainer'>
        { 
          plans.map((item,key)=>(<PlanCard mobile={mobile} key={key} title={item.title} subtitle={item.subTitle} twoCol={item.twoCol} oneCol={item.oneCol} />))
        } 
      </div>  
    </div>
  );
}
