import Immutable from "immutable"
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

const data = Immutable.fromJS({
  [OBJECTS.WP]: [
    {
        [WP_DATATYPES.TYPE_NAME]: "WP1",
        [WP_DATATYPES.TYPE_LAT]: 10,
        [WP_DATATYPES.TYPE_LNG]: 10,
        [WP_DATATYPES.TYPE_FL]: 100
    },
    {
        [WP_DATATYPES.TYPE_NAME]: "WP2",
        [WP_DATATYPES.TYPE_LAT]: 10,
        [WP_DATATYPES.TYPE_LNG]: 10,
        [WP_DATATYPES.TYPE_FL]: 500
    },
    {
        [WP_DATATYPES.TYPE_NAME]: "WP3",
        [WP_DATATYPES.TYPE_LAT]: 10,
        [WP_DATATYPES.TYPE_LNG]: 10,
        [WP_DATATYPES.TYPE_FL]: 50
    }
  ]
});

const defaultData = {
  [OBJECTS.WP] : Immutable.fromJS({
    [WP_DATATYPES.TYPE_NAME]: "WP__",
    [WP_DATATYPES.TYPE_LAT]: 10,
    [WP_DATATYPES.TYPE_LNG]: 10,
    [WP_DATATYPES.TYPE_FL]: 100
  })
};

//TODO config
const MAX_FL_LVL = 550 ;

function filterFL(value){
  return value > MAX_FL_LVL ? MAX_FL_LVL :
         value < 50 ? 50 :
         value;
}
function filter(object,datatype,value){
  return object === OBJECTS.WP && datatype === WP_DATATYPES.TYPE_FL ? filterFL(value) :value;
}

export default function elementsReducer(state=data, action) {
  console.log(action);
  switch(action.type) {
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
      return state.updateIn([elmtype],(list)=>list.push(Object.assign({},defaultData[elmtype],data)));
    }
    case "DELETE_ELM" : {
      let {elmtype,index} = action.data;
      return state.updateIn([elmtype],(list)=>list.splice(index,1));
    }
    default:
    return state;

  }

}

