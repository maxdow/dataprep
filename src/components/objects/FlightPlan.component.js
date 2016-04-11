import React, { Component } from "react";

import Trajectory from "./trajectory.js";

  /*handleWPClick(index) {
    if(this.props.isDeleteMode) {
      this.props.onDeleteWP(index); //todo remove elm
    }
  }*/



const FlightPlan = ({data,size, onUpdate}) => (

  data.data.length ? <svg height={size.height} width={size.width} >

    <Trajectory flightdata={data} canvas={size}
    onUpdate={/*onUpdate.bind(this,OBJECTS.WP)*/()=>{}}
    onWPClick={()=>{}/*this.handleWPClick.bind(this)*/}
    />

  </svg> : <span>{console.log(data)}</span>

)
export default FlightPlan ;
