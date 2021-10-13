import { NavLink } from "react-router-dom";
import { Nav } from "./StyledNavbar";


const Navbar = () => {
    return (
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
    );
}
 
export default Navbar;