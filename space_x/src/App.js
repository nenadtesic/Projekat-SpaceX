import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Rockets from "./components/Rockets";
import Launches from "./components/Launches";
import Register from "./components/Register";
import Login from "./components/Login";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./components/StyledNavbar";
import { getAllLaunches } from "./service";
import Pagination from "./components/Paginacija";
import Select from "./components/Select";
import GlobalStyle from "./GlobalStyle";
import './App.css'


function App() {
  const [user, setUser] = useState(null)
  const [votes, setVotes] = useState([])
  const [launches, setLaunches] = useState([])
  const [displayed, setDisplayed] = useState('All')
  const [onPage, setOnPage] = useState([])

  useEffect(() => {
    getAllLaunches().then(res => {
      setLaunches(res.data)
      setOnPage(res.data)
    })
  },[])

  useEffect(()=>{
    setOnPage(launches.slice(0, displayed === 'All' ? Infinity : displayed)) 
  },[displayed,launches])


  return (
    <Router>

        <Nav>
          <NavLink to="/"><img src={process.env.PUBLIC_URL + "/images/rocket2.png"} alt="logo" /> </NavLink>
          <NavMenu>
              <NavLink to="/rockets" activeStyle>Rockets</NavLink>
              <NavLink to="/launches" activeStyle>Launches</NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/register">Register</NavBtnLink>
              <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
        </Nav>


        {/* <GlobalStyle> */}

        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/rockets">
            <Rockets />
          </Route>
          <Route exact path="/launches">
            <Select options={['All', 10, 20, 30]} setDisplayed={setDisplayed} displayed={displayed}/>
            <Pagination launches={launches} displayed={displayed} setOnPage={setOnPage}/>
            <Launches votes={votes} launches={onPage} setLaunches={setLaunches} setVotes={setVotes}/>
          </Route>
          <Route exact path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
      {/* </GlobalStyle> */}
    </Router>

  );
}

export default App;
