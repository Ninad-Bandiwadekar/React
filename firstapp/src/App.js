import logo from "./logo.svg";
import "./App.css";

function App() {
  
  let myFun=()=>{
    alert("Event is called");
  }
  return (
    <div>
      <h1>Event Demo</h1>
      <input type="button" value="Click Me" onClick={myFun} />
    </div>
  );
}

export default App;
