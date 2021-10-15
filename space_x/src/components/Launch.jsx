import { useState } from "react";
import { getRocketById } from "../service";

const Launch = ({launch, votes, loggedIn}) => {
    const [rocket, setRocket] = useState(null)

    return (
        <div onClick={() => {
              getRocketById(launch.rocket).then(res => {
                setRocket(res.data)
            })
        }}>
            <p>{launch.name}</p>
            <img src={launch.links.patch.small} alt="" />
            <p>Votes: {votes}</p>
            <button onClick={()=>{
                
            }}>+</button>
        </div>
    );
}
 
export default Launch;