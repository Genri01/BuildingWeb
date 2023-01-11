import React, { useState } from 'react'; 
import { Menu, Button } from 'antd';
import images from '../../assets/images';
import './style.css';

function BackgroundVideo(props) { 

  const { videoSource } = props;
  const { Logo_black }= images;

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: 'Residentional',
      key: 'residentional', 
      children: [ 
        {
          label: 'Bathroom remodel',
          key: 'setting:1',
        },
        {
          label: 'Kitchen remodel',
          key: 'setting:2',
        }, 
        {
          label: 'Basment remodel',
          key: 'setting:3',
        },
        {
          label: 'Roofing',
          key: 'setting:4',
        }, 
        {
          label: 'Tile installation',
          key: 'setting:5',
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
      <div className='backgroundWrapper'>  
        <video autoPlay loop muted className="backgroundVideo">
          <source src={videoSource}  type="video/mp4" />
        </video>  
        <div className="backgroundTopContainer">
          <div className='backgroundLableContainer'> 
            <img src={Logo_black} alt="profile" width="380" height="93" />
          </div> 
          <div className="backgroundCatigories"> 
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          </div> 
        </div> 
        <div className="backgroundBottomContainer">
          <div className="headerBottomTitleContainer"> 
            <div className="bottomHeaderTitle">
              <h1>Let us proffessionally do your project</h1>
            </div>
            <div className="bottomHeaderSubTitle">
              <p>Butter is residentional / commercial remodeling company</p>
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