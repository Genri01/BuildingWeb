import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import { modalFullQuestion } from '../../redux/actions/app'
import images from '../../assets/images';
import './style.css';

export default function TwoBtnContainer(props) {
  const { mobile, textone, texttwo } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={`${mobile ? 'mobileTextButtonWrapper' : "twoBtnContainerWrapper"}`}>
      {
        mobile ?
        <> 
        </> :  
        <>
          <div className="twoBtnContainer">  
            <Button className="texttwoBtn"  onClick={() => {navigate(`/moreinfo/faq`); }} block type="primary">{textone}</Button>  
            <Button className="texttwoBtn"  onClick={() => { dispatch(modalFullQuestion(true)); }} block type="primary">{texttwo}</Button>  
          </div>
        </> 
      }
    </div>
  );
}
