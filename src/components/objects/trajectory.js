import React, { Component } from "react";

import {WP_DATATYPES} from "../../datatypes.constants.js"

import Waypoint from "../waypoint";



function getPositionXWaypoint(index,npoints,canvasWidth){
  return index * (canvasWidth - 70)/(npoints-1) + (index === 0 ? 10 : 0);
}
function getPositionYWaypoint(fl,canvasHeight){
  return canvasHeight - canvasHeight*fl/ WP_DATATYPES.MAX_FL_LVL ;
}

function getCoordsTrajectory(waypoints,canvas){
  return waypoints.map((waypoint,index) => [
    getPositionXWaypoint(index,waypoints.length,canvas.width),
    getPositionYWaypoint(waypoint[WP_DATATYPES.TYPE_FL],canvas.height)
    ])
  .reduce((acc,val) => acc.concat(val))
  .join(" ")

}

class Trajectory extends Component {
  WPhovered = null;
  state = {editedWP : null}

  handleWPClick(index){
    this.props.onWPClick(index);
  }
  render() {
    const {flightdata, canvas, onUpdate} = this.props;
    const waypoints = flightdata.data ;
    return (
      <g>
      {waypoints.map((waypointData,index) => {
        return (
        <Waypoint
          data={waypointData}
          key={index}
          canvasHeight={canvas.height}
          x={getPositionXWaypoint(index,waypoints.length,canvas.width)}
          onUpdate={onUpdate.bind(this,index)}
          onClick={this.handleWPClick.bind(this,index)}

        />
        )}
      )}
      <polyline fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" points={getCoordsTrajectory(waypoints,canvas)}/>
    </g>
    )
  }
}
          // y={getPositionYWaypoint(waypointData.get(WP_DATATYPES.TYPE_FL),canvas.height)}

export default Trajectory;