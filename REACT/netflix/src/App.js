import React, {useState, createContext } from "react";
import Header from "./header/header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/footer"
import Createlist from "./createlist/Createlist.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MyContext = createContext();
function App() {
const [openmodallist, setopenmodallist] = useState(false)
const [listdata, setlistdata ] = useState([{id:"7112632"},{id:"7113032"}])

const [moviedata, setmoviedata] = useState(null)
  return (
      
    <div className="App">
      <MyContext.Provider value={{openmodallist,setopenmodallist ,listdata, setlistdata, moviedata, setmoviedata}} >
        <Createlist/>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/movie/:id" element={<Movieitem />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>

    </div>

    
  );
}








export default App;
