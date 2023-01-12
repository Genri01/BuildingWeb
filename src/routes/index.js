import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import MainScreen from '../Screens/MainScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/> 
      </Routes>
    </main>
  )
} 

export default Main;