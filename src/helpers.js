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
          geometry: new ol.geom.Point(ol.proj.transform([waypoint[WP_DATATYPES.TYPE_LNG],waypoint[WP_DATATYPES.TYPE_LAT]],"EPSG:4326", "EPSG:3857")),
          name: waypoint[WP_DATATYPES.NAME]
        });
}

export function pointToGeo(coords) {
  return coords; //ol.proj.transform(coords, "EPSG:3857", "EPSG:4326").map((item)=>item.toFixed(2))
}

export function GeoToPoint(lat,long) {
  return ol.proj.transform(coords, "EPSG:3857", "EPSG:4326")
}