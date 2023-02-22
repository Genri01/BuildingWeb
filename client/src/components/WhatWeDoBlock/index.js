import React, { useEffect, useState } from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import {useRef} from "react";
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

  const { customclass, mobile } = props;
 
  const [mySwiper, setMySwiper] = useState('');

  useEffect(() => {
    setMySwiper(document.querySelector(`.whatWeDoSwiper`).swiper); 
  },[mySwiper])

  // useEffect(() => {

  //   document.getElementsByClassName('.swiper-container')[0].on('mouseenter', function (e) {
  //     mySwiper.autoplay.stop();
  // })
  // document.getElementsByClassName('.swiper-container')[0].on('mouseleave', function (e) {
  //   mySwiper.autoplay.start();
  // }) 
  // },[mySwiper])

 
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
    arrowlb,
    bathroom_1,
    kitchen_1,
    basement_1,
    roofing_1,
    tile_1
  } = images;
 
  const sliderWalk = [
    {
      // img: 'https://get-flooring.com/wp-content/uploads/2020/09/carpet2.jpg',
      img: bathroom_1,
      title: 'Bathroom remodel', 
      link: 'bathroom'
    }, 
    {
      img: kitchen_1,
      // img: 'https://get-flooring.com/wp-content/uploads/2020/09/fireplace.jpg',
      title: 'Kitchens somodel', 
      link: 'kitchen'
    }, 
    {
      img: basement_1,
      // img: 'https://get-flooring.com/wp-content/uploads/2020/09/refinishing-hardwood.jpg',
      title: 'Basement remodel', 
      link: 'basment'
    }, 
    {
      img: roofing_1,
      // img: 'https://get-flooring.com/wp-content/uploads/2020/09/backspash.jpg',
      title: 'Roofing', 
      link: 'roofing'
    }, 
    {
      img: tile_1,
      // img: 'https://get-flooring.com/wp-content/uploads/2020/08/tile-1.jpg',
      title: 'Tile instalation', 
      link: 'tile'
    }, 
]
 

// когда наводишь мышку свайпер останавливаеться
 
    const swiperRefLocal = useRef()

    const handleMouseEnter = () => {
        swiperRefLocal.current.swiper.autoplay.stop()
    };

    const handleMouseLeave = () => {
        swiperRefLocal.current.swiper.autoplay.start()
    };

 
  return (
    <div className={`whatWeDoWrapper ${customclass === undefined ? '' : customclass}`}>
      <Title mobile={mobile} text="What we do" under top="90px" /> 
      <div className='sliderContainer'>
        <div className='wrapperArrow' onClick={(e) => moveLeft(mySwiper)}>
          <img src={arrowl} alt="s"  width={40} height={40}/>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${mobile ? 'mobileWhatWeDoSwiperContainer' : 'whatWeDoSwiperContainer' }`}> 
          <Swiper
            loop={true}
            ref={swiperRefLocal}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, 
              pauseOnMouseEnter: true,
            }} 
            modules={[Autoplay]}
            className="whatWeDoSwiper" 
            slidesPerView={mobile ? 1 : 3}  
            onSwiper={() => {}} 
            spaceBetween={10} 
          >
            { 
              sliderWalk.map((el,id) => (
              <SwiperSlide key={id}>
                <WhatWeDoCard mobile={mobile} img={el.img} title={el.title} link={el.link} /> 
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