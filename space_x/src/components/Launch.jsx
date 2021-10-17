import { useState } from "react";
import { getRocketById } from "../service";
import { FiThumbsUp } from "react-icons/fi"
import { FiThumbsDown } from "react-icons/fi"

const Launch = ({ launch, votes, updateVotes, loggedIn }) => {
    const [rocket, setRocket] = useState(null)

    return (
        <div onClick={() => {
            getRocketById(launch.rocket).then(res => {
                setRocket(res.data)
            })
        }}>
            <p id="launchName">{launch.name}</p>
            <img src={launch.links.patch.small} alt="" />
            <p id="votesId">Votes: <span>{votes}</span></p>
            {loggedIn && <button id="btnGreen" onClick={() => updateVotes(launch.id, 1)}><FiThumbsUp /></button>}
            {loggedIn && <button id="btnRed" onClick={() => updateVotes(launch.id, -1)}><FiThumbsDown /></button>}
        </div>
    );
}

export default Launch;



