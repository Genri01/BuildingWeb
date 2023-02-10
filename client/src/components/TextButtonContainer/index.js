import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { modalMiniQuestion } from '../../redux/actions/app'
import images from '../../assets/images';
import './style.css';

export default function TextButtonContainer(props) {
  const { mobile, text, textbtn, nobtn } = props;
  const br = text.split('<br/>'); 

  const dispatch = useDispatch();

  return (
    <div className={`${mobile ? 'mobileTextButtonWrapper' : "textButtonContainerWrapper"}`}>
      {
        mobile ?
        <> 
        </> :  
        <>
          <div className='textButtonTextContainer'>
            <div className='textButtonText'  > 
              { br.map((item,k)=>(<React.Fragment key={k}>{item}<br/></React.Fragment>)) } 
            </div>
          </div>
          {(!nobtn && <div className="textButtonContainer">  
          <Button onClick={() => { dispatch(modalMiniQuestion(true)) }} className="textButton" block type="primary">{textbtn}</Button>  
          </div> )} 
        </> 
      }
    </div>
  );
}
