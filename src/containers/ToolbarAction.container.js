import { connect } from "react-redux"

import ToolbarActionComponent from "../components/ToolbarActions/"
import {newElement} from "../actions"


const mapStateToProps = (state) => {
  return {
    currentElm : state.editor.currentElementType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewElement: (elmtype) => {
      dispatch(newElement({elmtype}))
    },
    onExportElement : (elmtype,id) => {
      dispatch((data) =>  ({type: "EXPORT_ELM",data}))
    }
  }
}

const ToolBarAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarActionComponent)


export default ToolBarAction;