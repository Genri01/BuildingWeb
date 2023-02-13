
import React from 'react'; 
import { Button, message } from 'antd';
import { useDispatch, useSelector  } from 'react-redux';
import { setComent, sendMiniServer } from '../../redux/actions/questions'
import { modalMiniQuestion } from '../../redux/actions/app'
import { questions } from '../../redux/selectors'; 
import './style.css';

export default function ContactUsForm(props) {

  const { 
    disabled,
    name,
    email,
    phone 
  } = props;
  // backgroundColor: disabled.style.backgroundColor, color: 'white'
  const dispatch = useDispatch();  
  const coment = useSelector(questions.coment); 
  return (
    <div className="contactUsFormWrapper"> 
      <div className='titleContactUsFormContainer'>
        <div className='titleContactUsForm textContactUsForm'>Project Ditails:</div>
      </div>
      <div className='contactUsFormContainer'>
        <textarea value={coment} onChange={(e) => { dispatch(setComent(e.target.value))}} className='comments' placeholder="" />
      </div>
      <Button 
        onClick={async() => {  
          const result = await sendMiniServer({ name, email, phone, coment },dispatch);
          message.success(result);
          dispatch(modalMiniQuestion(false)) 
        }}
        style={{ width: '240px', height: '40px', backgroundColor: `#a50f12`, color: `#fff`  }} 
        type="primary"
      >Submit</Button>
    </div>
  );
}
 