import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css'; 

export default function WhatWeDoBlock(props) {

  const { customclass } = props;
 
  const [mySwiper, setMySwiper] = useState('');

  useEffect(() => {
    // setMySwiper(document.querySelector(`.mySwiper`).swiper); 
  },[mySwiper])


  function moveLeft(mySwiper) {
    mySwiper.slidePrev();
  }
  
  function moveRight(mySwiper) {
    mySwiper.slideNext()
  }

  const {
    view_1,
    view_2,
    view_3,
    view_4,
    view_5,
    view_6,
    view_7,
    view_8,
    view_9,
    view_10,
    arrowr,
    arrowl,
  } = images;

  const sliderWalk = [
    {
      img: view_1,
    },
    {
      img: view_2,
    },
    {
      img: view_3,
    },
    {
      img: view_4,
    },
    {
      img: view_5,
    },
    {
      img: view_6,
    },
    {
      img: view_7,
    },
    {
      img: view_8,
    },
    {
      img: view_9,
    },
    {
      img: view_10,
    },
]
 
  return (
    <div className={`whatWeDoWrapper ${customclass === undefined ? '' : customclass}`}>
      <div className='whatWeDoTitleContainer'>
        <div className='whatWeDoTitle'>What we do</div>
        <div className='whatWeDoTitleLine'></div>
      </div>

      <div className='wrapperArrow' onClick={(e) => moveLeft(mySwiper)}>
        <img src={arrowl} alt="s"  width={40} height={40}/>
      </div>
      <div className='swiper_container'> 
        {/* <Swiper
          spaceBetween={10}
          slidesPerView={5} 
          onSwiper={() => {}}
          className={`mySwiper`}
        >
          { 
            sliderWalk.map((el,id) => (
            <SwiperSlide key={id}>
              <CardsMonument img={el.img} price="345" title="sdfdfdsd" />
            </SwiperSlide>
            ))
          }  
        </Swiper> */}
      </div>
      <div className='wrapperArrow' onClick={(e) => moveRight(mySwiper)}>
        <img src={arrowr} alt="arrowr" width={40} height={40} />
      </div>
    </div>
  );
}