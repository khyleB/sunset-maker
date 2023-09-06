import { useRef } from "react";
import cloud from "./imgs/cloud.svg";

function Cloud(props) {

        const thisCloud = useRef(null);

        const {cloudId} = props;

        return <img className="cloud" ref={thisCloud} id={cloudId} src={cloud} alt="A fluffy cloud reflecting the colours of the sunset."/>;
    }

export default Cloud;