import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />

      <HelloUniverse />
    </div>
  );

  //Tags :: Componenets::FOllow PAscal Case Convention
  function HelloWorld() {
    return (
      <div className="bg-secondary text-light p-3 my-1">
        <h1>Hello World</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam
          tenetur tempore quis incidunt, sequi nemo dicta. Ea, numquam est ab
          beatae, illo porro quae expedita, iure error amet accusantium?
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aut
          quas consequatur labore cupiditate corporis. Quaerat sed porro totam.
          Impedit iusto saepe consectetur nihil quas sint corrupti deleniti
          repellendus fuga.
        </p>
      </div>
    );
  }

  function HelloUniverse() {
    return (
      <div className="bg-primary text-light mg-1">
        <h1>Hello Universe</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, non saepe
          at assumenda veritatis beatae perferendis sit cupiditate iste libero
          dicta. Ipsam ut perferendis laborum corrupti accusantium dolorem,
          labore odit?
        </p>
      </div>
    );
  }
}
//export default App;
