import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { HelloWorld } from "./pages/HelloWorld";
import { HelloUniverse } from "./pages/HelloUniverse";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
function MyComponent() {
  let [list, setList] = useState([]);

  //1
  let[thought,setThought]=useState("");

  const postYourThought = () => {
    //const newlist = ["New thought", ...list];
    const newlist=[thought,...list];
    setList(newlist);

    //clear the input:thought
    setThought("");
  };

  //4 
  const handleInputChange=(e)=>{
    console.log(e.target.value);

    const newthought=e.target.value;
    setThought(newthought);

  }

  return (
    <div className="m-2">
      <h1>Work With Mini Facebook</h1>

      <input
        type="text"
        style={{ height: 75 }}
        placeholder="Post your thoughts"
        className="form-control form-control-lg my-2"
        value={thought} //2
        onChange={handleInputChange}  //3
      />
      <input
        type="button"
        value="Post your thought"
        className="btn btn-primary w-100"
        onClick={postYourThought}
      />

      <div>
        <div className="h1 bg-light my-1 p-3 text-primary border">
          Thought List
        </div>

        {list.map((item) => {
          return <div className="alert alert-primary mt-1">{item}</div>;
        })}
      </div>
    </div>
  );
}

//export default App;
