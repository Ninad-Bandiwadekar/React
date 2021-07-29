import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";



export default function App() {
  return (
    <div>
      <HelloWorld/>
      <HelloWorld/>

      <HelloUniverse/>
    </div>
  )
    

  //Tags :: Componenets::FOllow PAscal Case Convention
  function HelloWorld(){
    return <h1>Hello World</h1>;
  }
  
  function HelloUniverse(){
    return <h1>Hello Universe</h1>
  }
}
//export default App;
