import React, { useEffect, useState } from "react";
import { getAllRockets, getRocketById } from "../service";

const Rockets= () => {
    const [rockets,setRockets] = useState([])

    useEffect(()=>{
        getAllRockets().then(res=> {
            setRockets(res.data)
        })
    },[])

    return (
        <div>
            <div>{rockets.map(rocket => <p>{rocket.name}</p>)}</div>
            <h1>Rockets</h1>
        </div>
    );
}
 
export default Rockets;