import React,{ useEffect, useState } from 'react';
import { Button, Image } from 'antd';  
import TestimonialsSlider from '../../components/TestimonialsSlider'
import { Swiper, SwiperSlide } from "swiper/react"; 
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import CommercialCart from '../../components/CommercialCart'; 
import images from '../../assets/images';   
import "swiper/swiper-bundle.min.css"; 

import './style.css';

export default function TestimonialsSwipe(props) {
    
  const { mobile, testimonItems, num } = props;
  const { star, starfill } = images;

  const { coments, reviews, stars, title, img, imageArray } = testimonItems;
  
    const [mySwiper, setMySwiper] = useState('');   
    const [visible, setVisible] = useState(false);
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
          <div className={`${mobile ? 'mobileTopTestimonialsSwipeContainer' : 'topTestimonialsSwipeContainer'}`}>
            <div className='testimonialsSwipeImgContainer'>
              <img width={mobile? (num === 3 ? 100 : 150) : (num === 3 ? 200 : 250)} src={img} alt="img" />
            </div> 
            <div className={`${mobile ? 'mobileTestimonialsSwipeContainerInfo' : 'testimonialsSwipeContainerInfo'}`}>
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
          
          <div  style={{ flexDirection: mobile ? 'column' : 'row', marginTop: mobile ? '80px' : '0px'}}  className='cartContainerItemWraper'> 
            <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
              {
                imageArray.map((item, i) => (
                <CommercialCart mobile={mobile} key={i} img={item.img} title={item.title} /> 
                ))
              } 
            </Image.PreviewGroup> 
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
                  <TestimonialsSlider mobile={mobile} items={coment} /> 
                </SwiperSlide>
              ))
            }  
          </Swiper> 
        </div>  
      </div>
    );
}
