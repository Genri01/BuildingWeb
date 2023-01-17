import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import images from '../../assets/images';
import './style.css';

export default function TextButtonContainer(props) {
  const { mobile, text, textbtn, nobtn } = props;
 
  return (
    <div className={`${mobile ? 'mobileTextButtonWrapper' : "textButtonContainerWrapper"}`}>
      {
        mobile ?
        <> 
        </> :  
        <>
          <div className='textButtonTextContainer'>
            <div className='textButtonText'>
              {text} 
            </div>
          </div>
          {(!nobtn && <div className="textButtonContainer">  
          <Button className="textButton" block type="primary">{textbtn}</Button>  
          </div> )} 
        </> 
      }
    </div>
  );
}
