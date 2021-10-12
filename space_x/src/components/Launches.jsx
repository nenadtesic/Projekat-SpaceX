import { useEffect, useState } from "react";
import { getAllLaunches } from "../service";
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(()=>{
        getAllLaunches().then(res => {
            setLaunches(res.data)
        })
    }, [])

    return (
        <div style={{color: "red"}}>
            {launches.map(launch => <Launch key={launch.id} launch={launch}/>)}
        </div>
    );
}
 
export default Launches;