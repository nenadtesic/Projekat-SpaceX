import { useEffect } from "react";
import { getAllLaunches } from "../service";
import Launch from "./Launch";
import StyledLaunches from "./StyledLaunches";

const Launches = ({ launches, setLaunches, votes, setVotes, loggedIn }) => {
    // const [votes, setVotes] = useState([])

    const UpdateVotes = (id, value) => {
        let index = votes.findIndex(el => el.id === id)
        let kopija = [...votes]
        kopija[index] = { ...kopija[index] }
        kopija[index].count += value;
        // votes[index].count 
        setVotes(kopija);
    }

    // useEffect(()=>{
    //     getAllLaunches().then(res => {
    //         setLaunches(res.data)
    //         // getVotes().then(res=> {
    //         //     setVotes(res.data)
    //         //     if(res.data.length === 0) {
    //         //         const voteList = res.data.map(el => ({id: el.id, count: 0}))
    //         //         postVotes(id, count).then(res=> {
    //         //             setVotes((prev) => [...votes,{id: }])
    //         //         })
    //         //     }
    //         // }
    //         // if(votes?.length === 0) {
    //         //     (res.data.map(el => ({id: el.id, count: 0})))
    //         // }
    //     })
    // }, [])


    useEffect(() => {
        getAllLaunches().then(res => {
            setLaunches(res.data)
            if (votes?.length === 0) {
                setVotes(res.data.map(el => ({ id: el.id, count: 0 })))
            }
        })
    }, [])


    return (
        <StyledLaunches>
            {launches.map(launch => <Launch key={launch.id} launch={launch}
                votes={votes?.find(el => el.id === launch.id)?.count}
                updateVotes={UpdateVotes} loggedIn={loggedIn}
            />)}
        </StyledLaunches>
    );
}

export default Launches;