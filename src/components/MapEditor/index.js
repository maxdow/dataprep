import React, { Component } from "react";

import ol from "openlayers";
require("openlayers/css/ol.css");
require("./mapeditor.css");

import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"
import {waypointGroupToCollection} from "../../helpers"

function dataToVector(data,vector){
  return vector ;
}

class MapEditorComponent extends Component {
  constructor(props) {
    super(props);

    this.vectorSource = new ol.source.Vector();
    this.map = new ol.Map({
      size:[700,300],
      layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: "toner-lite"
          })
        }),
        new ol.layer.Vector({source: this.vectorSource})
      ],
      view: new ol.View({
        center: [0,0],
        zoom: 2
      })
    });

    //this.addInteraction();

  }
  addInteraction = (interactionType) => {
    //remove interaction
    this.interaction = new ol.interaction.Draw({
      features: this.props.waypoints,
      type: "Point"
    });
    this.interaction.on("drawend",this.handleDrawEvent.bind(this))
    this.map.addInteraction(this.interaction);
  }
  handleDrawEvent(event){
    const coords = event.feature.getGeometry().getCoordinates();//ol.proj.transform(event.feature.getGeometry().getCoordinates(), "EPSG:3857", "EPSG:4326");
    this.props.onAddElement(this.props.selection,{
      [WP_DATATYPES.TYPE_LNG]:coords[0],
      [WP_DATATYPES.TYPE_LAT]:coords[1]
    })
  }
  componentWillReceiveProps(nextProps){
    if(this.props.data !== nextProps.data){
      this.vectorSource.clear(true);
      this.vectorSource.addFeatures(waypointGroupToCollection(nextProps.data));
    }
    if(nextProps.currentElm) {
      if(!this.interaction) {
        this.addInteraction();
      }

    } else {
      this.map.removeInteraction(this.interaction);
      this.interaction = null ;
    }

  }
  componentDidMount() {
    this.map.setTarget(this.refs.target);
  }
  shouldComponentUpdate() {
    //console.log("render")
    this.map.render();
    return false; // because react is just a wrapper for ol
  }

  render(){
    return <div className="mapeditor" ref="target"></div>
  }
}


export default MapEditorComponent