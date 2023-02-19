import React, { Fragment, useState } from 'react'; 
import { Button, Image } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import CommercialCart from '../CommercialCart';
import Title from '../Title'; 
import './style.css'; 

export default function CartContainer(props) {
  const { mobile, text, carts } = props; 
  const [visible, setVisible] = useState(false);
  return (
    <div className={`${mobile ? 'mobileCommercialWrapper' : "cartContainerWrapper"}`}> 
      <Title size={mobile ? 31 : 35} mobile={mobile} text={text} />  
      {/* <div className='cartContainerTitleWraper'></div> */}
      <div style={{ flexDirection: mobile ? 'column' : 'row', marginTop: mobile ? '80px' : '0px'}} className='cartContainerItemWraper'> 
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
        {
          carts.map((item, i) => (
          <CommercialCart mobile={mobile} key={i} img={item.img} title={item.title} /> 
          ))
        } 
        </Image.PreviewGroup> 
      </div>  
    </div>
  );
}
