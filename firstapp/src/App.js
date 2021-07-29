import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1 className="bg-dark text-light p-3">Working with css Again</h1>
      <h5 style={{ color: "tomato", backgroundColor: "royalblue" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro
        rerum vitae maxime itaque ad. Illo omnis sed quos velit quis earum eaque
        laborum! Unde odio culpa dolore velit ullam?
      </h5>

      <p className="beautify">
         Css fileLorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        nobis laboriosam nostrum suscipit quo reprehenderit fuga hic accusantium
        delectus sequi et, voluptate maxime! Sapiente ad odio amet autem ab?
        Quis?
      </p>
    </div>
  );
}
export default App;
