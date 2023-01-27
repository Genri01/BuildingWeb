import React,{ useEffect, useState } from 'react';
import { Input, Space, Checkbox, Button } from 'antd';  
import TestimonialsSlider from '../../components/TestimonialsSlider'
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import Title from '../../components/Title'; 
import images from '../../assets/images';   
import "swiper/swiper-bundle.min.css"; 

import './style.css';

export default function TestimonialsSwipe(props) {
    
  const { mobile, testimonItems, num } = props;
  const { star, starfill } = images;

  const { coments, reviews, stars, title, img } = testimonItems;
  
    const [mySwiper, setMySwiper] = useState('');   
  
    useEffect(() => { 
      setMySwiper(document.querySelector(`.mySwiper_${num}`).swiper);   
    },[])

    let starCount = stars < 5 ? Number(stars) : 5;
    let starArr = [];
    let stop = 5 - starCount

    for (let ind = 0; ind < stop; ind++) {
      starArr.push(star);
    }
    for (let index = 0; index < starCount; index++) {
      starArr.push(starfill);
    } 
 
    SwiperCore.use([EffectFade, Autoplay]); 
 

    return (
      <div className={`${mobile ? 'mobileTestimonialsSwipeWrapper' : 'testimonialsSwipeWrapper'}`}>   
          <div className='topTestimonialsSwipeContainer'>
            <div className='testimonialsSwipeImgContainer'>
              <img width={num === 0 ? 200 : 250} src={img} alt="img" />
            </div> 
            <div className='testimonialsSwipeContainerInfo'>
              <h2 className='testimonialsSwipeTitle'>{title}</h2>
              <div className='testimonialsSwipeStarWrapper'>
                { 
                  starArr.map((item,n) => <img key={n} className='stars' src={item} alt="star" />)
                }
              </div> 
              <div className='testimonialsSwipeReviews'>
                <div className='textStars'>{`${stars} STARS`}</div>
                <div className='textStarsDelimeter'/> 
                <div className='textReviews'>{`${reviews} REVIEWS`}</div>
              </div>
            </div>
          </div>
          <div className='whatPeopleSaySwiperContainer'>  
          <Swiper 
            autoplay={{
                delay: 4000
            }} 
            spaceBetween={30}
            effect="fade" 
            className={`mySwiper_${num}`}
          >
            { 
              coments.map((coment,id) => (
                <SwiperSlide key={id}>   
                  <TestimonialsSlider items={coment} /> 
                </SwiperSlide>
              ))
            }  
          </Swiper> 
        </div>  
      </div>
    );
}
