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
  const { mobile } = props;
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
      text: 'No'  
    },
    
    {
      header: `Do you work with insurance?`,
      text: 'Yes, we work with insurance. We specialize in insurance claim restoration projects and work with all insurance companies to make your home looking new again.'  
    },
    
    {
      header: `How long does a remodel take?`,
      text: 'Roofing projects typically take 1-2 days to complete.'  
    }, 
    
  ];  
  return (
    <div className={`${mobile ? 'mobileFaqWrapper' : "faqWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>  
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
        </>
      }
    </div>
  );
}
