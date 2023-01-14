import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import Title from '../Title';
import FeedbackItem from '../FeedbackItem'; 
// import required modules
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import './style.css'; 

export default function WhatPeopleSay(props) {

  const { customclass } = props;
 
  const [mySwiper, setMySwiper] = useState('');

  useEffect(() => {
    setMySwiper(document.querySelector(`.mySwiper`).swiper); 
  },[mySwiper])

 
  function moveLeft(mySwiper) {
    mySwiper.slidePrev();
  }
  
  function moveRight(mySwiper) {
    mySwiper.slideNext()
  }

  const {
    view_1, 
    arrowr,
    arrowl,
  } = images;

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
      <Title text="What people say about us" under top="90px" />
      <div className='whatPeopleSayFeedbackContainer'>
        {/* <div className='wrapperArrow' onClick={(e) => moveLeft(mySwiper)}>
          <img src={arrowl} alt="s"  width={40} height={40}/>
        </div> */}
        <div className='whatPeopleSaySwiperContainer'> 
          <Swiper
            modules={[EffectFade, Autoplay,  Navigation, Pagination]}
            loop={true}
            centeredSlides={true}
            // effect={"fade"} 
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}   
            pagination={{
              clickable: true,
            }}
            className="mySwiper"  
            onSwiper={() => {}}   
          >
            { 
              sliderWalk.map((el,id) => (
              <SwiperSlide key={id}>  
                <FeedbackItem name={el.title} subname={el.name} cool={id} />
              </SwiperSlide>
              ))
            }  
          </Swiper>
        </div>
        {/* <div className='wrapperArrow' onClick={(e) => moveRight(mySwiper)}>
          <img src={arrowr} alt="arrowr" width={40} height={40} />
        </div>  */}
      </div>
    </div>
  );
}