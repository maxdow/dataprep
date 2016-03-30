import React from "react"

function Triangle(props){
  const {center, color, size} = props;
  const d = `${center.x-size},${center.y+size} ${center.x},${center.y-size} ${center.x+size},${center.y+size}`;
  return <polygon points={d} fill={color}
  onMouseOver={props.onMouseOver}
  onMouseLeave={props.onMouseLeave}
  onMouseDown={props.onMouseDown}
  style={{cursor:"pointer"}}
  />
}
export default Triangle;
