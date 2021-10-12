import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./StyledNavbar";


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/rockets" activeStyle>
                        Rockets
                    </NavLink>
                    <NavLink to="/launches" activeStyle>
                        Launches
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/register">Register</NavBtnLink>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}
 
export default Navbar;