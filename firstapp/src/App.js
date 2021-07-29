import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { HelloWorld } from "./pages/HelloWorld";
import { HelloUniverse } from "./pages/HelloUniverse";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/page1">
        <h1>Page1</h1>
      </Link>
      <Link to="/page2">
        <h1>Page2</h1>
      </Link>
      <Link to="/page3">
        <h1>Page3</h1>
      </Link>
      <Route exact={true} path="/page1" component={Page1} />
      <Route exact={true} path="/page2" component={Page2} />
      <Route exact={true} path="/page3" component={Page3} />
      <Route exact={true} path="/" component={Page1} />
    </BrowserRouter>
  );
}
function Page1() {
  return (
    <div>
      <h1>Page1</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        sequi saepe incidunt voluptate facilis magni eaque nihil! Delectus natus
        facilis commodi necessitatibus quaerat molestias nihil sint ratione,
        laboriosam architecto dicta?
      </p>
    </div>
  );
}
function Page2() {
  return (
    <div>
      <h1>Page2</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        sequi saepe incidunt voluptate facilis magni eaque nihil! Delectus natus
        facilis commodi necessitatibus quaerat molestias nihil sint ratione,
        laboriosam architecto dicta?
      </p>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h1>Page3</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        sequi saepe incidunt voluptate facilis magni eaque nihil! Delectus natus
        facilis commodi necessitatibus quaerat molestias nihil sint ratione,
        laboriosam architecto dicta?
      </p>
    </div>
  );
}
//export default App;
