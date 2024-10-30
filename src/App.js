// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import './App.css';
import "./Projects.css";



function App() {
  return (
    
    <Router>
    <Header />
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
