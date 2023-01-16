import React from "react";  
import images from '../../assets/images';
import WhyPeopleChooseItem from '../WhyPeopleChooseItem'
import Title from '../Title';
import './style.css';
 
function WhyPeopleChooseBlock(props) { 

  const { videoSource } = props;
  const { price, reliable, quality, service }= images;
 
    return (
      <div className='whyPeopleChooseWrapper'>   
        <div className="whyPeopleChooseTopContainer">
          <video autoPlay loop muted className="whyPeopleChooseVideo">
            <source src={videoSource}  type="video/mp4" />
          </video> 
          <Title text="Why our customers choose us" under color="#fff" />  
        </div> 
        <div className="whyPeopleChooseBottomContainer">
          <div className="whyPeopleChooseInfoContainer">
            <WhyPeopleChooseItem customclass="reverse" icon={price} title='The Best Price' text='Get more than expected Provide quote of our competitors and we will give you a better deal'/>
            <WhyPeopleChooseItem iconsize="iconsize" customclass="reverse"  icon={service} title='Great Customer Service' text='24/7 customer support Personal approach for each customer Free design service'/>
          </div> 
          <div className="whyPeopleChooseInfoContainer">
            <WhyPeopleChooseItem icon={quality} title='Excellent Quality' text='Experienced and Certified PROs Innovative technology & equipment'/>
            <WhyPeopleChooseItem icon={reliable} title='Reliable Company' text='Up to two years warranty 99% only high rated reviews Licensed, Bonded, Insured Prescreened & Trusted PROs 11 years in business'/>
          </div> 
        </div> 
      </div>
    );
}

export default WhyPeopleChooseBlock;