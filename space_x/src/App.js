import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Rockets from "./components/Rockets";
import Launches from "./components/Launches";
import Register from "./components/Register";
import Login from "./components/Login";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./components/StyledNavbar";
import { getAllLaunches } from "./service";
import Pagination from "./components/Paginacija";
import GlobalStyle from "./GlobalStyle";


function App() {
  const [user, setUser] = useState(null)
  const [votes, setVotes] = useState([])
  const [launches, setLaunches] = useState([])
  const [onPage, setOnPage] = useState([])

  const displayedLauches = 8;

  useEffect(() => {
    getAllLaunches().then(res => {
      setLaunches(res.data)
      setOnPage(res.data)
    })
  }, [])

  useEffect(() => {
    setOnPage(launches.slice(0, displayedLauches))
  }, [launches, user])

  return (
    <Router>
      <GlobalStyle />

      <Nav>
        <NavLink to="/"><img src={process.env.PUBLIC_URL + "/images/rocket2.png"} alt="logo" style={{ height: '100%' }} /> </NavLink>
        <NavMenu>
          <NavLink to="/rockets" activeStyle>Rockets</NavLink>
          <NavLink to="/launches" activeStyle>Launches</NavLink>
        </NavMenu>
        <NavBtn>
          {!user && <NavBtnLink to="/register">Register</NavBtnLink>}
          {!user && <NavBtnLink to="/login">Login</NavBtnLink>}
          {user && <NavBtnLink to="/launches" onClick={() => setUser(undefined)}>Logout</NavBtnLink>}
        </NavBtn>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Home loggedIn={user} votes={votes} launches={launches} />
        </Route>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route exact path="/launches">
          <Pagination launches={launches} displayed={displayedLauches} setOnPage={setOnPage} />
          <Launches launches={onPage} setLaunches={setLaunches} votes={votes} setVotes={setVotes} loggedIn={user} />
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
