import { Component } from "react";
import { useRef } from "react";
import stars from "./imgs/stars.png";

function Stars(props) {

    return <div style={{backgroundImage: {stars}, 
        backgroundRepeat: 'repeat',}}></div>

}

export default Stars;