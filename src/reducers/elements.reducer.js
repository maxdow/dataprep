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
    case "NEW_ELM" : {
      return newElement(state,action.data)
    }
    case "UPDATE_ELM" : {
      return updateElment(state,action.data);
    }
    case "ADD_ELM" : {
      return addElement(state,action.data);
    }
    case "ADD_ELM_MAP" : {
      return addElement(state,action.data);
    }
    case "DELETE_ELM" : {
      let {elmtype,index} = action.data;
      return state.updateIn([elmtype],(list)=>list.splice(index,1));
    }
    default:
    return state;

  }

}


function updateElment(state,dataAction){
  let {index,elmtype,datatype,value,idElement} = dataAction;
  return state.updateIn([elmtype],
    (listElement) => listElement.update(listElement.findIndex(item => item.get("id") === idElement),
      (element)=>element.update("data",
        (dataElm) => dataElm.update(index,
          (dataItem) => dataItem.set(datatype,
            filter(elmtype,datatype,value)
          )
        )
      )
    )
  );
}

function newElement(state,dataAction){
  return state.updateIn([dataAction.elmtype],
          (listElement) => listElement.push(Immutable.fromJS({
            name : dataAction.elmtype+"_"+dataAction.idElement,
            id : dataAction.idElement,
            data : []
          })))
}

function addElement(state,dataAction) {
  let {data={},selection} = dataAction;
  return state.updateIn([selection.elmtype],
          (listElement) => listElement.update(listElement.findIndex(item => item.get("id") === selection.idElement),
                           (element) => element.update("data",
                              (dataElm) => dataElm.push(defaultData[selection.elmtype].merge(data))
                           )
          ))
}

