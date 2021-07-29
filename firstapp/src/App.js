import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //Stateless member
 let [counter,setCounter]=useState(100);



 let increment=()=>{
   counter+=1;
    setCounter(counter);
   console.log(counter);
 }

  return (
    <div>
      <h1 className="bg-dark text-light p-3">Statefull Event</h1>
      <h1> Counter::{counter}</h1>
       <input type="button" value="Increment" onClick={increment}/>
    </div>
  );
}

export default App;
