import React, { Component } from "react"
import {WP_DATATYPES} from "../../datatypes.constants"

import Triangle from "../triangle.component.js"
import EditableText from "../editable-text.component.js"


const Infos = function(props) {
  const {x, y, data} = props;

  return <g>
        <text x={x} y={y}>{data.get(WP_DATATYPES.TYPE_NAME)}</text>
          <text x={x} y={y+15}>{"FL"}</text>
          <EditableText x={x + 25} y={y+15} value={data.get(WP_DATATYPES.TYPE_FL)} onChange={props.onChange.bind(this,WP_DATATYPES.TYPE_FL)}/>
        {props.isHovered || props.isEdited ?
        <g>
          <EditableText x={x} y={y + 30} value={data.get(WP_DATATYPES.TYPE_LAT)} onChange={props.onChange.bind(this,WP_DATATYPES.TYPE_LAT)}/>
          <EditableText x={x} y={y + 45} value={data.get(WP_DATATYPES.TYPE_LNG)} onChange={props.onChange.bind(this,WP_DATATYPES.TYPE_LNG)}/>
        </g> : null}
      </g>
}

export default class Waypoint extends Component {

  state = {isHovered: false,isEdited:false};
  mouseDown = false;
  componentDidMount() {
    document.addEventListener("mousemove", this.handleDocumentMouseMove, false);
    document.addEventListener("mousedown", this.handleDocumentMouseDown, false);
    document.addEventListener("mouseup", this.handleDocumentMouseUp, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleDocumentMouseMove, false);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown, false);
    document.removeEventListener("mouseup", this.handleDocumentMouseUp, false);
  }

  handleDocumentMouseMove = (event) => {
    event.preventDefault();
    if(this.mouseDown && this.state.isEdited) {
      console.log(event.pageX,event.pageY);
    }
  }

  handleDocumentMouseDown = (event) => {
    event.preventDefault();
    this.mouseDown = true;

    if(this.state.isEdited &&
      !isInBoudingBox(this.refs.DOM_wp.getBoundingClientRect(),{
        x : event.pageX,
        y : event.pageY
      })){
      this.setState({isEdited:false});
    }
  }

  handleDocumentMouseUp = (event) => {
    event.preventDefault();

    this.mouseDown = false;
    console.log(this.mouseDown)

  }

  mouseLeave(){
    this.setState({
      isHovered : false
    });
  }
  mouseOver(){
    this.setState({
      isHovered : true
    });
  }
  mouseClick(){
    this.setState({isEdited:!this.state.isEdited});
    this.props.onClick();
  }
  getColor(){
    return this.state.isHovered && !this.state.isEdited ? "#888" :
           this.state.isEdited ? "#E55" : "#222"
  }
  render() {
    const {x,y} = this.props;
    return <g ref="DOM_wp">
            <Triangle
              center={{x,y}}
              size={10}
              onMouseOver={this.mouseOver.bind(this)}
              onMouseLeave={this.mouseLeave.bind(this)}
              onClick={this.mouseClick.bind(this)}
              color={this.getColor()}
            />
            <Infos x={x + 10} y={y}
            onChange={this.props.onUpdate.bind(this)}
            data={this.props.data}
            {...this.state}
            />
          </g>
  }
}

function isInBoudingBox(bb,point){
  return bb.left <= point.x && point.x <= bb.right && bb.bottom >= point.y && point.y >= bb.top ;
}