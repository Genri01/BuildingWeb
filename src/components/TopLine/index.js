import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { Button, Space } from 'antd'; 

import './style.css';

function TopLine(props) { 

  const { linkTitle, btnTxt } = props;
  
  return ( 
    <div className='topHeader'> 
      <div className='referallink'>
        <Link to={"/"}>{ linkTitle }</Link>
      </div>
      <Space wrap> 
        <Button type="text">{ btnTxt }</Button> 
      </Space>
    </div>
  );
}

export default TopLine;