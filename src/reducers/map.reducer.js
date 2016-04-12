import ol from "openlayers";
import {dataSample,defaultDataSample} from "./datasample"
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

import { getData , waypointGroupToCollection } from "../helpers"


const data = {
   [OBJECTS.WP]: []
};


const defaultData = {
  [OBJECTS.WP] : new ol.Feature({
                  geometry: new ol.geom.Point([10,10]),
                  name: "WP___"
                })
};

export default function mapReducer(state=data, action) {
  //console.log(action,state);
  return state
  /*if(action.type === "VIEW_ELM") {
    if(action.data.elmtype === WP_DATATYPES) {
      return [];
      /*return {
        [OBJECTS.WP]: new ol.Collection(getData[OBJECTS.WP].map(waypointDataToFeature))
      }*/
    /*} else {
      return data;
    }
  } else {
    return data;
  }*/
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
}