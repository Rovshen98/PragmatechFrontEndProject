
import Header from "./header/header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/footer"
import MoviesProvider from "./Context.jsx";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Movieitem from './movieitem/Movieitem';

function App() {
     


  return (
    <MoviesProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<Movieitem />} />
        </Routes>
     
      <div className="App">
        
        <Header />
        <Home />
        <Footer />
      </div> 
      </BrowserRouter>
    </MoviesProvider>
  );
}


  





export default App;
