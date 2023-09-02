import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd';

function Sun(props) {
  const sunColour = props.colour + "FF";
  const primaryColour = props.colour + "80";
  const transparent = "#00000000";

  const ItemTypes = {
    SUN: 'sun'
  }
  const [{ isDragging }, drag] = useDrag(() => ({
   type: ItemTypes.SUN,
   collect: (monitor) => ({
     isDragging: !!monitor.isDragging()
   })
 }))

  return (
    <div
      id="sun"
      ref={drag}
      style={{
        cursor: 'move',
        backgroundColor: sunColour
      }}>
        <div id="sun"
      ref={drag}
      style={{backgroundImage: `radial-gradient(${sunColour}, ${transparent})`}}/>
    </div>
  )
}

export default Sun;

/*
 <div id="sun"
        key="sun"
        draggable="true"
        onDragStart={drag}
        data-id="sun"
        style={{backgroundColor: {sunColour}FF}}>

*/