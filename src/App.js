import './App.css';
import { useState } from "react";
import Cloud from './components/Cloud';
//import SunsetPrimary from './components/SunsetPrimary';

function App() {

  const [backgroundColour, setBackgroundColour] = useState('#004b55');
  const [sunColour, setSunColour] = useState('#ffd900');
  const [horizonColour, setHorizonColour] = useState('#fffd96');

  const drag = event => {
    event.dataTransfer.setData(event.currentTarget.dataset.id)
  };
  const drop = event => {};
  const allowDrop = event => {
    event.preventDefault()
  };

  return (
    <div className="App">
      <div id="sky-container"
      style={{backgroundColor: `${backgroundColour}`}}
      onDragOver={allowDrop}>

        <nav className="menu">
          <h1>Menu</h1>
          <br/>
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
        </nav>

        <div id="sun"
        key="sun"
        draggable="true"
        onDragStart={drag}
        data-id="sun"
        style={{backgroundColor: `${sunColour}FF`}}>

          <div id="sky-colour-primary" style={{backgroundImage: `radial-gradient(${sunColour}80, #00000000)`}}/>

        </div>
        
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
