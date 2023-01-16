import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import MainScreen from '../Screens/MainScreen/index'; 
import CommercialScreen from '../Screens/CommercialScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<CommercialScreen mobile={mobile} />}/> 
      </Routes>
    </main>
  )
} 

export default Main;