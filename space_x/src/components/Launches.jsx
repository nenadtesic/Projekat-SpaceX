import { useEffect } from "react";
import { getAllLaunches } from "../service";
import Launch from "./Launch";

const Launches = ({votes, setVotes, launches, setLaunches}) => {

    useEffect(()=>{
        getAllLaunches().then(res => {
            setLaunches(res.data)
            if(votes?.length === 0) {
                setVotes(res.data.map(el => ({id: el.id, count: 0})))
            }
        })
    }, [votes])

    return (
        <div className="launches">
            {launches.map(launch => <Launch key={launch.id} launch={launch} votes={votes?.find(el => el.id === launch.id)?.count}/>)}
        </div>
    );
}
 
export default Launches;