/**
 * This is the entry point of EditorToolBar
 * EditorToolBar provide controls for the globar editor ( data or spatial )
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux"
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

import "../toolbar.css"
import "./toolbar-editor.css"


const configByElmType = {
  [OBJECTS.WP] : {
    icon : "fa fa-map-marker",
    name : "Waypoint"
  },
  [OBJECTS.FL] : {
    icon : "fa fa-plane",
    name : "FlightPlan"
  }
}

const ItemEditor = ({elmType, onClick, currentElm}) => (
    <li><button onClick={onClick.bind(null,elmType)}
      className={`toolbar-editor-button ${currentElm === elmType ? "toolbar-editor-button--active" : ""}`}>
      <i className={configByElmType[elmType].icon}></i> {configByElmType[elmType].name}</button>
    </li>
  )


export default class ToolBarEditorComponent extends Component {
  render() {
    return (
    <div className="toolbar-editor">
      <ul className="toolbar">
        <ItemEditor onClick={this.props.onSelectElement} elmType={OBJECTS.WP} currentElm={this.props.currentElm}/>
        <ItemEditor onClick={this.props.onSelectElement} elmType={OBJECTS.FL} currentElm={this.props.currentElm}/>
      </ul>
    </div>
    )
  }
}