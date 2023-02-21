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
      name: 'Absolutely stunning craftsmanship! Definitely recommend to use for bathroom remodels! Thank you for being extremely meticulous on details, really appreciate your time flexibility as well!',
      title: 'Lacey O.'
    },  
    {
      name: 'Throughout my project with them, they have exhibited professionalism and was so please with their work. They have lots of integrity and provided quality work. Will definitely use them again ',
      title: 'Rebecca A.'
    },  
    {
      name: 'My shower re-tile project turned out great. There was excellent communication throughout and they were flexible working with me on materials and the tile pattern. Installers were prompt, respectful of my space, and did a great job.',
      title: 'Andy L.'
    },  
    {
      name: `Great company with great people! I couldn't be happier with the work they did on my home. Would highly recommend them.`,
      title: 'Elina B.'
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