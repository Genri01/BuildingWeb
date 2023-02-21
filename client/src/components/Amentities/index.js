import React from 'react'; 
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import Title from '../Title';
import './style.css';

export default function Amentities(props) {
  const { mobile, textone, texttwo } = props;
  const antitiesArr = [
    [
      `Frameless Glass Shower Doors`,
      `Curbless Showers`,
      `Heated Bathroom & Shower Floors`,
      `Handheld or RainHead Shower heads`,
      `Built in Niches and Shelves`
    ],
    [
      `Custom Shower Benches`,
      `Semi Frameless Glass Shower Enclosures`,
      `Glass, Natural Stone, Porcelain and Ceramic Tile`,
      `Sconces Lights, Over the Mirror and Can Lights`
    ],
    [
      `Granite, Marble, Quartz Countertops`,
      `Swing and Sliding Shower Doors`,
      `Floating, Free Standing and Built In Vanities`,
      `Drop in, Vessel and Under mount Sinks`
    ], 
  ]
  return (
    <div className={`${mobile ? 'mobileAmentitiesWrapper' : "amentitiesWrapper"}`}> 
      <div className='amentitiesTopContainer'>
        <Title text="Bathroom Amentities" /> 
        <div className='amentitiesTextContainer'>
          <div className='amentitiesTextSubTitle'>
            There are many factors to consider when designing and remodeling your bathroom. Below are some amenities that we have completed for our clients:
          </div> 
        </div> 
      </div> 
      <div className={mobile ? 'mobileAmentitiesBottomContainer' : 'amentitiesBottomContainer'}>
        {
          antitiesArr.map((i,k) => {  
            return (
              <div key={k} className={mobile ? 'mobileAmentitiesColumn' : 'amentitiesColumn'}>
                <ul>
                  {
                    i.map((item,key) => {
                      return (<li type="square" className='amentitiesLi' key={key}>{item}</li>)
                    })
                  }
                </ul>
              </div>  
            )
          }) 
        }
      </div>   
    </div>
  );
}
