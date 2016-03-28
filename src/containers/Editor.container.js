import { connect } from "react-redux"

import CanvasEditor from "../components/CanvasEditor.component.js"

const updateAction = (id,value) => {
  return {
    type: "UPDATE_ELM",
    id,value
  }
}

const mapStateToProps = (state) => {
  return {
    elements: state.waypoints, //TODO get element by type selected
    type : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (id,value) => {
      dispatch(updateAction(id,value))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasEditor)

export default Editor