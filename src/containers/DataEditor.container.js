import { connect } from "react-redux"

import { getData } from "../helpers"
import DataEditorComponent from "../components/DataEditor"
import {OBJECTS} from "../datatypes.constants.js";
import {updateElement} from "../actions/"



const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  return {
    currentElm,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate : function(elmtype,idElement,index,datatype,value){
      dispatch(updateElement({elmtype,idElement,index,datatype,value}));
    }
  }
}

const DataEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataEditorComponent)


export default DataEditor;