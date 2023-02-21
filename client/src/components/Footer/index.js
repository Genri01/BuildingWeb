import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images'; 
import './style.css';

function Footer(props) {
  const { visa, mastercard, paypal, lic, phone, email, payments } = images;
  const { mobile } = props;

  const dispatch = useDispatch();

    return (
      <div className="footer_container">
        <div style={{ paddingTop: mobile ? '20px' : '50px' }} className="footer_up"> 
          <div style={{ flexDirection: mobile ? 'column' : 'row', paddingTop: mobile ? '20px' : '40px' }} className="footer_desription_section_left">
            {
              mobile && <div className="mobileWorkingContainer">
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`} >Contact Us</div>
                {/* <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >869 E Schaumburg rd, #321,</div>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`} >Schaumburg IL  60194</div> */}
              </div>
            }
            {
              !mobile && <>
                <div className='footer_titleTxt'>Contact Us</div>
                {/* <div className='footer_titleTxt'>869 E Schaumburg rd, #321,</div> */}
                {/* <div className='footer_titleTxt'>Schaumburg IL  60194</div> */}
              </>
            }  
            <div style={{ flexDirection: mobile ? 'row' : 'column', alignItems: mobile ? 'center' : 'flex-start', }} className='mobileContainerLi'>
              <div style={{ width: mobile ? '45%' : '100%',justifyContent: 'flex-start' }} className='lineInfoContainer'>
                <img className="mobile-i-plain" src={phone} alt="phone" />
                <div style={{ width: mobile ? 'auto' : 'auto', margin: '0px' }} className="he-text"> 
                  <span><a style={{ width: mobile ? '220px' : 'auto',margin: mobile ? '0' : '0 36px 18px 0' }} className="footer_txt_hover" href="tel:+1-61-251-602-63">612-516-0263</a></span>
                </div>
              </div>
              <div style={{ width: mobile ? '55%' : '100%' }} className='lineInfoContainer'>
                <img className="mobile-i-plain" src={email} alt="time" />
                <div style={{ width: mobile ? '100%' : 'auto' }} className="he-text"> 
                    <span>
                      <a style={{ wordBreak: mobile ? 'break-all' : 'break-word',fontSize: mobile ? '12px' : '18px', margin: mobile ? '0' : '0 6px 18px 0' }} className="footer_txt_hover" href="mailto:info@butkovconstruction.com">info@butkovconstruction.com</a>
                    </span>
                </div>
              </div>
              <div style={{ width: mobile ? '55%' : '100%' }} className='lineInfoContainer'>
                {/* <img className="mobile-i-plain" src={lic} alt="time" /> */}
                <div style={{ width: mobile ? '100%' : 'auto' }} className="he-text"> 
                    <span>
                      <a style={{ wordBreak: mobile ? 'break-all' : 'break-word',fontSize: mobile ? '12px' : '18px', margin: mobile ? '0' : '0 6px 18px 0' }} className="footer_txt_hover" >Lis# BC800584</a>
                    </span>
                </div>
              </div>
            </div> 
          </div>
          <div style={{ flexDirection: mobile ? 'row' : 'column',alignItems: mobile ? 'center' : 'flex-start', paddingTop: mobile ? '30px' : '40px' }} className="footer_desription_section_center">
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`}>Important Links:</div>
            {/* <Link to={"/terms"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Terms&condditions</div></Link> */}
            <Link state={{ id: 'police' }} to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Privacy Policy</div></Link>
            {/* <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>Services</div></Link> */}
            <Link state={{ id: 'faq' }} to={"/moreinfo/faq"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>FAQ</div></Link>
            {/* <Link to={"/police"}><div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt_hover'}`}>About Us</div></Link> */}
          </div>
          <div style={{ flexDirection: mobile ? 'column' : 'row', paddingTop: mobile ? '10px' : '40px' }} className="footer_desription_section_right">
            {
              mobile && <div className="mobileWorkingContainer">
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`}>Working Hours:</div>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Mon-Fri       8am-5pm</div>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Sat        8am-12pm</div>
              </div>
            }
            {
              !mobile && <>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_titleTxt'}`}>Working Hours:</div>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Mon-Fri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am-5pm</div>
                <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt'}`}>Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8am-12pm</div>
              </>
            }
            <div className={`${mobile ? 'mobile-footer_txt' : 'footer_txt owerflowTxt'}`}>We are active almost 24/7 online. If you have any questions about our services please don’t hesitate to call or email us.</div>
          </div>
        </div>
        <div className={`${mobile ? 'mobileFooter_down' : 'footer_down'}`}>
          <div className="coperait_container">
            <div className={`${mobile ? 'mobile-coperait_txt' : 'coperait_txt'}`}>© All rights reserved.</div> 
          </div>
          <div className="visa_container">
            <img src={payments} alt="visa" width="270" height="50" />
            {/* <img src={visa} alt="visa" width="49" height="17" />
            <img src={mastercard} alt="mastercard" width="35" height="23" />
            <img src={paypal} alt="mastercaerd" width="40" height="35" />
            <img src={paypal1} alt="masteercard" width="40" height="35" /> */}
          </div>
        </div>
      </div>
    );
}

export default Footer;
