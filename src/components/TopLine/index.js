import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { Button, Space } from 'antd'; 

import './style.css';

function TopLine(props) { 

  const { linkTitle, btnTxt, mobile } = props; 
  return ( 
    <div className='topHeader'> 
      <div style={{ fontSize: mobile ? '10px' : '13px' }} className='referallink'>
        <Link to={"/"}>{ linkTitle }</Link>
      </div>
      <Space wrap> 
        <Button type="text" className={mobile ? 'mobileBtn' : ''}>{ btnTxt }</Button> 
      </Space>
    </div>
  );
}

export default TopLine;