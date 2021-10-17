import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../service";
import { StyledLogin } from "./StyledLogin";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <StyledLogin>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if (user) {
                        setUser(user)
                        history.push('/launches')
                    } else {
                        console.log('Neispravni podaci');
                    }
                })
            }}>
                <input type="text" placeholder="Username/Email..." onChange={(e) => { setUsername(e.target.value) }} /> <br />
                <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} /><br />
                <input type="submit" value="Login" />
            </form>
            <div id="notReg">
                <Link to="/register">Not registred?</Link>
            </div>
        </StyledLogin>
    );
}

export default Login;