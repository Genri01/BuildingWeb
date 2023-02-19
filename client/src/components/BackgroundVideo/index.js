import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom'
import { Menu, Button } from 'antd';
import { useDispatch } from "react-redux";  
import images from '../../assets/images';
import { change_page, modalMiniQuestion, } from '../../redux/actions/app';
import './style.css';
 
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined, 
} from '@ant-design/icons';  


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function BackgroundVideo(props) { 

  const { mobile, page, pagesArr, clickMenu } = props;
  const { 
    Logo_black,
    login,
    comercial,
    residentional,
    contact,
    moreinfo, 
  }= images;
 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
    
  const [collapsed, setCollapsed] = useState(true);
 
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
 
  const items = [
    getItem('Residentional', 'residentional', mobile ? <img width={27} height={30} src={residentional} alt="img" /> : <></>, [ 
      getItem('Bathroom remodel', 'bathroom'),
      getItem('Kitchen remodel', 'kitchen'),
      getItem('Basment remodel', 'basment'),
      getItem('Roofing', 'roofing'),
      getItem('Tile installation', 'tile')
    ],),
    getItem('Commercial', 'commercial', mobile ? <img src={comercial} alt="img" /> : <></> ),
    getItem('More info', 'info', mobile ? <img width={27} height={30} src={moreinfo} alt="img" /> : <></>,[ 
      getItem('FAQ\'s', 'faq'),
      getItem('Butkov\'s process', 'butkovprocess'),
      getItem('Financing options', 'financingoptions'),
      getItem('Rewiews', 'rewiews'),
      getItem('Blog', 'blog'), 
    ],), 
    getItem('Contact', 'contact', mobile ? <img width={27} height={30} src={contact} alt="img" /> : <></>),
    getItem('Login', 'welcome', mobile ? <img width={27} height={30} src={login} alt="img" /> : <></>,[ 
      getItem('Login', 'login'),
      getItem('Sign up', 'registration') 
    ],)
  ];
 
  return (
    <div className='backgroundWrapper'>  
      <video autoPlay loop muted className={`${mobile ? "mobileBackgroundVideo" : 'backgroundVideo'}`}>
        <source src={`https://static.videezy.com/system/resources/previews/000/${pagesArr[page]?.videolink}`}  type="video/mp4" />
      </video>  
      <div className={`${mobile ? "mobileBackgroundTopContainer" : "backgroundTopContainer"}`}>
      {
        mobile && (<Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            width: '60px',
            height: '40px', 
            marginTop: '10px',
            marginLeft: '6px'
          }}
        >
          { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
        </Button>)
      }
        <div className={`${mobile ? "mobileBackgroundLableContainer" : 'backgroundLableContainer'}`} 
          onClick={() => { 
            localStorage.setItem('page','/');
            dispatch(change_page('/')); 
            navigate('/');
            window.location.reload();
          }}> 
          <div className={`${mobile ? "mobilelogoB" : 'logoB'}`}>B</div>
          <img src={Logo_black} className="logoImg" alt="profile" />
        </div> 
        <div className={`${mobile ? "mobileBackgroundCatigories" : "backgroundCatigories"}`}> 
          <Menu
          onClick={clickMenu}
          selectedKeys={[page]}
          mode={`${mobile ? 'inline' : 'horizontal'}`}
          items={items}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']} 
          theme={`${mobile ? "dark" : 'light'}`} 
          inlineCollapsed={collapsed} 
          />
        </div> 
      </div> 
      <div className={`${mobile ? "mobileBackgroundBottomContainer" : "backgroundBottomContainer"}`}>
        <div className={`${mobile ? "mobileHeaderBottomTitleContainer" : "headerBottomTitleContainer"}`}> 
          <div className="bottomHeaderTitle">
            <h1>{pagesArr[page]?.pagetitle}</h1>
          </div>
          <div className="bottomHeaderSubTitle">
            <div>{pagesArr[page]?.subtitle}</div>
          </div> 
          <div className="bottomHeaderButtonContainer">
            <Button onClick={() => { dispatch(modalMiniQuestion(true)); }} className="bottonTitle" type="primary">CONTACT NOW</Button>  
          </div>
        </div>
        { 
         !mobile && <div className="headerBottomClearContainer" />
        }
      </div> 
    </div>
  );
}

export default BackgroundVideo;