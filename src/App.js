import './App.css';
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

  return (
      <div className="App">
        <div id="sky" style={{backgroundColor: `${backgroundColour}80`}}>
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

            <Draggable axis="both" defaultPosition={{x: -300, y: -450}} bounds={{left: -1000, top: -1500, right: 0, bottom: 0}}>

              <div id="sky-colour-primary"  style={{backgroundImage: `radial-gradient(${sunColour}80, #00000000)`}}>
              <div id="sun" className="handle" style={{backgroundColor: `${sunColour}80`}}/>
              </div>

            </Draggable>
          
          <Cloud cloudId="huge-cloud"/>
          <Cloud cloudId="big-cloud"/>
          <Cloud/>
          <Cloud cloudId="med-cloud"/>
          <Cloud cloudId="small-cloud"/>
          <Cloud cloudId="tiny-cloud"/>

          <div id="sky-colour-secondary" style={{backgroundImage: `linear-gradient(#00000000, ${horizonColour}99)`}}/>
          </div>
      </div>
  );
}

export default App;
