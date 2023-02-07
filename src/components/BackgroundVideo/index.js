import React, { useEffect, useState } from "react"; 
import { useNavigate } from 'react-router-dom'
import { Menu, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux"; 
import { pages } from '../../redux/selectors'; 
import images from '../../assets/images';
import { change_page, change_link, modalMiniQuestion, modalLogin, modalRegistration } from '../../redux/actions/app';
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

  const { mobile } = props;
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
  
  const page = useSelector(pages.page); 
  const activeLink = useSelector(pages.activeLink); 

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e) => {  
    // localStorage.setItem('page',e.key)
    
    if(e.key === 'bathroom' ||
    e.key === 'kitchen' ||
    e.key === 'roofing' ||
    e.key === 'basment' ||
    e.key === 'tile' ) {
      navigate(`residentional/${e.key}`)
    } else if(e.key === 'butkovprocess' ||
    e.key === 'financingoptions' ||
    e.key === 'rewiews' ||
    e.key === 'blog' ||
    e.key === 'faq' ) {
      navigate(`moreinfo/${e.key}`,{ state: { id: e.key} })
    } else if(e.key === 'login') { 
      dispatch(modalLogin(true))
    }  else if(e.key === 'registration') { 
      dispatch(modalRegistration(true))
    } else {
    navigate(`${e.key}`)
    }
    dispatch(change_page(e.key));
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
    getItem('Welcome', 'welcome', mobile ? <img width={27} height={30} src={login} alt="img" /> : <></>,[ 
      getItem('Login', 'login'),
      getItem('Sign up', 'registration') 
    ],)
  ];
    
 let menupagetitle = 'Let us proffessionally do your project';
 let menupagesubtitle = 'Butkov is residentional / commercial remodeling company';
 let hidenheader = 'flex'; 

switch (page) { 
  
  case 'bathroom':
    menupagetitle = 'Bathroom Remodel';
    menupagesubtitle = '';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/049/168/original/27-05-2020104.mp4`)); 
    break;
  case 'kitchen':
    menupagetitle = 'Kitchen Remodel';
    menupagesubtitle = '';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/037/504/original/C069.mp4`)); 
    break;
  case 'roofing':
    menupagetitle = 'Roofing';
    menupagesubtitle = '';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/050/888/original/MVI_7139-Rain-Roof.mp4`)); 
    break;
  case 'basment':
    menupagetitle = 'Basment Remodel';
    menupagesubtitle = '';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/021/226/original/A106_09021627_C022.mp4`));  
    break;
  case 'tile':
    menupagetitle = 'Tile Installation';
    menupagesubtitle = '';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/056/106/original/demolition-hammer-breaking-the-tiled-wallM.mp4`)); 
    break;
  case 'commercial':
    menupagetitle = 'Commercial';
    menupagesubtitle = 'Our commercial constraction services includes:';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/006/903/original/Scientists4.mp4`)); 
    break;
  case 'faq':
    menupagetitle = 'More Info';
    menupagesubtitle = 'FAQ';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/018/914/original/ICON-VERSION9.mp4`));
    break;
  case 'butkovprocess':
    menupagetitle = 'More Info';
    menupagesubtitle = 'Butkov\'s process';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/018/914/original/ICON-VERSION9.mp4`));
    break;
  case 'financingoptions':
    menupagetitle = 'More Info';
    menupagesubtitle = 'Financing options';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/018/914/original/ICON-VERSION9.mp4`));
    break;
  case 'rewiews':
    menupagetitle = 'Testimonials';
    menupagesubtitle = 'Get to know us through the experiences of our clients.';
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/018/914/original/ICON-VERSION9.mp4`));
    break;
  case 'blog':
    menupagetitle = 'Blog';
    menupagesubtitle = ''; 
    hidenheader = 'flex';
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/013/979/original/keys_web-blog-social.mp4`));  
    break;
  case 'contact':
    menupagetitle = 'Contact Us';
    menupagesubtitle = '';
    hidenheader = 'flex'; 
    dispatch(change_link(`https://static.videezy.com/system/resources/previews/000/018/367/original/ICON-VERSION4.mp4`));
    break;
  case 'login':
    menupagetitle = 'Login';
    menupagesubtitle = '';
    hidenheader = 'flex';
    break;

  default:
    break;
}
 
  return (
    <div style={{ height: page === 'main' ? '700px' : 'auto' }} className='backgroundWrapper'>  
      <video autoPlay loop muted className={`${mobile ? "mobileBackgroundVideo" : 'backgroundVideo'}`}>
        <source src={activeLink}  type="video/mp4" />
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
        <div className={`${mobile ? "mobileBackgroundLableContainer" : 'backgroundLableContainer'}`} onClick={() => { localStorage.setItem('page','/');  dispatch(change_page('/')); navigate('/')}}> 
          <img src={Logo_black} alt="profile" width="380" height="93" />
        </div> 
        <div className={`${mobile ? "mobileBackgroundCatigories" : "backgroundCatigories"}`}> 
          <Menu
          onClick={onClick}
          selectedKeys={[page]}
          mode={`${mobile ? 'inline' : 'horizontal'}`}
          items={items}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']} 
          theme={`${mobile ? "dark" : 'light'}`} 
          inlineCollapsed={`${mobile ? collapsed : false}`} 
          />
        </div> 
      </div> 
      <div style={{ 
        display: hidenheader  
      }} className={`${mobile ? "mobileBackgroundBottomContainer" : "backgroundBottomContainer"}`}>
        <div className={`${mobile ? "mobileHeaderBottomTitleContainer" : "headerBottomTitleContainer"}`}> 
          <div className="bottomHeaderTitle">
            <h1>{menupagetitle}</h1>
          </div>
          <div className="bottomHeaderSubTitle">
            <div>{menupagesubtitle}</div>
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