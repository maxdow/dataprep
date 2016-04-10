import React, { Component } from "react";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

      // {data.map((waypoint) => <li key={waypoint.name}>{waypointGroup.get("name")}</li>)}
      //

const WaypointEditor = ({data}) => {

  return <div>
    <div>Group Name : {data.get("groupName")}</div>

    <ul>
      {data.get("data").map((waypoint,i) => <li key={i}>
        {waypoint.get(WP_DATATYPES.TYPE_NAME)} - {waypoint.get(WP_DATATYPES.TYPE_LAT)} / {waypoint.get(WP_DATATYPES.TYPE_LNG)}
        </li>)}
    </ul>

  </div>
}

export default WaypointEditor ;