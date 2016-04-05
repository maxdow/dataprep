import React, { Component } from "react"
import {WP_DATATYPES} from "../../datatypes.constants"

import Triangle from "../triangle.component.js"
import EditableText from "../editable-text.component.js"

const {MAX_FL_LVL,MIN_FL_LVL} = WP_DATATYPES ;


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
    this.state = {
      isHovered: false,
      isEdited:false,
      isDragged:false
  };
    this.y = getPositionYWaypoint(props.data.get(WP_DATATYPES.TYPE_FL),props.canvasHeight);
    this.mouseDown = false;

  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown, false);
  }
  componentWillReceiveProps(nextProps) {
    this.y = getPositionYWaypoint(nextProps.data.get(WP_DATATYPES.TYPE_FL),nextProps.canvasHeight);
  }

  handleDocumentMouseMove = (event) => {
    event.preventDefault();
    if(this.mouseDown && this.state.isEdited) {
      const diff = event.clientY-this.yClickEvent;

      //console.log(event.clientY-this.posY)
      //
      this.setState({
        isDragged:true,
        ghostPositionY : this.ghostYPositionStart + diff
      })
    }
  }
//flsize
  handleDocumentMouseDown = (event) => {
    this.mouseDown = true;

    if(this.state.isEdited &&
      !isInBoudingBox(this.refs.DOM_wp.getBoundingClientRect(),{
        x : event.pageX,
        y : event.pageY
      })){
      this.setState({isEdited:false,isDragged:false});
    }
  }

  handleDocumentMouseUp = (event) => {
    this.mouseDown = false;
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
    this.yClickEvent = event.clientY;
    this.ghostYPositionStart = this.y;
    this.props.onClick();
    document.addEventListener("mousemove", this.handleDocumentMouseMove, false);

  }
  handleMouseUp(){
    this.mouseDown = false;
    document.removeEventListener("mousemove", this.handleDocumentMouseMove, false);
    this.setState({
      isDragged : false
    });
    if(this.state.ghostPositionY !== this.y){
      this.props.onUpdate(WP_DATATYPES.TYPE_FL,yToFL(this.state.ghostPositionY,this.props.canvasHeight))
    }
  }
  getColor(){
    return this.state.isHovered && !this.state.isEdited ? "#888" :
           this.state.isEdited ? "#E55" : "#222"
  }
  render() {
    const {x, canvasHeight} = this.props;
    const y = this.y ;
    return <g ref="DOM_wp">

            {
              this.state.isDragged ? <g>
                                        <Triangle
                                          center={{
                                            x,
                                            y : this.state.ghostPositionY
                                          }}
                                          size={10}
                                          color={"rgba(0,0,0,0.2)"}
                                          onMouseUp={this.handleMouseUp.bind(this)}
                                        />
                                        <text x={x+15} y={this.state.ghostPositionY+15}>{"FL"+yToFL(this.state.ghostPositionY,canvasHeight)}</text>
                                      </g> : null
            }

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


/**
 * Compute a FL from the current canvas position
 * rounded to 5
 * @author Maxime Warnier
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
function yToFL(y,canvasHeight){
  return Math.ceil(((canvasHeight-y)*MAX_FL_LVL / canvasHeight + 1)/5)*5
}

function getPositionYWaypoint(fl,canvasHeight){
  return canvasHeight - canvasHeight*fl/ MAX_FL_LVL ;
}

function isInBoudingBox(bb,point){
  return bb.left <= point.x && point.x <= bb.right && bb.bottom >= point.y && point.y >= bb.top ;
}