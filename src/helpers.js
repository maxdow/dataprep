import ol from "openlayers";
import moment from "moment"
import geolib from "geolib"
import {OBJECTS,WP_DATATYPES} from "./datatypes.constants.js"

/**
 * Retrieve data from a collection
 */
export function getData(data,elmtype,id){
  const collection = data.get(elmtype);
  return collection ? collection.find((elm) => elm.get("id") === id).toJS() : null
}

export function getCurrentData(state){
  return getData(state.data,state.editor.currentElementType,state.editor.dataSelection.idElement)
}

export function waypointGroupToCollection(waypointGroup = {data :[]}){
  return waypointGroup.data.map(waypointToFeature)
}

export function waypointToFeature(waypoint){
  return new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([waypoint[WP_DATATYPES.TYPE_LNG],waypoint[WP_DATATYPES.TYPE_LAT]])),
          name: waypoint[WP_DATATYPES.NAME]
        });
}


export function lineCollectionFromPoints(points){
  return new ol.Feature({
    geometry: new ol.geom.LineString(points.map((point)=>ol.proj.fromLonLat([point[WP_DATATYPES.TYPE_LNG],point[WP_DATATYPES.TYPE_LAT]])))
  });
}


export function computeTimestamps(waypoints,etd,speed){
  //if(waypoints.length)
  var currentTime = etd;
  var previousPoint = waypoints[0];
  return waypoints.map(function(waypoint,i){
    if(i!==0){
      currentTime = moment(currentTime).add(computeTimeBetweenPoints(previousPoint,waypoint,speed),"s").toDate();
      previousPoint = waypoint;
    }
    return Object.assign(waypoint,{
      timestamp : currentTime
    })
  });
}

function computeTimeBetweenPoints(start,final,speed){

  const d = geolib.getDistance({
    latitude : start[WP_DATATYPES.TYPE_LAT],
    longitude : start[WP_DATATYPES.TYPE_LNG]
  },{
    latitude : final[WP_DATATYPES.TYPE_LAT],
    longitude : final[WP_DATATYPES.TYPE_LNG]
  }); // m
  const v = speed*0.514444444; //m.s-1
  return moment.duration(d/v,"s");
}