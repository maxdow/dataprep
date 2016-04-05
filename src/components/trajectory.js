import React, { Component } from "react";

import {WP_DATATYPES} from "../datatypes.constants.js"

import Waypoint from "./waypoint";


//TODO config
const MAX_FL_LVL = 550 ;


function getPositionXWaypoint(index,npoints,canvasWidth){
  return index * (canvasWidth - 70)/(npoints-1) + (index === 0 ? 10 : 0);
}
function getPositionYWaypoint(fl,canvasHeight){
  return canvasHeight - canvasHeight*fl/ MAX_FL_LVL ;
}

class Trajectory extends Component {
  WPhovered = null;
  state = {editedWP : null}
  /*componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("click", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove, false);
    document.removeEventListener("click", this.handleClick, false);
  }*/
  handleMouseMove(){

  }
  handleDocumentClick(){

  }
  handleWPClick(index){
    this.props.onWPClick(index);

  }
  render() {
    const {waypoints, canvas, onUpdate} = this.props;
    return (
      <g>
      {waypoints.map((waypointData,index) => {
        return (
        <Waypoint
          data={waypointData}
          key={index}
          canvasHeight={canvas.height}
          x={getPositionXWaypoint(index,waypoints.size,canvas.width)}
          onUpdate={onUpdate.bind(this,index)}
          onClick={this.handleWPClick.bind(this,index)}

        />
        )}
      )}
    </g>
    )
  }
}
          // y={getPositionYWaypoint(waypointData.get(WP_DATATYPES.TYPE_FL),canvas.height)}

export default Trajectory;