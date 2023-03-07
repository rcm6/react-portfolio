import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Routes>
          <Route path="/" element={<About/>} />
          <Route path="react-portfolio/" element={<About/>} />
          <Route path="react-portfolio/about" element={<About/>} />
          <Route path="react-portfolio/contact" element={<Contact/>} />
          <Route path="react-portfolio/projects" element={<Projects/>} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;