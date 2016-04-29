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


const helpMessage = () => ({__html: `
                                  <h1>DataPrep</h1>
                                  <p>Select an element from the library or create a new one by clicking on new</p>
                                  <p>For the moment, the workflow is :</p>
                                  <ul>
                                    <li>Create an object (new button)</li>
                                    <li>Add waypoints throught the map (move like googlemaps)</li>
                                    <li>Adjust values with the editor</li>
                                    <li>Export to a geojson file (export button , FPL only)</li>
                                  </ul>
                                  <p>No saving, minimal UX </p>
                                  `
});

export default class DataEditorComponent extends Component {
  render(){
    return (
      <div className="dataeditor">
        {
          this.props.currentElm === OBJECTS.WP ? <WaypointEditor data={this.props.data}/> :
          this.props.currentElm === OBJECTS.FPL ? <FlightPlan size={canvasSize} {...this.props}/> :
          <div className="helpmessage" dangerouslySetInnerHTML={helpMessage()}/>
        }
      </div>
      )
  }
}