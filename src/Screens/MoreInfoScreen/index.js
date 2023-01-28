import React,{useEffect} from 'react'; 
import { useLocation } from 'react-router-dom';
import './style.css'; 
import FAQBlock from '../../components/FAQBlock';
import ButkovProcessBlock from '../../components/ButkovProcessBlock';
import FinanceOptionBlock from '../../components/FinanceOptionBlock';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors'; 

export default function MoreInfoScreen(props) {
  
  const mobile = useSelector(app.mobile); 
  const {state, hash} = useLocation()
  const id = state?.id;

  useEffect(()=>{
    console.log(state,hash)
    if(id){ 
        const targetElement = document.getElementById(id) 
        targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [state,hash])
  
  return (
    <div className={`${mobile ? "mobileCommercialBlockScreen" : "commercialBlockscreen"}`} > 
      <FAQBlock id={'faq'}/>  
      <ButkovProcessBlock id={'butkovprocess'} /> 
      <FinanceOptionBlock id={'financingoptions'} /> 
    </div>
  );
}
 