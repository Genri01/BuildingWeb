import React from 'react'; 
import './style.css';

function TestimonialsSlider(props) {
    const { items, mobile } = props;
    const { coment, name } = items;
 
    return (
      <div className={`${mobile ? 'mobileTestimonialsSliderWrapper' : 'testimonialsSliderWrapper'}`}> 
        <div className='testimonialsSliderNameWrapper'>
          <div className='testimonialsSliderSubName'>{coment}</div>
        </div> 
        <div className='testimonialsSliderName'>{name}</div>  
      </div>
    );
}

export default TestimonialsSlider;
