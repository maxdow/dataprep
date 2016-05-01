import React, { Component } from "react";

import ol from "openlayers";
require("openlayers/css/ol.css");
require("./mapeditor.css");

import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"
import {waypointGroupToCollection,lineCollectionFromPoints} from "../../helpers"

function dataToVector(data,vector){
  return vector ;
}
function interactionTypeByElmType(elmType) {
  return elmType === OBJECTS.WP ? "Point" :
         elmType === OBJECTS.FPL ? "Point" :
         "Point";
}

const iconStyleWaypoint = new ol.style.Style({
  image: new ol.style.Icon(({
    scale :0.5,
    src: "../../assets/waypoint.png"
  })),
  stroke: new ol.style.Stroke({
    color: "rgba(190,124,230,0.5)",
    width: 4
  })
});

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
        new ol.layer.Vector({source: this.vectorSource,style:iconStyleWaypoint})
      ],
      view: new ol.View({
        center: [0,0],
        zoom: 2
      })
    });
    //this.addInteraction();
    this.map.on("click",this.handleDrawEvent.bind(this))

  }
  addInteraction = (interactionType) => {
    console.log("interaction type",interactionType);
    //remove interaction
    this.interaction = new ol.interaction.Draw({
      features: this.props.waypoints,
      type: interactionTypeByElmType(interactionType),
      style:iconStyleWaypoint
    });

    //this.interaction.handleEvent(true);
    //this.interaction.on("click",this.handleDrawEvent.bind(this))
    this.map.addInteraction(this.interaction);
  }
  handleDrawEvent(event){
    if(!this.interaction) {
      return ;
    }
    const coords = ol.proj.toLonLat(event.coordinate);
    //const coords = ol.proj.toLonLat(event.feature.getGeometry().getCoordinates());
    this.props.onAddElement(this.props.selection,{
      [WP_DATATYPES.TYPE_LNG]:coords[0],
      [WP_DATATYPES.TYPE_LAT]:coords[1]
    })
  }
  componentWillReceiveProps(nextProps){
    if(this.props.data !== nextProps.data){
      this.vectorSource.clear(true);
      this.vectorSource.addFeatures(waypointGroupToCollection(nextProps.data));
      if(nextProps.currentElm === OBJECTS.FPL){
        this.vectorSource.addFeature(lineCollectionFromPoints(nextProps.data.data));
      }
    }
    if(nextProps.currentElm) {
      if(!this.interaction) {
        this.addInteraction(nextProps.currentElm);
      }
      if(this.interaction && nextProps.currentElm !== this.props.currentElm) {
        this.map.removeInteraction(this.interaction);
        this.addInteraction(nextProps.currentElm);
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
    this.map.render();
    return false; // because react is just a wrapper for ol
  }

  render(){
    return <div className="mapeditor" ref="target"></div>
  }
}


export default MapEditorComponent