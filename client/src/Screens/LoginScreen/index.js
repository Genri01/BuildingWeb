import React from 'react';
import WhatWeDoBlock from '../../components/WhatWeDoBlock'
import WhyPeopleChooseBlock from '../../components/WhyPeopleChooseBlock'
import WhatPeopleSay from '../../components/WhatPeopleSay'
import AwardsBlock from '../../components/AwardsBlock';   

import './style.css';
  
function LoginScreen(props) {
 
  const { mobile } = props;
 
    return (
      <div className="main_screen" > 
        <WhatWeDoBlock customclass="mobileArrow" mobile={mobile} />
        <WhyPeopleChooseBlock videoSource="https://static.videezy.com/system/resources/previews/000/034/673/original/MT029.mp4" mobile={mobile} />
        <WhatPeopleSay mobile={mobile} />
        <AwardsBlock mobile={mobile} />  
      </div>
    );
}

export default LoginScreen;
