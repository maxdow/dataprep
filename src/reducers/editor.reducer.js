import {OBJECTS} from "../datatypes.constants.js";

const defaultState = {
  editMode : false,
  deleteMode : false,
  currentElementType : null,
  dataSelection : {idElement:null,elmtype:null},
  currentView : []
}
//
//
// editMode
// deleteMode
// selectedElementType
export default function editorReducer(state=defaultState,action){
  switch(action.type) {
    case "NEW_ELM" : {
      return Object.assign({},state,{
        currentElementType:action.data.elmtype,
        dataSelection:action.data
      });
    }
    case "DELETE_MODE" :
      return Object.assign({},state,{deleteMode:!state.deleteMode});
    case "SELECT_ELM" :
      return Object.assign({},state,{currentElementType:action.data.elmtype});
    case "VIEW_ELM" :
      return Object.assign({},state,{
        currentElementType:action.data.elmtype,
        dataSelection:action.data
      });
    default :
      return state;
  }
}