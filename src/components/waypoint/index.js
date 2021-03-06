import React, { Component } from "react"
import {WP_DATATYPES} from "../../datatypes.constants"
import moment from "moment"
import geolib from "geolib";

import Triangle from "../triangle.component.js"
import EditableText from "../editable-text.component.js"
//import {pointToGeo} from "../../helpers.js"

const {MAX_FL_LVL,MIN_FL_LVL} = WP_DATATYPES ;


const Infos = function(props) {
  const {x, y, data} = props;

  return <g className={props.isHovered ? "waypoint-info--hovered" : ""}>
        <text x={x} y={y}>{data[WP_DATATYPES.TYPE_NAME]}</text>
          <text x={x} y={y+15}>{"FL"}</text>
          <EditableText x={x + 25} y={y+15} value={data[WP_DATATYPES.TYPE_FL]} onChange={props.onChange.bind(this,WP_DATATYPES.TYPE_FL)}/>
        {props.isHovered || props.isEdited ?
        <g>
          <text x={x} y={y + 30}>Lat :</text><EditableText x={x+35} y={y + 30} value={geolib.decimal2sexagesimal(data[WP_DATATYPES.TYPE_LAT])}
          onChange={(value) => props.onChange(WP_DATATYPES.TYPE_LAT,geolib.sexagesimal2decimal(value))}/>
          <text x={x} y={y + 45}>Lng :</text><EditableText x={x+35} y={y + 45} value={geolib.decimal2sexagesimal(data[WP_DATATYPES.TYPE_LNG])}
          onChange={(value) => props.onChange(WP_DATATYPES.TYPE_LNG,geolib.sexagesimal2decimal(value))}/>
          <text x={x} y={y + 65}>Time : </text><text x={x+45} y={y+65}>{moment(data.timestamp).format("YYYY/MM/DD HH:mm")}</text>

        </g> : null
        }
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
    this.y = getPositionYWaypoint(props.data[WP_DATATYPES.TYPE_FL],props.canvasHeight);
    this.mouseDown = false;

  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown, false);
  }
  componentWillReceiveProps(nextProps) {
    this.y = getPositionYWaypoint(nextProps.data[WP_DATATYPES.TYPE_FL],nextProps.canvasHeight);
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
                                          color={"rgba(0,0,0,0.3)"}
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
            {this.props.showWaypointInfo || this.state.isHovered ? <Infos x={x + 10} y={y}
              onChange={this.props.onUpdate.bind(this)}
              data={this.props.data}
              {...this.state}
              /> :null}
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