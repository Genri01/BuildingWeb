import React from "react";  
import images from '../../assets/images';
import WhyPeopleChooseItem from '../WhyPeopleChooseItem'
import Title from '../Title';
import './style.css';
 
function WhyPeopleChooseBlock(props) { 

  const { videoSource, mobile } = props;
  const { price, reliable, quality, service }= images;
 
    return (
      <div className='whyPeopleChooseWrapper'>   
        <div className={`${mobile ? "mobileWhyPeopleChooseTopContainer" : 'whyPeopleChooseTopContainer'}`}>
          <video autoPlay loop muted className={`${mobile ? "mobileWhyPeopleChooseVideo" : 'whyPeopleChooseVideo'}`}>
            <source src={videoSource}  type="video/mp4" />
          </video> 
          <Title mobile={mobile} center={mobile ? true : undefined} text="Why our customers choose us" under color="#fff" />  
        </div> 
        <div className={`${mobile ? "mobileWhyPeopleChooseBottomContainer" : 'whyPeopleChooseBottomContainer'}`}>
          <div className="whyPeopleChooseInfoContainer">
            <WhyPeopleChooseItem style={{ paddingLeft: '67px' }} customclass="reverse" icon={price} title='The Best Price' text='Get more than expected<br/> Provide quote of our competitors and we will give you<br/>a better deal'/>
            <WhyPeopleChooseItem style={{ paddingLeft: '176px' }} iconsize="iconsize" customclass="reverse"  icon={service} title='Great Customer Service' text='24/7 customer support<br/>Personal approach for each customer<br/>Free design service'/>
          </div> 
          <div className="whyPeopleChooseInfoContainer">
            <WhyPeopleChooseItem icon={quality} title='Excellent Quality' text='Experienced and Certified PROs<br/>Innovative technology & equipment'/>
            <WhyPeopleChooseItem icon={reliable} title='Reliable Company' text='Up to two years warranty<br/>99% only high rated reviews<br/>Licensed, Bonded,<br/>Insured Prescreened & Trusted<br/>PROs 11 years in business'/>
          </div> 
        </div> 
      </div>
    );
}

export default WhyPeopleChooseBlock;