import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import Title from '../Title';
import './style.css';

export default function WeDoBlock(props) {
  const { mobile } = props;
  const antitiesArr = [
    [
      `Showers`,
      `Backsplashes`,
      `Tile floor & Walls`
    ], 
    [
      `Fireplaces`,
      `Natural stone`,
      `Large format tile` 
    ], 
  ]
  return (
    <div className={`${mobile ? 'mobileTextButtonWrapper' : "weDoBlockWrapper"}`}>
      {
        mobile ?
        <> 
        </> :  
        <> 
          <div className='weDoBlockTopContainer'>
            <div className="weDoBlockVideoContainer">
              <video autoPlay loop muted className="weDoBlockVideo">
                <source src="https://static.videezy.com/system/resources/previews/000/053/131/original/Untitled00001099.mp4"  type="video/mp4" />
              </video> 
              <Title text="We do" under color="#fff" />  
            </div>  
            <div className='weDoBlockTextContainer'>
              <div className='weDoBlockTextSubTitle'>
                We will show up on time and will always be available for any questions you may have. We offer services from demolition to finish in all tile and natural stone applications includes:
              </div> 
            </div> 
          </div> 
          <div className='weDoBlockBottomContainer'>
            {
              antitiesArr.map((i,k) => {  
                return (
                  <div key={k} className='weDoBlockColumn'>
                    <ul>
                      {
                        i.map((item,key) => {
                          return (<li type="square" className='weDoBlockLi' key={key}>{item}</li>)
                        })
                      }
                    </ul>
                  </div>  
                )
              }) 
            }
          </div>  
        </> 
      }
    </div>
  );
}
