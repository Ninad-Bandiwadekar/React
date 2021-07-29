
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  //Stateless member
  let [counter, setCounter] = useState(100);
  let [list, setlist] = useState(["delhi", "Mumbai"]);

  let increment = () => {
    counter += 1;
    setCounter(counter);
    console.log(counter);
  };


  let addNewElement=()=>{
    let newList=["Kolkata",...list];
    setlist(newList);

  }
  return (
    <div>
      <h1 className="bg-dark text-light p-3">Statefull List Event</h1>
      <h1> Counter::{counter}</h1>
      <input type="button" value="Increment" onClick={increment} />
      <hr />

      <input type="button" value="Add New List" onClick={addNewElement} />
      {list.map((item) => {
        return <h1 className="bg-success text-light my-1 p-3 h4">{item}</h1>;
      })}
    </div>
  );
}

export default App;
