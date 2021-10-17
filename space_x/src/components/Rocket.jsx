import React from "react";
// import RocketStyle from "./RocketStyle";

const Rocket = ({ rocket }) => {
    return (
        <div>
            {/* <p>{rocket.name}</p> */}
            <img src={rocket.flickr_images} alt={rocket.name} />
        </div>
    );
}

export default Rocket;