import './App.css';
import { useRef } from 'react';
import { useState } from "react";
import Draggable, {DraggableCore} from "react-draggable";
import Cloud from './components/Cloud';

function App() {

  const [backgroundColour, setBackgroundColour] = useState('#004b55');
  const [sunColour, setSunColour] = useState('#ffd900');
  const [horizonColour, setHorizonColour] = useState('#fffd96');

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  const twinkleRef = useRef(null);

  const ToggleTwinkle = () => {
    if (twinkleRef.current != null) {
        setTimeout(() => {twinkleRef.current.style.opacity = 80;}, 500);
        twinkleRef.current.style.opacity = 0;
    } else {
      console.log(twinkleRef);
    }
  };

  return (
      <div className="App">
        <div id="sky" style={{backgroundColor: `${backgroundColour}80`}}>

          <div className="stars-twinkling" ref={twinkleRef} onLoad={() => {setInterval(() => {ToggleTwinkle()}, 160000)}} style={{transition: `.7s`, transitionTimingFunction: 'ease-in-out'}}/>
          <div className="stars" style={{maskImage: `linear-gradient(${backgroundColour}FF, #00000000)`}}/>



          <nav className={isActive ? "menu-expanded" : "null"}>
            <div className="menu-contents">
              <h1>Menu</h1>
              <label>
                  Background Colour
                  <br/><br/>
                  <input type="color" name="background-colour" onChange={(e)=>{setBackgroundColour(e.target.value)}}/>
              </label>
              <br/><br/>
              <label>
                  Sun Colour
                  <br/><br/>
                  <input type="color" name="sun-colour" onChange={(e)=>{setSunColour(e.target.value)}}/>
              </label>
              <br/><br/>
              <label>
                  Horizon Colour
                  <br/><br/>
                  <input type="color" name="horizon-colour" onChange={(e)=>{setHorizonColour(e.target.value)}}/>
              </label>          
            </div>
            <br/><br/>

            <button className="menu-button" name="toggle-menu" onClick={ToggleClass}>Toggle Menu</button>

          </nav>

            <Draggable axis="both" defaultPosition={{x: -120, y: -600}} bounds={{left: -3000, top: -2500, right: 0, bottom: 0}}>

              <div id="sky-colour-primary"  style={{backgroundImage: `radial-gradient(${sunColour}B3, #00000000)`}}>
              <div id="sun" className="handle" style={{backgroundColor: `${sunColour}FF`}} onDragOver={(event => this.onDragOver(event))}/>
              </div>

            </Draggable>
          
            <div className="cloud-cover">
              <Cloud cloudId="huge-cloud"/>
              <Cloud cloudId="big-cloud"/>
              <Cloud/>
              <Cloud cloudId="med-cloud"/>
              <Cloud cloudId="small-cloud"/>
              <Cloud cloudId="tiny-cloud"/>
            </div>

            <div id="sky-colour-secondary" style={{backgroundImage: `linear-gradient(#00000000, ${horizonColour}99)`}}/>
          </div>
        </div>
  );
}

export default App;
