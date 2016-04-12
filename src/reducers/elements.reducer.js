import Immutable from "immutable"
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"
import {dataSample,defaultDataSample} from "./datasample"

const data = Immutable.fromJS(dataSample);

const defaultData = Object.keys(defaultDataSample).reduce((acc,elementKey) => {
  console.log(elementKey,acc);
  acc[elementKey] = Immutable.fromJS(defaultDataSample[elementKey]);
  return acc;
},{});



const {MAX_FL_LVL,MIN_FL_LVL} = WP_DATATYPES ;

function filterFL(value){
  return value > MAX_FL_LVL ? MAX_FL_LVL :
         value < MIN_FL_LVL ? MIN_FL_LVL :
         value;
}
function filter(object,datatype,value){
  return object === OBJECTS.WP && datatype === WP_DATATYPES.TYPE_FL ? filterFL(value) :value;
}

export default function elementsReducer(state=data, action) {
  //console.log(action);

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
      return addElement(state,action.data)
    }
    case "ADD_ELM_MAP" : {
      return addElement(state,action.data)
    }
    case "DELETE_ELM" : {
      let {elmtype,index} = action.data;
      return state.updateIn([elmtype],(list)=>list.splice(index,1));
    }
    default:
    return state;

  }

}
function addElement(state,dataAction) {
  let {data={},selection} = dataAction;
  var t= state.updateIn([selection.elmtype],
          (listElement) => listElement.find(item => item.get("id") === selection.idElement)
                           .get("data").push(defaultData[selection.elmtype].merge(data))
          )
  console.log(t);
  return state;
}

