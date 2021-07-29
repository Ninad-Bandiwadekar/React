import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //Stateless member
 let counter=100;

 let increment=()=>{
   counter+=1;

   console.log(counter);
 }

  return (
    <div>
      <h1 className="bg-dark text-light p-3">Statless Does not Update Ui</h1>
       {counter}
       <input type="button" value="Increment" onClick={increment}/>
    </div>
  );
}

export default App;
