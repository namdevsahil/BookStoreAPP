import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
   <>
      <div className=''>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup />}/>
          
      </Routes>
      </div>
   </>
  );
}

export default App;