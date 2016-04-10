import React, { Component } from "react";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

      // {data.map((waypoint) => <li key={waypoint.name}>{waypointGroup.get("name")}</li>)}

const WaypointEditor = ({data}) => {
  console.log("--->",data.toJS())
  return <div>
    <ul>...
    </ul>

  </div>
}

export default WaypointEditor ;