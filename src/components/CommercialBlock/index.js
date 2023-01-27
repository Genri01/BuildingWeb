import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import CommercialCart from '../CommercialCart';
import { modalFullQuestion } from '../../redux/actions/app'
import images from '../../assets/images';
import './style.css';

export default function CommercialBlock(props) {
  const { mobile } = props;
  const { building, flooring, concrete, door, electrical, roofing, steel, structural, ofice } = images;
const dispatch = useDispatch()

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
    <div className={`${mobile ? 'mobileCommercialWrapper' : "commercialWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>  
          <div className='commercialTitleWraper'></div>
          <div className='commercialItemWraper'>
            {
              ordedr_work.map((item, i) => (<CommercialCart owerlay={true} key={i} img={item.img} title={item.title} />))
            } 
          </div>
          <div className="commercialBtnContainer">  
            <Button  onClick={() => { dispatch(modalFullQuestion(true)); }} className="commercialBotton" block type="primary">Bid Request or Estimate Request</Button>  
          </div> 
        </>
      }
    </div>
  );
}
