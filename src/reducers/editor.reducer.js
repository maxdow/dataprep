import {OBJECTS} from "../datatypes.constants.js";

const defaultState = {
  editMode : false,
  deleteMode : false,
  selectedElementType : OBJECTS.WP,
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
      return Object.assign({},state,{selectedElementType:action.data.elmtype});
    default :
      return state;
  }
}