import React, { Component } from "react";

import { connect } from "react-redux"

import Trajectory from "./trajectory.js";
import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"



class CanvasEditor extends Component {

  getCoordsBase() {
    return {
      x1 : 10,
      y1 : this.props.canvasHeight-1,
      x2 : this.props.canvasWidth-70,
      y2 : this.props.canvasHeight-1
    }
  }
  /*getCoordsTrajectory() {
    this.props.waypoints
    return {
      x1 : 10,
      y1 : this.props.canvasHeight-1,
      x2 : this.props.canvasWidth-70,
      y2 : this.props.canvasHeight-1
    }
  }*/
  handleWPClick(index) {
    if(this.props.isDeleteMode) {
      this.props.onDeleteWP(index);
    }
  }
  render() {
    const {waypoints} = this.props;
    const canvas = {
      width:this.props.canvasWidth,
      height:this.props.canvasHeight
    };

    return <svg height={this.props.canvasHeight} width={this.props.canvasWidth} >

      <line {...this.getCoordsBase()} stroke="green" strokeWidth={2} />
      <Trajectory waypoints={waypoints} canvas={canvas}
      onUpdate={this.props.onUpdate.bind(this,OBJECTS.WP)}
      onWPClick={this.handleWPClick.bind(this)}
      />

    </svg>
  }
}

CanvasEditor.defaultProps = { canvasHeight: 300 , canvasWidth :700};

const updateAction = (data) => {
  return {
    type: "UPDATE_ELM",
    data
  }
}
const deleteAction = (data) => {
  return {
    type: "DELETE_ELM",
    data
  }
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
    waypoints: state.data.get(OBJECTS.WP),
    type : state.editor.selectedElementType,
    isDeleteMode : state.editor.deleteMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (elmtype,index,datatype,value) => {
      const data = {elmtype,index,datatype,value};
      dispatch(updateAction(data))
    },
    onDeleteWP: (index) => {
      dispatch(deleteAction({index,elmtype:"WP"}))
    }
  }
}

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasEditor)

export default Editor