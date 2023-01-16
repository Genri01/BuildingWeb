import React, { useEffect, useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { Menu, Button } from 'antd';
import images from '../../assets/images';
import { change_page } from '../../redux/actions/app';
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

  const { videoSource, page, mobile } = props;
  const { Logo_black }= images;

 const dispatch = useDispatch();



  const onClick = (e) => { 
    // localStorage.setItem('page',e.key)
     dispatch(change_page(e.key))
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
      label: 'Contraction',
      key: 'contraction',  
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

    return (
      <div style={{ height: page === 'main' ? '700px' : 'auto' }} className='backgroundWrapper'>  
        <video autoPlay loop muted className="backgroundVideo">
          <source src={videoSource}  type="video/mp4" />
        </video>  
        <div className="backgroundTopContainer">
          <div className='backgroundLableContainer' onClick={() => {   dispatch(change_page('main'))}}> 
            <img src={Logo_black} alt="profile" width="380" height="93" />
          </div> 
          <div className="backgroundCatigories"> 
            <Menu onClick={onClick} selectedKeys={[page]} mode="horizontal" items={items} />
          </div> 
        </div> 
        <div style={{ display: page !== 'main' && page !== 'contraction' ? 'none' : 'flex' }} className="backgroundBottomContainer">
          <div className="headerBottomTitleContainer"> 
            <div className="bottomHeaderTitle">
              <h1>{`${ page === 'contraction' ? 'Contraction' : 'Let us proffessionally do your project' }`}</h1>
            </div>
            <div className="bottomHeaderSubTitle">
              <div>{`${ page === 'contraction' ? 'Our commercial constraction services includes:' : 'Butter is residentional / commercial remodeling company' }`}</div>
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