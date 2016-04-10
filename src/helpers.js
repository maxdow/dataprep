import ol from "openlayers";
import {OBJECTS,WP_DATATYPES} from "./datatypes.constants.js"

/**
 * Retrieve data from a collection
 */
export function getData(data,elmtype,id){
  const collection = data.get(elmtype);
  return collection ? collection.find((elm) => elm.get("id") === id) : null
}

export function waypointGroupToCollection(waypointGroup){
  return waypointGroup.get("data").map(waypointToFeature).toJS()
}

export function waypointToFeature(waypoint){
  return new ol.Feature({
          geometry: new ol.geom.Point([waypoint.get(WP_DATATYPES.TYPE_LNG),waypoint.get(WP_DATATYPES.TYPE_LAT)]),
          name: waypoint.get(WP_DATATYPES.NAME)
        });
}