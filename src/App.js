import './App.css';
import { useState } from "react";
import Music from './components/Music';
import Draggable, {DraggableCore} from "react-draggable";
import Cloud from './components/Cloud';


function App() {

  const [backgroundColour, setBackgroundColour] = useState('#FF9966');
  const [sunColour, setSunColour] = useState('#FFFF99');
  const [horizonColour, setHorizonColour] = useState('#CC00FF');

  const [isActive, setActive] = useState(true);
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  const [isStarry, setStarry] = useState(false);
  const ToggleStars = () => {
    setStarry(!isStarry);
  };



  return (
      <div className="App">
        <div id="sky" style={{backgroundColor: `${backgroundColour}FF`}}>

        <div id="button-div">
              <button className="menu-button" name="toggle-menu" onClick={ToggleClass}>Toggle Menu</button>
          </div>

          <div id="star-div" className={isStarry ? "stars" : "null"} style={{maskImage: `linear-gradient(${backgroundColour}FF, #00000000)`}}/>

          <nav className={isActive ? "menu-expanded" : "null"}>
            <div className="menu-contents">
              <h1>Menu</h1>

              <label htmlFor="background-colour">
                  Background Colour
                  <br/><br/>
                  <input type="color" name="background-colour" onChange={(e)=>{setBackgroundColour(e.target.value)}}/>
              </label>
              <br/><br/>
              <label htmlFor="sun-colour">
                  Sun Colour
                  <br/><br/>
                  <input type="color" name="sun-colour" onChange={(e)=>{setSunColour(e.target.value)}}/>
              </label>
              <br/><br/>
              <label htmlFor="horizon-colour">
                  Horizon Colour
                  <br/><br/>
                  <input type="color" name="horizon-colour" onChange={(e)=>{setHorizonColour(e.target.value)}}/>
              </label>
              <br/><br/>

              <label htmlFor="toggle-stars">Add Stars to Sky: <input type="checkbox" name="toggle-stars" onChange={ToggleStars}/>
              </label>
              <br/><br/>

              <Music/>
              <br/><br/>
            </div>
          </nav>

            <Draggable axis="both" defaultPosition={{x: -120, y: -600}} bounds={{left: -3000, top: -2500, right: 0, bottom: 0}}>

              <div id="sky-colour-primary"  style={{backgroundImage: `radial-gradient(60em 30em at center, ${sunColour}BF, #00000000)`}}>
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

            <div id="sky-colour-secondary" style={{backgroundImage: `linear-gradient(#00000000, ${horizonColour}B3)`}}/>
          </div>
        </div>
  );
}

export default App;
