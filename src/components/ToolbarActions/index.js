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
import {OBJECTS} from "../../datatypes.constants.js"

import "../toolbar.css"
import "./toolbar-action.css"
import "./contextmenu.css"



//The context-menu to be triggered
const Menu = ({position,visible,items,onClick}) => (
  <ul
    style={position}
    className={"context-menu " + (visible ? "context-menu__actif" : "")}>
    {items.map((item,i) => <li className="context-menu--item" key={i} onClick={onClick.bind(null,item.action)}>{item.text}</li>)}
  </ul>
);



export default class ToolbarActionComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      contextMenuVisible : false,
      contextmenuPosition :null
    };
    this.contextMenuContent = [
                                  {
                                    action : OBJECTS.WP,
                                    text : "Waypoints Group"
                                  },
                                  {
                                    action : OBJECTS.FPL,
                                    text : "FlightPlan"
                                  }
                              ]

  }

  handleMenuClick(elmType){
    this.props.onNewElement(elmType);
    this.setState({
      contextMenuVisible : false
    });
  }

  handleClickAdd(event){
    this.setState({
      contextMenuVisible : true,
      contextmenuPosition :{
          top : event.pageY,
          left : event.pageX
        }
    })
  }
  handleExport(){
    console.log(this.props.data);
  }

  render() {
    return <div className="toolbar-action">

      <button onClick={this.handleClickAdd.bind(this)} className="toolbar-action-button"><span>new</span><i className="fa fa-2x fa-plus"></i></button>

      <button onClick={this.handleExport.bind(this)} className="toolbar-action-button"><span>export</span><i className="fa fa-2x fa-download"></i></button>


      <Menu position={this.state.contextmenuPosition} visible={this.state.contextMenuVisible} items={this.contextMenuContent} onClick={this.handleMenuClick.bind(this)}/>
    </div>
  }
}