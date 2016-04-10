import { connect } from "react-redux"

import DataEditorComponent from "../components/DataEditor"


const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  console.log(state.data.get(currentElm))
  return {
    currentElm,
    data : currentElm ? state.data.get(currentElm).find((elm) => elm.get("id") === state.editor.dataSelection.idElement) : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const DataEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataEditorComponent)


export default DataEditor;