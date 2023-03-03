import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
          <Route path="/about" test />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


/*<Route path="/" element={<Menu1/>} />
            <Route path="/about" element={<Menu2/>} />
            <Route path="/discover" element={<Menu3/>} />
            <Route path="/search" element={<Menu4/>} />
            */