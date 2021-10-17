import { Redirect } from "react-router";
import WinnerLaunch from "./WinnerLaunch";

const Home = ({ loggedIn, votes, launches }) => {
    const maxVote = votes?.reduce(function(prev, current) {
        return (prev.count > current.count) ? prev : current 
    },0)
    let maxLaunch = launches?.find((launch) => (launch.id === maxVote.id))
    
    return loggedIn ? <WinnerLaunch launch={maxLaunch} votes={maxVote.count}/> : <Redirect to="/login" />
}

export default Home;