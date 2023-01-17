import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import CommercialCart from '../CommercialCart';
import Title from '../Title'; 
import './style.css'; 

export default function CartContainer(props) {
  const { mobile, text, carts } = props; 
 
  return (
    <div className={`${mobile ? 'mobileCommercialWrapper' : "cartContainerWrapper"}`}>
      {
        mobile ?
        <> 
        </> :
        <>  
          <Title text={text} />  
          <div className='cartContainerTitleWraper'></div>
          <div className='cartContainerItemWraper'>
            {
              carts.map((item, i) => (<CommercialCart key={i} img={item.img} title={item.title} />))
            } 
          </div> 
        </>
      }
    </div>
  );
}
