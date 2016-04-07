import { connect } from "react-redux"

import ToolBarEditorComponent from "../components/ToolbarEditor"
import {selectElementAction} from "../actions"


const mapStateToProps = (state) => {
  return {
    currentElm : state.editor.selectedElementType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectElement: (elmtype) => {
      dispatch(selectElementAction({elmtype}))
    }
  }
}

const ToolBarEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBarEditorComponent)


export default ToolBarEditor;