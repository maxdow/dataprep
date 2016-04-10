import { connect } from "react-redux"

import { getData } from "../helpers"
import DataEditorComponent from "../components/DataEditor"



const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  return {
    currentElm,
    data : getData(state.data,currentElm,state.editor.dataSelection.idElement)
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