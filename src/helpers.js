import ol from "openlayers";
import {OBJECTS,WP_DATATYPES} from "./datatypes.constants.js"

/**
 * Retrieve data from a collection
 */
export function getData(data,elmtype,id){
  const collection = data.get(elmtype);
  return collection ? collection.find((elm) => elm.get("id") === id).toJS() : null
}

export function waypointGroupToCollection(waypointGroup = {data :[]}){
  return waypointGroup.data.map(waypointToFeature)
}

export function waypointToFeature(waypoint){
  return new ol.Feature({
          geometry: new ol.geom.Point([waypoint[WP_DATATYPES.TYPE_LNG],waypoint[WP_DATATYPES.TYPE_LAT]]),
          name: waypoint[WP_DATATYPES.NAME]
        });
}