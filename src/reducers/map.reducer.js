import ol from "openlayers";
import {dataSample,defaultDataSample} from "./datasample"
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

const data = {
   [OBJECTS.WP]: new ol.Collection(dataSample[OBJECTS.WP].map(waypointDataToFeature))
};

function waypointDataToFeature(waypointData){
  return new ol.Feature({
          geometry: new ol.geom.Point([waypointData[WP_DATATYPES.TYPE_LNG],waypointData[WP_DATATYPES.TYPE_LAT]]),
          name: waypointData[WP_DATATYPES.NAME]
        });
}


const defaultData = {
  [OBJECTS.WP] : new ol.Feature({
                  geometry: new ol.geom.Point([10,10]),
                  name: "WP___"
                })
};

export default function mapReducer(state=data, action) {
  console.log(action);
  /*switch(action.type) {
    case "UPDATE_ELM" : {
      let {index,elmtype,datatype,value} = action.data;
      return state.updateIn([elmtype],
        (list)=>list.update(index,
          (data) => data.set(datatype,
            filter(elmtype,datatype,value))
          )
        );
    }
    case "ADD_ELM" : {
      let {elmtype,data={}} = action.data;
      return state.updateIn([elmtype],(list)=>list.push(defaultData[elmtype].merge(data)));
    }
    case "DELETE_ELM" : {
      let {elmtype,index} = action.data;
      return state.updateIn([elmtype],(list)=>list.splice(index,1));
    }
    default:
    return state;

  }*/
  return data;
}