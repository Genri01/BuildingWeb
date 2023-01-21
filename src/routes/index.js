import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommercialScreen from '../Screens/CommercialScreen/index'; 
import MainScreen from '../Screens/MainScreen/index'; 
import RemodelScreen from '../Screens/RemodelScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/>
        <Route path='/residentional/:remodal' element={<RemodelScreen mobile={mobile} />}/> 
        <Route path='/commercial' element={<CommercialScreen mobile={mobile} />}/>   
      </Routes>
    </main>
  )
} 

export default Main;