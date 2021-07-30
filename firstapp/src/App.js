import "./App.css";
import { useDebugValue, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h1>hello</h1>

      <input type="button" value="Click Me" onClick={handleClick} />
      <input type="button" value="Click Me1" onClick={(e) => handleClick(e)} />

      <input type="button" value="Click Me2" onClick={(e) => handleClick(e,100)} />
    </div>
  );
}
