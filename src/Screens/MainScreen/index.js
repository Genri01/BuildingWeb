import React from 'react';
import WhatWeDoBlock from '../../components/WhatWeDoBlock'
import WhyPeopleChooseBlock from '../../components/WhyPeopleChooseBlock'
import WhatPeopleSay from '../../components/WhatPeopleSay'
import AwardsBlock from '../../components/AwardsBlock';  
import Footer from '../../components/Footer'; 

import './style.css';
  
function MainScreen(props) {
 
  const { mobile } = props;
 
    return (
      <div className="main_screen" > 
        <WhatWeDoBlock customclass="mobileArrow" mobile={mobile} />
        <WhyPeopleChooseBlock videoSource="https://static.videezy.com/system/resources/previews/000/053/131/original/Untitled00001099.mp4" mobile={mobile} />
        <WhatPeopleSay mobile={mobile} />
        <AwardsBlock mobile={mobile} /> 
        <Footer mobile={mobile} /> 
      </div>
    );
}

export default MainScreen;
