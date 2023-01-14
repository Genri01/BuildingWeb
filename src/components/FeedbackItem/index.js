import React from 'react';
import images from '../../assets/images';
import './style.css';

function FeedbackItem(props) {
    const { name, subname, feed, cool, mobile } = props;
    const {star,starfill,profile } = images;

    let starCount = cool < 5 ? Number(cool) : 5;
    let starArr = [];
    let stop = 5 - starCount

    for (let ind = 0; ind < stop; ind++) {
      starArr.push(star);
    }
    for (let index = 0; index < starCount; index++) {
      starArr.push(starfill);
    }


    return (
        <div className={`${mobile ? 'mobileFeedbackItemWrapper' : 'feedbackItemWrapper'}`}> 
          <div className='feedbackItemNameWrapper'>
            <div className='feedbackItemSubName'>{subname}</div>
          </div> 
          <div className='feedbackItemName'>{name}</div> 
          <div className='feedbackItemStarWrapper'>
            <div className='starWrapper'>
              {
                starArr.map((item,num) => <img key={num} className='star' src={item} alt="star" />)
              }
            </div>
          </div>
        </div>
    );
}

export default FeedbackItem;
