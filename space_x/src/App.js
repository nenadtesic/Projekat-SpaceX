import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import Rockets from "./components/Rockets";
import Launches from "./components/Launches";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rockets" exact component={Rockets} />
        <Route path="/launches" exact component={Launches} />
      </Switch>
    </Router>
    
  );
}

export default App;
