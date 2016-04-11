/**
 * This is the entry point of action's ToolBar
 * ToolbarAction provide actions for objects in the library
 *
 *
 * An Object can be :
 *  - added
 *  - viewed
 *  - edited
 *  - deleted
 *  - grouped with an other ( maybe in an other view )
 *  - exported to (geojson, ...)
 *
 */
import React, { Component } from "react";

import "../toolbar.css"
import "./toolbar-action.css"

export default class ToolbarActionComponent extends Component {
  render() {
    return <div className="toolbar-action">
      <button className="toolbar-action-button"><span>new</span><i className="fa fa-2x fa-plus"></i></button>
      <button className="toolbar-action-button"><span>export</span><i className="fa fa-2x fa-download"></i></button>
    </div>
  }
}