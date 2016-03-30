import React, { Component } from "react";
import { connect } from "react-redux"

import ol from "openlayers";
require("openlayers/css/ol.css");
require("./mapeditor.css");

import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"





class MapEditorComponent extends Component {
  constructor(props) {
    super(props);



    /*[1,2,3].forEach(() => {
      this.vectorSource.addFeature(new ol.Feature({
        geometry: new ol.geom.Point([16,48])
      }));
    });*/
    console.log(this.props.waypoints)
    // keep a pointer on class handle
    const handleAddElement = this.handleAddElement.bind(this,props);

    this.vectorSource = new ol.source.Vector({
      features : this.props.waypoints
    });

    const vectorLayer = new ol.layer.Vector({source: this.vectorSource});

    this.map = new ol.Map({
      size:[700,300],
      layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: "sat"})
        }),
        vectorLayer
      ],
      view: new ol.View({
        center: [0,0],
        zoom: 2
      })
    });

    this.addInteraction();

  }
  addInteraction = (interactionType) => {
    //remove intercation
    this.interaction = new ol.interaction.Draw({
      features: this.props.waypoints,
      type: "Point"
    });
    this.interaction.on("drawend",this.handleDrawEvent.bind(this))
    this.map.addInteraction(this.interaction);
  }
  handleDrawEvent(event){
    const coords = ol.proj.transform(event.feature.getGeometry().getCoordinates(), "EPSG:3857", "EPSG:4326");
    this.props.onAddElement(OBJECTS.WP,{
      [WP_DATATYPES.TYPE_LNG]:coords[0],
      [WP_DATATYPES.TYPE_LAT]:coords[1]
    })
  }
  handleAddElement(props,event) {
    /*console.log(props)
    console.log(event.coordinate);
    props.onAddElement(OBJECTS.WP,{
      [WP_DATATYPES.TYPE_LNG]:event.coordinate[0],
      [WP_DATATYPES.TYPE_LAT]:event.coordinate[1]
    })*/
  }

  componentDidMount() {
    this.map.setTarget(this.refs.target);
  }

  render(){
    //redraw()
    return <div className="mapeditor" ref="target"></div>
  }
}







const addElementAction = (data) => {
  return {
    type: "ADD_ELM_MAP",
    data
  }
}


const mapStateToProps = (state) => {
  //console.log(state)
  return {
    waypoints: state.dataMap[OBJECTS.WP]
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