import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import TextButtonContainer from '../TextButtonContainer';
import CartContainer from '../CartContainer';
import TwoBtnContainer from '../TwoBtnContainer';
import Amentities from '../Amentities';
import Title from '../Title';
import { Collapse } from 'antd';


import './style.css';

export default function FAQBlock(props) {
  const { mobile, id } = props;
  const { Panel } = Collapse;
  const collapseItems = [
    {
      header: `Are your crews legally registered and insured?`,
      text: 'Yes, all of our crews are well trained. We have dedicated crews for each type of service who know the unique challenges and expectations of each type of service.'  
    },
    
    {
      header: `Do you accept credit cards?`,
      text: 'Yes, we accept credit cards. You will be charged a 3.5% service fee when paying with a credit card. You may also pay with or check for no additional charge.'  
    },
    
    {
      header: `Do you have any hidden fees or costs`,
      text: 'No. We offer upfront pricing which means you approve the budget before we start. We aim to provide quality service at prices you can afford with no surprises or added fees. '  
    },
    
    {
      header: `Do you work with insurance?`,
      text: 'Yes, we work with insurance. We specialize in insurance claim restoration projects and work with all insurance companies to make your home looking new again.'  
    },
    
    {
      header: `How long does a bathroom remodeling project typically take?`,
      text: 'Every project varies, but you can typically expect the renovation to take between one to three weeks from start to finish.'  
    },  
    {
      header: `Who takes care of the garbage disposal?`,
      text: `We do not consider the disposal cost, however, we provide disposal options for your project. The companies we use for disposal have a life-load option, where the container comes to your house for 30 minutes, we load it and send it on its way.

      The disposal choice will be indicated inside the contract, and you will able to add this while you sign the contact.`  
    },  
    {
      header: `Should I be at home?`,
      text: `We do more to protect and keep you safe, all our crew are screened, and background checked.

      Most of our customers prefer to be at home while we are doing work, but that’s a personal decision. There is 15% of customers who cannot be at home, so in this case, customers provide the most comfortable access for them. On the first day, we discuss all work scope and all details, preferences, and project. While the project is in process, we have great customer support available. At the end of the project, we walk through with you to make sure project performed in the best professional manner in the line with your expectations and desires.`  
    }, 
    {
      header: `What if I’m not satisfied with the job? `,
      text: 'We provide a 100% satisfaction guarantee. Whether is it a major repair or a minor fix, we will do it right.'  
    }, 
    
  ];  
  return (
    <div id={id} className={`${mobile ? 'mobileFaqWrapper' : "faqWrapper"}`}> 
      <Title text="General FAQ" />
      <div className='listContainer'>
        <Collapse accordion>
          {
            collapseItems.map((item, key) => (
              <Panel header={item.header} key={key}>
                <p>{item.text}</p>
              </Panel>
            ))
          } 
        </Collapse>
      </div>  
    </div>
  );
}
