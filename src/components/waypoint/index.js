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

  constructor(props){
    super(props);
    this.state = {isHovered: false,isEdited:false,ghostPosition:{
      x:props.x,
      y:props.y
    }};
    this.mouseDown = false;

  }
  componentDidMount() {
    this.refs.DOM_wp.addEventListener("mousemove", this.handleDocumentMouseMove, false);
    document.addEventListener("mousedown", this.handleDocumentMouseDown, false);
    document.addEventListener("mouseup", this.handleDocumentMouseUp, false);
  }
  componentWillUnmount() {
    this.refs.DOM_wp.removeEventListener("mousemove", this.handleDocumentMouseMove, false);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown, false);
    document.removeEventListener("mouseup", this.handleDocumentMouseUp, false);
  }

  handleDocumentMouseMove = (event) => {

    event.preventDefault();
    if(this.mouseDown && this.state.isEdited) {
      const diff = event.clientY-this.posY;
      console.log(event.clientY-this.posY)
      this.setState({
        ghostPosition : {
          x : this.state.ghostPosition.x,
          y : this.state.ghostPosition.y + diff
        }
      })
    }
  }
//flsize
  handleDocumentMouseDown = (event) => {
    console.log("mousedown")
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
    this.mouseDown = false; // todo , export to canvas
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
  handleMouseDown(event){
    this.setState({isEdited:true});
    console.log("mouse down ----->",event.clientY)
    this.posY = event.clientY;
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
              center={this.state.ghostPosition}
              size={10}
              onMouseOver={this.mouseOver.bind(this)}
              onMouseLeave={this.mouseLeave.bind(this)}
              onMouseDown={this.handleMouseDown.bind(this)}
              color={"#456"}
            />
            <Triangle
              center={{x,y}}
              size={10}
              onMouseOver={this.mouseOver.bind(this)}
              onMouseLeave={this.mouseLeave.bind(this)}
              onMouseDown={this.handleMouseDown.bind(this)}
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