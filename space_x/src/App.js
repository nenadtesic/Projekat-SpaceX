import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import Rockets from "./components/Rockets";
import Launches from "./components/Launches";
import Register from "./components/Register";
import Login from "./components/Login";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./components/StyledNavbar";


function App() {
  const [user, setUser] = useState(null)
  const [votes, setVotes] = useState([])

  return (
    <Router>
      <Nav>
        <NavLink to="/"><p>logo</p></NavLink>
        <NavMenu>
            <NavLink to="/rockets" activeStyle>Rockets</NavLink>
            <NavLink to="/launches" activeStyle>Launches</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/register">Register</NavBtnLink>
            <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route exact path="/launches">
          <Launches votes={votes} setVotes={setVotes}/>
        </Route>
        <Route exact path="/register">
          <Register setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
