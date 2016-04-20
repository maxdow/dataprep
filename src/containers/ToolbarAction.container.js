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
      dispatch(({type:"NEW_ELM",data:{elmtype,idElement:Date.now()}}))
    },
    onExportElement : (elmtype,id) => {
      dispatch(({type: "EXPORT_ELM",data:{elmtype,id}}))
    }
  }
}

const ToolBarAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarActionComponent)


export default ToolBarAction;