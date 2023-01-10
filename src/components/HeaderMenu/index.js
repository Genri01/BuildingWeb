import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import { Link, useNavigate,useLocation } from 'react-router-dom'; 
import { header } from '../../redux/selectors';
import { change_page } from '../../redux/actions/app';
import { setPopupMainMsg } from '../../redux/actions/cart';
import { Button, Space, Menu } from 'antd';
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  const { statuy, cart, Logo_black }= images;
  const { userName, page, mobile, isAuth} = props;
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(change_page(localStorage.getItem('page'))); 
    dispatch(setPopupMainMsg(''));
  },[page]); 

  const {hash, key} = useLocation();

  useEffect(()=>{
      if(hash){
         const targetElement = document.getElementById(hash.substring(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])


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
      <div className={` ${ mobile ? 'mobileHeaderWrapper' : 'headerWrapper' }`}>
        { mobile ? 
          <>
            <div className='mobileTopHeader'>
            {/* <Menu >
              { headers_tab.map(({ key, rout, title }) => {
                st = key === page ? 'active' : ''
                return <Link key={key} to={rout}><div id={key} className={`tabMobile ${st}`} onClick={(e) => { onClick(e); }}>{title}</div></Link>
              })}  
            </Menu> */}
            </div>
            <Link className='cartMobile' to={"/cart"}><img src={cart} alt="profile" width="47" height="47" /></Link>
            <div className='mobileBottomHeader'>
            <div className='mobileLableContainer'>
              <div className='textLogoContainer'>
                <div className="mobileLogo">Imperial</div>
                <div className="subLogo">Изготовление памятников</div>
              </div>
              <img style={{marginLeft: '15px' }} src={statuy} alt="profile" width="40" height="40" />
            </div> 
            </div>
          </>
          :
          <>
            <div className='topHeader'> 
              <div className='referallink'>
                <Link to={"/"}>READY TO EARN $250? LEAVE A REFERRAL TODAY!</Link>
              </div>
              <Space wrap> 
                <Button type="text">GET ON ESTEMATE</Button> 
              </Space>
            </div>
            <div className='bottomHeader'>
              <div className="bottomHeaderTopContainer">
                <div className='lableContainer'> 
                  <img src={Logo_black} alt="profile" width="380" height="93" />
                </div> 
                <div className="catigories"> 
                  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div> 
              </div>
              <div className="bottomHeaderBottomContainer">
                <div></div>
              </div>
            </div>
          </> 
        }
      </div>
    );
}

export default HeaderMenu;