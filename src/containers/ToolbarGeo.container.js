import { connect } from "react-redux"

import ToolBarGeoComponent from "../components/ToolBarGeo"
import {changeView} from "../actions"


const mapStateToProps = (state) => {
  return {
    view : state.editor.currentView,
    dataSelection : state.editor.dataSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectElement: (elmtype) => {
      dispatch(changeView({elmtype}))
    }
  }
}

const ToolBarGeo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBarGeoComponent)


export default ToolBarGeo;