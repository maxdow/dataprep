import {OBJECTS} from "../datatypes.constants.js";

const defaultState = {
  editMode : false,
  deleteMode : false,
  currentElementType : null,
  dataSelection : null, // {elmtype, idElement}
  currentView : []
}
//
//
// editMode
// deleteMode
// selectedElementType
export default function editorReducer(state=defaultState,action){
  switch(action.type) {
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