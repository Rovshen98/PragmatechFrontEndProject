import { useEffect, useState, createContext, useRef } from "react";
import './App.css';
import Main from "./main";
export const newcontext = createContext()

function App() {
  const [name, setname] = useState("salam")

  const input = useRef()
 
console.log(name)
  return (
    <div className="App">
      <newcontext.Provider value={name, setname}> 
        <Main />
        
        
       </newcontext.Provider>
    </div>
  );
}

export default App;
