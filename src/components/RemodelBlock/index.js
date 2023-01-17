import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import TextButtonContainer from '../TextButtonContainer';
import CartContainer from '../CartContainer';
import TwoBtnContainer from '../TwoBtnContainer';
import Amentities from '../Amentities';
import images from '../../assets/images';
import './style.css';

export default function RemodelBlock(props) {
  const { mobile } = props;
  const { building, flooring, concrete, door, electrical, roofing, steel, structural, ofice } = images;
  const ordedr_work = [
    {
      title: 'Building improvements & Renovations',
      img: building
    },
    {
      title: 'Commercial Roofing',
      img: roofing 
    },
    {
      title: 'Commercial Flooring',
      img: flooring
    },
    {
      title: 'Structural Repair',
      img: structural
    },
    {
      title: 'Concrete Work',
      img: concrete 
    },
    {
      title: 'Electrical & Plumbing & HVAC',
      img: electrical 
    },
    {
      title: 'Office Build Outs',
      img: ofice
    },
    {
      title: 'Steel Framing',
      img: steel 
    },
    {
      title: 'Door & Window Install & Repair',
      img: door
    },
    
  ]
  return (
    <div className={`${mobile ? 'mobileRemodalWrapper' : "remodalWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>  
          <TextButtonContainer
            text={`
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
              Do you dream about
            `}
            textbtn="Scedule your free consultat"
          />
          <CartContainer
            text="Bathroom design ideas that may fitsyour home:"
            carts={[
            {
              title: 'Building improvements & Renovations',
              img: building
            },
            {
              title: 'Commercial Roofing',
              img: roofing 
            },
            {
              title: 'Commercial Flooring',
              img: flooring
            },
            {
              title: 'Structural Repair',
              img: structural
            },
            {
              title: 'Concrete Work',
              img: concrete 
            },
            {
              title: 'Electrical & Plumbing & HVAC',
              img: electrical 
            } 
          ]} />
          <Amentities />
          <TwoBtnContainer textone="faq" texttwo="faq" />
        </>
      }
    </div>
  );
}
