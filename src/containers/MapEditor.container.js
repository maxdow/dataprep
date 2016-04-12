import { connect } from "react-redux"

import { getData } from "../helpers"
import MapEditorComponent from "../components/MapEditor"
import {addElement} from "../actions"

/*
const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  console.log(state.data.get(currentElm))
  return {
    currentElm,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
  }
}*/




const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  return {
    currentElm,
    selection:state.editor.dataSelection,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddElement: (selection,data) => {
      dispatch(addElement({selection,data}))
    }
  }
}


const MapEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapEditorComponent)


export default MapEditor;