import { Redirect } from "react-router";


const Home = ({loggedIn}) => {
    return loggedIn ? <Redirect to="/rockets"/> : <Redirect to="/login"/>
}
 
export default Home;