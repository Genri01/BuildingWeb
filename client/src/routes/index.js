import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommercialScreen from '../Screens/CommercialScreen/index';
import MoreInfoScreen from '../Screens/MoreInfoScreen/index'; 
import MainScreen from '../Screens/MainScreen/index';
import ContactScreen from '../Screens/ContactScreen/index'; 
import RemodelScreen from '../Screens/RemodelScreen/index'; 
import BlogCardsScreen from '../Screens/BlogCardsScreen/index'; 
import BlogPageScreen from '../Screens/BlogPageScreen/index'; 
import ReadyScreen from '../Screens/ReadyScreen/index'; 
import LoginScreen from '../Screens/LoginScreen/index'; 
import TestimonialsScreen from '../Screens/TestimonialsScreen/index'; 
import PoliceScreen from '../Screens/PoliceScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/> 
        <Route path='/residentional/:remodal' element={<RemodelScreen mobile={mobile} />}/> 
        <Route path='/commercial' element={<CommercialScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/blog' element={<BlogCardsScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/blog/:page' element={<BlogPageScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/rewiews' element={<TestimonialsScreen mobile={mobile} />}/> 
        <Route path='/contact' element={<ContactScreen mobile={mobile} />}/> 
        <Route path='/:moreinfo/:item' element={<MoreInfoScreen mobile={mobile} />}/>  
        <Route path='/readytoearn/:id' element={<ReadyScreen mobile={mobile} />}/>  
        <Route path='/login' element={<LoginScreen mobile={mobile} />}/>  
        <Route path='/:police' element={<PoliceScreen mobile={mobile} />}/>  
      </Routes>
    </main>
  )
} 

export default Main;