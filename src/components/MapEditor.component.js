import React, { Component } from "react";
import { connect } from "react-redux"

import ol from "openlayers";
require("openlayers/css/ol.css");
require("./mapeditor.css");

import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"



class MapEditorComponent extends Component {
  constructor(props) {
    super(props);
    var source = new ol.source.Vector(/*{wrapX: false}*/);

    var vector = new ol.layer.Vector({
      source: source/*,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: "rgba(255, 255, 255, 0.2)"
        }),
        stroke: new ol.style.Stroke({
          color: "#ffcc33",
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: "#ffcc33"
          })
        })
      })*/
    });
    function pointToWp(coordinates, geometry){
      console.log(coordinates);
      /*geometry = new ol.geom.Polygon(null);
      geometry.setCoordinates([
        [start, [start[0], end[1]], end, [end[0], start[1]], start]
      ]);*/
      return geometry;
    }
    /*var draw = new ol.interaction.Draw({
            source: source,
            type: "Point",
            geometryFunction: pointToWp,
            //maxPoints: maxPoints
          });*/

    const handleAddElement = this.handleAddElement.bind(this,props);


    this.map = new ol.Map({
      size:[700,300],
      layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: "sat"})
        }),
        vector
      ],
      view: new ol.View({
        center: [0,0],
        zoom: 2
      }),
      interactions: [
        new ol.interaction.Pointer({
          handleDownEvent : handleAddElement
        })
        //new interaction.DragPan(this.onDrag.bind(this)),
        //new interaction.MouseWheelZoom(this.onZoom.bind(this)),
        //new interaction.Draw(this.onDrawEnd.bind(this))
      ]
    });

  }
  handleAddElement(props,event) {
    console.log(props)
    console.log(event.coordinate);
    props.onAddElement(OBJECTS.WP,{
      [WP_DATATYPES.TYPE_LAT]:event.coordinate[0],
      [WP_DATATYPES.TYPE_LNG]:event.coordinate[1]
    })
  }
  componentDidMount() {
    this.map.setTarget(this.refs.target);
  }
  render(){
    return <div className="mapeditor" ref="target"></div>
  }
}







const addElementAction = (data) => {
  return {
    type: "ADD_ELM",
    data
  }
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
    waypoints: state.data.get(OBJECTS.WP)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddElement: (elmtype,data) => {
      dispatch(addElementAction({elmtype,data}))
    }
  }
}

const MapEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapEditorComponent)

export default MapEditor