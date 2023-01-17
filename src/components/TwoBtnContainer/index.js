import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import images from '../../assets/images';
import './style.css';

export default function TwoBtnContainer(props) {
  const { mobile, textone, texttwo } = props;
 
  return (
    <div className={`${mobile ? 'mobileTextButtonWrapper' : "twoBtnContainerWrapper"}`}>
      {
        mobile ?
        <> 
        </> :  
        <>
          <div className="twoBtnContainer">  
            <Button className="texttwoBtn" block type="primary">{textone}</Button>  
            <Button className="texttwoBtn" block type="primary">{texttwo}</Button>  
          </div>
        </> 
      }
    </div>
  );
}
