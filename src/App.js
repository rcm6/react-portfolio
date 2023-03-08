import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
//import Footer from './components/Footer';
// Pages //
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
   <div>
   <Navbar />
        <Header />
        <Wrapper>
          <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          </Routes>
        </Wrapper>
   </div>
  </HashRouter>



    
  );
}

export default App;