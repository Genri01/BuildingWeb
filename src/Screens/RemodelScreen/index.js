import React from 'react';
import './style.css';
import RemodelBlock from '../../components/RemodelBlock';
import { useSelector } from 'react-redux';
import { app } from '../../redux/selectors';

export default function RemodelScreen(props) {
  
  const mobile = useSelector(app.mobile);

    return (
      <div className={`${mobile ? "mobileCommercialBlockScreen" : "commercialBlockscreen"}`} >
        <RemodelBlock mobile={mobile} />
      </div>
    );
}
 