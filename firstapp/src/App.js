
import "./App.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  
  const Ajaxcal=async ()=>{

    const url="https://jsonplaceholder.typicode.com/users";
    const result=await axios.get(url);
    console.log(result.data);
  }

  return <div>
    <h1>Lets connect to Backend</h1>

    <input type="button" value="Make Ajax call" onClick={Ajaxcal}/>
  </div>
 

}