import React, { Component } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import './App.css'

import cert from "./cert.jpg"
import cert2 from "./cert2.jpg"
import cert3 from "./cert3.jpg"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cer from "./components/Cer";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route element = {<Home cert={cert} cert2={cert2} cert3={cert3}/>} path="/"></Route>
        <Route element = {<Cer image={cert}/>} path="/template-1"></Route>
        <Route element = {<Cer image={cert2}/>} path="/template-2"></Route>
        <Route element = {<Cer image={cert3}/>} path="/template-3"></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App