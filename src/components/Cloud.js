import { Component } from "react";
import { useRef } from "react";
import cloud from "./imgs/cloud.svg";


function Cloud(props) {

        const thisCloud = useRef(null);
        const refreshRate = 1000 / 60;
        let randomX = Math.floor(Math.random() * -100);
        let randomY = Math.floor(Math.random() * 60);
        let speedX = (1 + Math.random()) * 0.15;
        let positionX = 0;

            /*window.onload = (e) => {
                if (thisCloud.current !== null) {
                    thisCloud.current.style.transform = `translate(${randomX}vw, ${randomY}vh)`;   
                }
            }

            const step = () => {
                positionX = positionX + speedX;

                if (positionX > 250) {
                    positionX =  -10;
                }

                if (thisCloud.current !== null) {
                    thisCloud.current.style.left = positionX + 'vw';
                }
                window.requestAnimationFrame(step);
            }

            window.requestAnimationFrame(step);*/

        const {cloudId} = props;

        return <img className="cloud" ref={thisCloud} id={cloudId} src={cloud} alt="A fluffy cloud reflecting the colours of the sunset."/>;
    }

export default Cloud;