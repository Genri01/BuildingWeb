import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommercialScreen from '../Screens/CommercialScreen/index';
import MoreInfoScreen from '../Screens/MoreInfoScreen/index'; 
import MainScreen from '../Screens/MainScreen/index';
import ContactScreen from '../Screens/ContactScreen/index'; 
import RemodelScreen from '../Screens/RemodelScreen/index'; 
import BlogScreen from '../Screens/BlogScreen/index'; 
import ReadyScreen from '../Screens/ReadyScreen/index'; 
import LoginScreen from '../Screens/LoginScreen/index'; 
import TestimonialsScreen from '../Screens/TestimonialsScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/> 
        <Route path='/residentional/:remodal' element={<RemodelScreen mobile={mobile} />}/> 
        <Route path='/commercial' element={<CommercialScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/blog' element={<BlogScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/rewiews' element={<TestimonialsScreen mobile={mobile} />}/> 
        <Route path='/contact' element={<ContactScreen mobile={mobile} />}/> 
        <Route path='/moreinfo/:item' element={<MoreInfoScreen mobile={mobile} />}/>  
        <Route path='/readytoearn' element={<ReadyScreen mobile={mobile} />}/>  
        <Route path='/login' element={<LoginScreen mobile={mobile} />}/>  
      </Routes>
    </main>
  )
} 

export default Main;