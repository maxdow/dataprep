import {OBJECTS} from "../datatypes.constants.js";

const defaultState = {
  editMode : false,
  deleteMode : false,
  selectedElementType : OBJECTS.WP
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
    default :
      return state;
  }
}