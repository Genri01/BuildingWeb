import React from 'react'; 
import { useDispatch } from 'react-redux';  
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { Button, Space } from 'antd'; 
import { modalFullQuestion } from '../../redux/actions/app'
import './style.css';

function TopLine(props) { 

  const { linkTitle, btnTxt, mobile } = props;  
  const dispatch = useDispatch();


  return ( 
    <div className='topHeader'> 
      <div style={{ fontSize: mobile ? '10px' : '13px' }} className='referallink'>
        <Link state={{ id: 'ready' }} to={"/readytoearn/ready"}>{ linkTitle }</Link>
      </div>
      <Space wrap> 
        <Button type="text" onClick={() => { dispatch(modalFullQuestion(true)); }} className={mobile ? 'mobileBtn' : ''}>{ btnTxt }</Button> 
      </Space>
    </div>
  );
}

export default TopLine;