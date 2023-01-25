import React from 'react'; 
import './style.css';
import FAQBlock from '../../components/FAQBlock';
import ButkovProcessBlock from '../../components/ButkovProcessBlock';
import FinanceOptionBlock from '../../components/FinanceOptionBlock';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors'; 

export default function MoreInfoScreen(props) {
  
  const mobile = useSelector(app.mobile); 
 
  return (
    <div className={`${mobile ? "mobileCommercialBlockScreen" : "commercialBlockscreen"}`} >
      <FAQBlock /> 
      <ButkovProcessBlock /> 
      <FinanceOptionBlock /> 
    </div>
  );
}
 