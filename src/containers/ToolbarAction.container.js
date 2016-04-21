import { connect } from "react-redux"

import ToolbarActionComponent from "../components/ToolbarActions/"
import {newElement} from "../actions"
import { getCurrentData } from "../helpers"


const mapStateToProps = (state) => {
  return {
    currentElm : state.editor.currentElementType,
    data : getCurrentData(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewElement: (elmtype) => {
      dispatch(({type:"NEW_ELM",data:{elmtype,idElement:Date.now()}}))
    }
  }
}

const ToolBarAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarActionComponent)


export default ToolBarAction;