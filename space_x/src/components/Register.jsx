import { useState } from "react";
import { useHistory } from "react-router";
import { getAllUsers, postUser } from "../service";
import StyledRegister from "./StyledRegister";

const Register = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()
    const validPassword = (password) => password.length >= 4
        && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        && password.split('').some(char => !isNaN(Number(char)))

    return (
        <StyledRegister>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (username.length < 4 && !validPassword(password)) {
                    console.log('Neispravno, mora makar 4 karaktera,nije validna sifra...');
                    return
                }
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {
                        postUser(username, email, password).then(res => {
                            setUser(res.data)
                            history.push('/launches')
                        })
                    }
                })
            }}>
                <input type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} /><br />
                <input type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} /><br />
                <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} /><br />
                <input type="submit" value="Register" />
            </form>
        </StyledRegister>
    );
}

export default Register;