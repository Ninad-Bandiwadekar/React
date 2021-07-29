import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //Stateless member
 let [counter]=useState(100);

 let[name]=useState("cdac");
 let[list]=useState("delhi")
 let[std1]=useState({name:"rahul"});
 let[active]=useState(true);

 let increment=()=>{
   counter+=1;
    
   console.log(counter);
 }

  return (
    <div>
      <h1 className="bg-dark text-light p-3">Statefull Update</h1>
       <h1>String::{name}</h1>
       <h1>Number ::{counter}</h1>
       <h1>Boolean::{active+""}</h1>
       <h1>List::{list}</h1>
       <h1>Object::{std1.name}</h1>
       <h1>Object::{JSON.stringify(std1)}</h1>
    </div>
  );
}

export default App;
