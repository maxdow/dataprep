import React, { Component } from "react";
import { connect } from "react-redux"
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"
require("./toolbar.css");

class ToolBarComponent extends Component {
  render() {
    return (
    <ul className="toolbar">
      <li><button onClick={this.props.onAddElement.bind(this,OBJECTS.WP)} className="toolbar-button">Add Waypoint</button></li>
      <li><button onClick={this.props.onActiveDelete} className={"toolbar-button" + (this.props.deleteMode ? " toolbar-button--selected" : "")}>Remove Waypoint</button></li>
      <li className="toolbar-info">{this.props.deleteMode ? "click to delete" : "click to edit"}</li>
    </ul>
    )
  }
}



const deleteAction = () => ({type : "DELETE_MODE"})


const addElementAction = (data) => {
  return {
    type: "ADD_ELM",
    data
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.editor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddElement: (elmtype) => {
      dispatch(addElementAction({elmtype}))
    },
    onActiveDelete : () => dispatch(deleteAction())
  }
}

const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBarComponent)


export default ToolBar;