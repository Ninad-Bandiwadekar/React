import logo from "./logo.svg";
import "./App.css";

function App() {
  let list=["hello"];
  
  let myFun=()=>{
    list.push("Hello");

    console.log(list);
    
  }

  //View
  //react is unaware of the changes of local variable
  return (
    <div>
      <h1>Working With Event and List</h1>
      <input type="button" value="Click Me" onClick={myFun} />   

       {list.map((item)=>{             ///map to retrive data
          return <h3>{item}</h3>;
       })}      
    </div>
  );
}

export default App;
