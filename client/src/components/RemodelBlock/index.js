import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import TextButtonContainer from '../TextButtonContainer';
import CartContainer from '../CartContainer';
import TwoBtnContainer from '../TwoBtnContainer';
import Amentities from '../Amentities';
import WeDoBlock from '../WeDoBlock';

import './style.css';

export default function RemodelBlock(props) {
  const { mobile, titleText, amentities, titlecart, textone, texttwo, cartsItem, wedoblock } = props;
 
  return (
    <div className={`${mobile ? 'mobileRemodalWrapper' : "remodalWrapper"}`}> 
      <TextButtonContainer
        mobile = { mobile }
        text = { titleText }
        textbtn = "Scedule your free consultat"
      />
      {( wedoblock && <WeDoBlock mobile = { mobile } /> )}
      <CartContainer
        text={ titlecart }
        carts={ cartsItem } 
        mobile = { mobile }
      />
      {( amentities && <Amentities mobile = { mobile } /> )} 
      <TwoBtnContainer mobile = { mobile } textone={textone} texttwo={texttwo} />  
    </div>
  );
}
