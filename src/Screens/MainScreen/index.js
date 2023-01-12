import React, { useState, useEffect } from 'react';
import './style.css';

import WhatWeDoBlock from '../../components/WhatWeDoBlock'
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
 

function MainScreen(props) {

  const { mobile } = props;
 
  const dispatch = useDispatch();

    return (
      <div className="main_screen" > 
        <WhatWeDoBlock customclass="mobileArrow" />
        <Footer mobile={mobile} /> 
      </div>
    );
}

export default MainScreen;
