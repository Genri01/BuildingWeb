import React,{useEffect} from 'react'; 
import { useLocation } from 'react-router-dom';
import './style.css'; 
import FAQBlock from '../../components/FAQBlock';
import ButkovProcessBlock from '../../components/ButkovProcessBlock';
import FinanceOptionBlock from '../../components/FinanceOptionBlock';
import TextButtonContainer from '../../components/TextButtonContainer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { app } from '../../redux/selectors'; 

export default function MoreInfoScreen(props) {
  
  const { mobile } = props; 
  const {state, hash} = useLocation()
  const id = state?.id;

  useEffect(()=>{ 
    if(id){ 
      // if(id === 'financingoptions' && mobile) { 
      //   console.log('mobile smooth')
      //   window.scrollTo({
      //     top: 2750,
      //     behavior: 'smooth',
      //   }) 
      // } else {
        const targetElement = document.getElementById(id) 
        targetElement?.scrollIntoView({behavior: 'smooth'})
      // }
    }
  }, [state,hash])
  
  return (
    <div> 
      <FAQBlock mobile={mobile} id={'faq'}/>  
      <ButkovProcessBlock mobile={mobile} id={'butkovprocess'} /> 
      <FinanceOptionBlock mobile={mobile} id={'financingoptions'} />
      <TextButtonContainer
        text = ''
        textbtn = "Contact us"
        mobile={mobile}
      /> 
    </div>
  );
}
 