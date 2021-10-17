import React, { useEffect, useState } from "react";
import { getAllRockets } from "../service";
import Rocket from "./Rocket";
import RocketsStyle from "./RocketsStyle";

const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        getAllRockets().then(res => {
            setRockets(res.data)
            console.log(res.data);
        })
    }, [])

    return (

        <RocketsStyle>
            {rockets.map(rocket => <Rocket key={rocket.id} rocket={rocket} />)}
        </RocketsStyle>
    );
}

export default Rockets;