import React, { Component } from "react";
import geolib from "geolib";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"
import {pointToGeo} from "../../helpers.js"

//ol.coordinate.toStringHDMS(coord);
const WaypointEditor = ({data}) => {

  return <div className="waypoint-editor">
    <div>Group Name : {data.name}</div>

    <ul className="waypoint-editor-list">
      {data.data.map((waypoint,i) => {
        return <li key={i}>
          {waypoint[WP_DATATYPES.TYPE_NAME]} - {geolib.decimal2sexagesimal(waypoint[WP_DATATYPES.TYPE_LAT])} / {geolib.decimal2sexagesimal(waypoint[WP_DATATYPES.TYPE_LNG])}
        </li>
      }
        )}
    </ul>

  </div>
}

export default WaypointEditor ;