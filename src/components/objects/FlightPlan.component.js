import React, { Component } from "react";

import Trajectory from "./trajectory.js";

  /*handleWPClick(index) {
    if(this.props.isDeleteMode) {
      this.props.onDeleteWP(index); //todo remove elm
    }
  }*/



const FlightPlan = ({data=[],size}) => (

  data.length ? <svg height={canvas.height} width={canvas.width} >

    <Trajectory waypoints={data} canvas={size}
    onUpdate={this.props.onUpdate.bind(this,OBJECTS.WP)}
    onWPClick={()=>{}/*this.handleWPClick.bind(this)*/}
    />

  </svg> : <span>...</span>

)
export default FlightPlan ;
