import React from "react";


const Rocket = ({rocket}) => {
   

    return (
        <div>
            <p>{rocket.name}</p>
            <img src={rocket.flickr_images} alt="logo"/>
        </div>
    );
}
 
export default Rocket;