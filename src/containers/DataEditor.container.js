import { connect } from "react-redux"

import DataEditorComponent from "../components/DataEditor"

/**
 * Retrieve data from the main collection
 */
function getData(data,elmtype,id){
  const collection = data.get(elmtype);
  return collection ? collection.find((elm) => elm.get("id") === id) : null
}

const mapStateToProps = (state) => {
  const currentElm = state.editor.currentElementType;
  console.log(state.data.get(currentElm))
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