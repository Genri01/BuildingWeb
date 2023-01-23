import React, { useEffect, useState } from "react"; 
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"; 
import { pages } from '../../redux/selectors';
import { Menu, Button } from 'antd';
import images from '../../assets/images';
import { change_page, change_link } from '../../redux/actions/app';
import './style.css';
 
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
   
function BackgroundVideo(props) { 

  // const { page, mobile } = props;
  const { Logo_black }= images;
 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const page = useSelector(pages.page); 
  const activeLink = useSelector(pages.activeLink); 
 
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
      navigate(`moreinfo/${e.key}`)
    } else {
    navigate(`${e.key}`)
    }
    dispatch(change_page(e.key));
  };
 
  const items = [
    {
      label: 'Residentional',
      key: 'residentional', 
      children: [ 
        {
          label: 'Bathroom remodel',
          key: 'bathroom',
        },
        {
          label: 'Kitchen remodel',
          key: 'kitchen',
        }, 
        {
          label: 'Basment remodel',
          key: 'basment',
        },
        {
          label: 'Roofing',
          key: 'roofing',
        }, 
        {
          label: 'Tile installation',
          key: 'tile',
        } 
      ],
    },
    {
      label: 'Commercial',
      key: 'commercial',  
    },
    {
      label: 'More info',
      key: 'info',  
      children: [ 
        {
          label: 'FAQ\'s',
          key: 'faq',
        },
        {
          label: 'Butkov\'s process',
          key: 'butkovprocess',
        }, 
        {
          label: 'Financing options',
          key: 'financingoptions',
        },
        {
          label: 'Rewiews',
          key: 'rewiews',
        }, 
        {
          label: 'Blog',
          key: 'blog',
        } 
      ],
    },
    {
      label: 'Contact',
      key: 'contact',  
    },
    {
      label: 'Login',
      key: 'login',  
    }, 
  ];

 let menupagetitle = 'Let us proffessionally do your project';
 let menupagesubtitle = 'Butter is residentional / commercial remodeling company';
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
    break;
  case 'butkovprocess':
    menupagetitle = '';
    menupagesubtitle = '';
    hidenheader = 'none';
    break;
  case 'financingoptions':
    menupagetitle = '';
    menupagesubtitle = '';
    hidenheader = 'none';
    break;
  case 'rewiews':
    menupagetitle = '';
    menupagesubtitle = '';
    hidenheader = 'none';
    break;
  case 'blog':
    menupagetitle = 'Commercial';
    menupagesubtitle = ''; 
    hidenheader = 'none';
    break;
  case 'contact':
    menupagetitle = 'Contact Us';
    menupagesubtitle = '';
    hidenheader = 'flex'; 
    break;
  case 'login':
    menupagetitle = '';
    menupagesubtitle = '';
    hidenheader = 'none';
    break;

  default:
    break;
}
  
  return (
    <div style={{ height: page === 'main' ? '700px' : 'auto' }} className='backgroundWrapper'>  
      <video autoPlay loop muted className="backgroundVideo">
        <source src={activeLink}  type="video/mp4" />
      </video>  
      <div className="backgroundTopContainer">
        <div className='backgroundLableContainer' onClick={() => { localStorage.setItem('page','/');  dispatch(change_page('/')); navigate('/')}}> 
          <img src={Logo_black} alt="profile" width="380" height="93" />
        </div> 
        <div className="backgroundCatigories"> 
          <Menu onClick={onClick} selectedKeys={[page]} mode="horizontal" items={items} />
        </div> 
      </div> 
      <div style={{ 
        display: hidenheader  
      }} className="backgroundBottomContainer">
        <div className="headerBottomTitleContainer"> 
          <div className="bottomHeaderTitle">
            <h1>{menupagetitle}</h1>
          </div>
          <div className="bottomHeaderSubTitle">
            <div>{menupagesubtitle}</div>
          </div> 
          <div className="bottomHeaderButtonContainer">
            <Button className="bottonTitle" type="primary">CONTACT NOW</Button>  
          </div>
        </div>
        <div className="headerBottomClearContainer" />
      </div> 
    </div>
  );
}

export default BackgroundVideo;