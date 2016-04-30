import {computeTimestamps} from "./helpers.js";
import {OBJECTS,WP_DATATYPES} from "./datatypes.constants.js"

export function exportToGeoJSON(data){
  data.data = computeTimestamps(data.data,data.etd,data.speed)
  const geojsonData = {
    type : "FeatureCollection",
    properties: {
      name : data.name,
      etd : data.etd,
      speed : data.speed
    },
    features : data.data.map((waypoint) => ({
      type : "Feature",
      geometry : {
        type:"Point",
        coordinates : [waypoint[WP_DATATYPES.TYPE_LNG],waypoint[WP_DATATYPES.TYPE_LAT],waypoint[WP_DATATYPES.TYPE_FL]*100*0.3048]
      },
      properties : {
        timestamp : waypoint.timestamp
      }
    })
    )
  }
  return JSON.stringify(geojsonData);
}

export function createFile(name,data){
  const blob = new Blob( [ data ], { type: "text/plain" } );

  const url = window.URL.createObjectURL( blob );

  const a = document.createElement( "a" );
  document.body.appendChild( a );
  a.style = "display: none";
  a.href = url;
  a.download = name+".geojson";

  a.click();
  setTimeout(function(){
    window.URL.revokeObjectURL( url );
  })
}
