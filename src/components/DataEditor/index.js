import React, { Component } from "react";

import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

import WaypointEditor from "./WaypointEditor"
import FlightPlan from "../objects/FlightPlan.component";

import "./dataeditor.css"

//TODO : make it responsive with the container elm
const canvasSize = {
  height : 300,
  width : 700
};

export default class DataEditorComponent extends Component {
  render(){
    return (
      <div className="dataeditor">
        {
          this.props.currentElm === OBJECTS.WP ? <WaypointEditor data={this.props.data}/> :
          this.props.currentElm === OBJECTS.FP ? <FlightPlan size={canvasSize}/> :
          "Select a Element in the library or create a new one"
        }
      </div>
      )
  }
}