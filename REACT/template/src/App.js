import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';


function App() {
 return <>
    <Router>
      <Header />
    <Routes>
        <Route
        path="/"
        exact 
        />
   </Routes>
    </Router>
  </>
}

export default App;
