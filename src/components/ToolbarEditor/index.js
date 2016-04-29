/**
 * This is the entry point of EditorToolBar
 * EditorToolBar provide controls for the globar editor ( data or spatial )
 *
 */

import React, { Component } from "react";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

import "../toolbar.css"
import "./toolbar-editor.css"


const configByElmType = {
  [OBJECTS.WP] : {
    icon : "fa fa-map-marker",
    name : "Waypoints"
  },
  [OBJECTS.FPL] : {
    icon : "fa fa-plane",
    name : "FlightPlan"
  }
}

const ItemEditor = ({elmType, onClick, currentElm}) => (
    <li onClick={() => currentElm === elmType ? onClick.bind(null,elmType) : null}
      className={`toolbar-editor-tab ${currentElm === elmType ? "toolbar-editor-tab--active" : "toolbar-editor-tab--inactive"}`}>

    </li>
  )
/*
        <div className="toolbar-editor-actions"><button className="toolbar-editor-actions__action">+</button></div>
*/
export default class ToolBarEditorComponent extends Component {
  render() {
    const {currentElm} = this.props;

    return currentElm ? (
      <div className="toolbar-editor">
        <div className="toolbar-editor-item"><i className={configByElmType[currentElm].icon}></i> {configByElmType[currentElm].name}</div>
      </div>
    ) : null
  }
}