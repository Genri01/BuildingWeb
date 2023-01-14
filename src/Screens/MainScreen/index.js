import React, { useState, useEffect } from 'react';
import './style.css';

import WhatWeDoBlock from '../../components/WhatWeDoBlock'
import WhyPeopleChooseBlock from '../../components/WhyPeopleChooseBlock'
import WhatPeopleSay from '../../components/WhatPeopleSay'
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
 

function MainScreen(props) {

  const { mobile } = props;
 
  const dispatch = useDispatch();

    return (
      <div className="main_screen" >  
        <WhatWeDoBlock customclass="mobileArrow" />
        <WhyPeopleChooseBlock videoSource="https://static.videezy.com/system/resources/previews/000/053/131/original/Untitled00001099.mp4" />
        <WhatPeopleSay mobile={mobile} />
        <Footer mobile={mobile} /> 
      </div>
    );
}

export default MainScreen;
