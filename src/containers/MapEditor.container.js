import { connect } from "react-redux"

import { getData } from "../helpers"
import MapEditorComponent from "../components/MapEditor"


/*
const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  console.log(state.data.get(currentElm))
  return {
    currentElm,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
  }
}*/

const addElementAction = (data) => {
  return {
    type: "ADD_ELM_MAP",
    data
  }
}


const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  return {
    currentElm,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddElement: (elmtype,data) => {
      //temporaly remove the event
      console.log("Add elm",data);
      //dispatch(addElementAction({elmtype,data}))
    }
  }
}


const MapEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapEditorComponent)


export default MapEditor;