import React,{createContext,useState} from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import './App.css';
export const homecontext =createContext()

function App() {

  const [homestate, sethomestate] = useState([
    {
      id:1,
      name:"Nature",
      img:"home1.jpg"
    },
    { id:2,
      name:"Portrait",
      img:"home2.jpg"
    },
    { id:3,
      name:"People",
      img:"home3.jpg"
    },
    { id:4,
      name:"Architecture",
      img:"home4.jpg"
    },
    { id:5,
      name:"Animals",
      img:"home5.jpg"
    },
    { id:6,
      name:"Sports",
      img:"home6.jpg"
    },
    { id:7,
      name:"Travel",
      img:"home7.jpg"
    },
    { id:8,
      name:"People",
      img:"home8.jpg"
    },
    { id:9,
      name:"Architecture",
      img:"home4.jpg"
    }
  ])


  
  return (
  
    <Router>
      <homecontext.Provider value={{homestate, sethomestate}}>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/gallery"   element={<Gallery/>}/>
        <Route path="/services"  element={<Services/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
      </homecontext.Provider>
      <Footer/>
    </Router>

    
  );
}

export default App;
