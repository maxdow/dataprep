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
      <i className={configByElmType[elmType].icon}></i> {configByElmType[elmType].name}
    </li>
  )


export default class ToolBarEditorComponent extends Component {
  render() {
    return (
    <div className="toolbar-editor">
      <ul className="toolbar">
        <ItemEditor onClick={this.props.onSelectElement} elmType={OBJECTS.WP} currentElm={this.props.currentElm}/>
        <ItemEditor onClick={this.props.onSelectElement} elmType={OBJECTS.FPL} currentElm={this.props.currentElm}/>
      </ul>
    </div>
    )
  }
}