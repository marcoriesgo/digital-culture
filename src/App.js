import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';




import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Unit1 from "./components/Unit1";
import Unit2 from "./components/Unit2";
import Unit3 from "./components/Unit3";
import Unit4 from "./components/Unit4";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/unit1" component={Unit1} />
        <Route exact path="/unit2" component={Unit2} />
        <Route exact path="/unit3" component={Unit3} />
        <Route exact path="/unit4" component={Unit4} />
      </div>
    </Router>
  );
}

export default App;
