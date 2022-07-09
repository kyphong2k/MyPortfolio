import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/AboutMe/AboutMe'
import Timeline from './components/MyTimeline/MyTimeline'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/about" element= {<About/>}/>
            <Route path="/projects" element= {<Projects/>}/>
            <Route path="/timeline" element= {<Timeline/>}/>
            <Route path="/contact" element= {<Contact/>}/>
          </Routes>
      
      </Router>
    </div>
  );
}

export default App;
