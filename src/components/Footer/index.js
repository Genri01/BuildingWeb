import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images'; 
import './style.css';

function Footer(props) {
  const { visa, mastercard, paypal, paypal1, phone, email } = images;
  const { mobile } = props;

  const dispatch = useDispatch();

    return (
      <div className="footer_container">
        <div className="footer_up"> 
          <div className="footer_desription_section_left">
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`} >Contact Us</div>
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >869 E Schaumburg rd, #321,</div>
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Schaumburg IL  60194</div>
            <ul className="mobile-header-extras"> 
                <li>
                    <div className='mobileContainerLi'>
                      <div className='lineInfoContainer'>
                        <img className="mobile-i-plain" src={phone} alt="phone" />
                        <div className="he-text"> 
                          <span className="footer_txt_hover">331-244-7711</span>
                        </div>
                      </div>
                      <div className='lineInfoContainer'>
                        <img className="mobile-i-plain" src={email} alt="time" />
                        <div className="he-text"> 
                            <span className="footer_txt_hover">contact@get-flooring.com</span>
                        </div>
                      </div>
                    </div>
                </li> 
            </ul>
          </div>
          <div className="footer_desription_section_center">
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`}>Important Links</div>
            <Link to={"/#answer"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Terms&condditions</div></Link>
            <Link to={"/#about"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Privacy Policy</div></Link>
            <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Services</div></Link>
            <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>FAQ</div></Link>
            <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>About Us</div></Link>
          </div>
          <div className="footer_desription_section_right">
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`}>Working Hours</div>
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Mon-Fri . . . . . . 8am-5pm</div>
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Sat . . . . . . 8am-12pm</div>
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt owerflowTxt'}`}>We are active almost 24/7 online. If you have any questions about our services please don’t hesitate to call or email us.</div>
          </div>
        </div>
        <div className="footer_down">
          <div className="coperait_container">
            <div className={`${mobile ? 'mobile-coperait_txt' : 'coperait_txt'}`}>© All rights reserved.</div> 
          </div>
          <div className="visa_container">
            <img src={visa} alt="visa" width="49" height="17" />
            <img src={mastercard} alt="mastercard" width="35" height="23" />
            <img src={paypal} alt="mastercaerd" width="40" height="35" />
            <img src={paypal1} alt="masteercard" width="40" height="35" />
          </div>
        </div>
      </div>
    );
}

export default Footer;
