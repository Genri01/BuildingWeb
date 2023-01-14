import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react'; 

// import required modules
import { Autoplay } from "swiper";

import WhatWeDoCard from '../WhatWeDoCard'; 
import Title from '../Title'; 
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
    setMySwiper(document.querySelector(`.whatWeDoSwiper`).swiper); 
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
      img: 'https://get-flooring.com/wp-content/uploads/2020/09/carpet2.jpg',
      title: 'Bathroom remodel'
    }, 
    {
      img: 'https://get-flooring.com/wp-content/uploads/2020/09/fireplace.jpg',
      title: 'Kitchens somodel'
    }, 
    {
      img: 'https://get-flooring.com/wp-content/uploads/2020/09/refinishing-hardwood.jpg',
      title: 'Basment remodel'
    }, 
    {
      img: 'https://get-flooring.com/wp-content/uploads/2020/09/backspash.jpg',
      title: 'Roofing'
    }, 
    {
      img: 'https://get-flooring.com/wp-content/uploads/2020/08/tile-1.jpg',
      title: 'Tile instalation'
    }, 
]
 
  return (
    <div className={`whatWeDoWrapper ${customclass === undefined ? '' : customclass}`}>
      <Title text="What we do" under top="90px" /> 
      <div className='sliderContainer'>
        <div className='wrapperArrow' onClick={(e) => moveLeft(mySwiper)}>
          <img src={arrowl} alt="s"  width={40} height={40}/>
        </div>
        <div className='whatWeDoSwiperContainer'> 
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }} 
            modules={[Autoplay]}
            className="whatWeDoSwiper" 
            slidesPerView={3}  
            onSwiper={() => {}} 
            spaceBetween={10}
       
          >
            { 
              sliderWalk.map((el,id) => (
              <SwiperSlide key={id}>
                <WhatWeDoCard img={el.img} title={el.title} />
              </SwiperSlide>
              ))
            }  
          </Swiper>
        </div>
        <div className='wrapperArrow' onClick={(e) => moveRight(mySwiper)}>
          <img src={arrowr} alt="arrowr" width={40} height={40} />
        </div> 
      </div>
    </div>
  );
}