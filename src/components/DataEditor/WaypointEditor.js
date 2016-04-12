import React, { Component } from "react";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

      // {data.map((waypoint) => <li key={waypoint.name}>{waypointGroup.get("name")}</li>)}
      //

const WaypointEditor = ({data}) => {

  return <div className="waypoint-editor">
    <div>Group Name : {data.name}</div>

    <ul className="waypoint-editor-list">
      {data.data.map((waypoint,i) => <li key={i}>
        {waypoint[WP_DATATYPES.TYPE_NAME]} - {waypoint[WP_DATATYPES.TYPE_LAT]} / {waypoint[WP_DATATYPES.TYPE_LNG]}
        </li>)}
    </ul>

  </div>
}

export default WaypointEditor ;