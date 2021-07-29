import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {HelloWorld}from './pages/HelloWorld';
import {HelloUniverse}from './pages/HelloUniverse';

export default function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />

      <HelloUniverse />
    </div>
  );

  }
//export default App;
