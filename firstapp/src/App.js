
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  
  const [list,setList]=useState([]);

  //React 
  //no return type
  //arrow function and array
  useEffect(()=>{
      Ajaxcal();
  },[]);

  const Ajaxcal=async ()=>{
   

    const url="https://jsonplaceholder.typicode.com/users";
    const result=await axios.get(url);
    console.log(result.data);

    const newlist=result.data;
    setList(newlist,...list);
  }

  return <div>
    <h1>Lets connect to Backend</h1>

    {/* <input type="button" value="Make Ajax call" onClick={Ajaxcal}/> */}

    {list.map((item)=>{
      return <div>{item.name}</div>
    })}
  </div>
 

}