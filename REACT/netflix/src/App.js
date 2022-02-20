
import Header from "./header/header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/footer"

import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Movieitem from './movieitem/Movieitem';

function App() {
     


  return (
    <div className="App">
    
     <BrowserRouter>
     <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/movie/:id" element={<Movieitem />} /> */}
        </Routes>
      <Footer />
      
      </BrowserRouter>
   
    </div> 
  );
}


  





export default App;
