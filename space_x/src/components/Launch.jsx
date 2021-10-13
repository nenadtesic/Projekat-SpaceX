import { useState } from "react";
import { getRocketById } from "../service";

const Launch = ({launch, votes}) => {
    const [rocket, setRocket] = useState(null)
    let date = new Date(launch.static_fire_date_unix * 1000) 
    
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
            <p>{date.toDateString()}</p>
            <p>{rocket?.name}</p>
            <p>{rocket ? rocket.active ? 'active' : 'not active' : ''}</p>
        </div>
    );
}
 
export default Launch;