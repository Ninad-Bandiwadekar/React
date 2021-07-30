import "./App.css";
import { useDebugValue, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <MyComponent/> {/* if not passed*/}
      <MyComponent heading="Java" desc="Java is cool"/>
      <MyComponent heading="JavaScript" desc="Javascript is super cool"/>
      <MyComponent heading="Python" desc="It is easy"/>
    </div>
  );
}


//Reading the props passed by parent.
function MyComponent({heading="Default heading",desc="descr not passed"}) {
  return (
    <div className="bg-success p-3 text-light">
      <h1>Learning {heading} </h1>
      <hr />
      <p>
       <mark className="rounded ">{desc}</mark> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni modi
        culpa nulla mollitia explicabo unde tenetur similique fuga consequuntur
        iusto cumque expedita ipsum, itaque ab odit dolorum delectus veniam
        pariatur!
      </p>
    </div>
  );
}

export default App;
