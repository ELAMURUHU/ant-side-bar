
import React from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </Router>
     
    </>
  )
}

export default App
