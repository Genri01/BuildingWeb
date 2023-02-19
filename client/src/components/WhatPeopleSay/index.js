import React, { useEffect, useState } from 'react'; 
import Title from '../Title';
import FeedbackItem from '../FeedbackItem';  
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import "swiper/swiper-bundle.min.css"; 
import './style.css';   
 
export default function WhatPeopleSay(props) {

  const { customclass, mobile } = props;
 
  const [mySwiper, setMySwiper] = useState(''); 

  useEffect(() => {
    setMySwiper(document.querySelector(`.mySwiper`).swiper);  
  },[mySwiper])

  
  const sliderWalk = [
    {
      name: 'They were so easy to work with! Incredibly prompt, efficient and hard working. The detail and quality of work exceeded my expectations. They completed the design exactly as I asked. Elina was a great partner making sure there was clear communication and that I knew exactly what I needed for supplies based on my design interests. We plan to hire them again for another project.',
      title: 'Heather richer'
    },  
    {
      name: 'Amazing quality of their service just impresses me! From the first call to the end,Very professional and reliable people!',
      title: 'robert brown'
    },  
    {
      name: 'Excellent service and quality!  Our flooring professional was timely, polite and clean.  We are very happy with our results!',
      title: 'sara slack'
    },  
    {
      name: 'Wonderful work!  Very pleased with how quick and well the job was done!  I will definitely be recommending and using them again.',
      title: 'shelly devenport'
    },  
]
   
SwiperCore.use([EffectFade, Autoplay]);

  return (
    <div className={`whatPeopleSayWrapper ${customclass === undefined ? '' : customclass}`}>
      <Title mobile={mobile} center={mobile ? true : undefined} text="What people say about us" under top="90px"  />
      <div style={{ height: mobile ? '60%' : '100%'}} className='whatPeopleSayFeedbackContainer'> 
        <div className='whatPeopleSaySwiperContainer'>  
          <Swiper 
                autoplay={{
                    delay: 3000
                }} 
                spaceBetween={30}
                effect="fade" 
                className="mySwiper">
            { 
              sliderWalk.map((el,id) => (
              <SwiperSlide key={id}>  
                <FeedbackItem mobile={mobile} name={el.title} feed={el.name} cool={5} />
              </SwiperSlide>
              ))
            }  
          </Swiper> 
        </div> 
      </div>
    </div>
  );
}