import logo from "./logo.svg";
import "./App.css";

function App() {
  let title="Hello";
  let list=["Delhi","Calcutta","Mumbai","lonavala"]

  return (
    <div>
      <h1>{title}</h1>
      <ul>
       {list.map((item)=>{
            return <h1>{item}</h1>;
       })}
       </ul>
    </div>
  );
}

export default App;
