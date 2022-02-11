import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import './App.css';

function App() {
  return (
  
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/gallery"   element={<Gallery/>}/>
        <Route path="/services"  element={<Services/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
    </Router>

    
  );
}

export default App;
