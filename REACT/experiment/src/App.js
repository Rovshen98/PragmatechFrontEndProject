import {useEffect,useState,createContext} from "react";
import './App.css';
import Main from "./main";
export const newcontext = createContext()

function App() {
  const [name, setname] = useState([{
    name:"Murad"
  },
  {
    name:"Rovsen"
  }])

  
useEffect(() => {
  console.log(document.querySelector(".App"))
  return function(){
    
        
  }
 
  
},[])

  return (
    <div className="App">
        {<newcontext.Provider value={{name,setname}}>
          <Main/>
          
        </newcontext.Provider>}
    </div>
  );
}

export default App;
