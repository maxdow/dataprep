import React, { Component } from "react";
import moment from "moment"
import geolib from "geolib"

import Trajectory from "./trajectory.js";
import {OBJECTS,WP_DATATYPES} from "../../datatypes.constants.js"

import MaskedInput from "react-maskedinput"
import "./fpl.css"

const formatGeographyInput = () => {
  /*
  formatCharacters: {
    'w': {
      validate: function(char) { return /\w/.test(char) }
      transform: function(char) { return char.toLowerCase() }
    }
  }
   */
}

function computeETD(data){
  const startPosition = {
    latitude : data.data[0][WP_DATATYPES.TYPE_LAT],
    longitude : data.data[0][WP_DATATYPES.TYPE_LNG]
  }
  const finalPosition = {
    latitude : data.data[data.data.length-1][WP_DATATYPES.TYPE_LAT],
    longitude : data.data[data.data.length-1][WP_DATATYPES.TYPE_LNG]
  }
  //startPosition,finalPosition,speed,etd
  return geolib.getDistance(startPosition,finalPosition)
}

const formatHour = (event) => moment(event.target.value,"YYYY/MM/DD HH:MM").toDate()

const FlightPlan = ({data,size, onUpdate, onUpdateData}) => {

  return <div className="fpl">

    <div className="fpl-form">

    <div>

      <div className="fpl-input fpl-input-adesdadep">
        <img src="../../../assets/plane-up-32.png"/>
        <div className="fpl-input fpl-input-geo ">
          <label>ADEP</label>
          <MaskedInput mask="11° 11' 11'' A" name="expiry" placeholder="11° 11' 11'' N" value={data.adep}/>
        </div>
        <div className="fpl-input">
          <label>ETD</label>
          <MaskedInput mask="1111/11/11 11:11" name="etd" placeholder="YYYY/MM/DD HH:MM" onChange={(e) => onUpdate("etd",formatHour(e))} value={moment(data.etd).format("YYYY/MM/DD HH:MM")}/>
        </div>
      </div>


      <div className="fpl-input fpl-input-adesdadep">
        <img src="../../../assets/plane-land-32.png"/>
        <div className="fpl-input fpl-input-geo ">
          <label>ADES</label>
          <MaskedInput mask="11° 11' 11'' A" name="ades" placeholder="11° 11' 11'' N" value={data.ades}/>
        </div>
      </div>
      <div className="fpl-input fpl-input-geo ">
        <label>AADES</label>
          <MaskedInput mask="11° 11' 11'' A" name="aades" placeholder="11° 11' 11'' N" value={data.aades}/>
      </div>
    </div>

    <div>

      <div className="fpl-input fpl-input-cruising">
        <label>Cruising speed</label>
        <MaskedInput mask="111" name="speed" placeholder="300" onChange={(e) => onUpdate("speed",parseInt(event.target.value))} value={data.speed.toString()}/>KT

        <label>Level</label>
        <MaskedInput mask="111" name="level" placeholder="300" value={data.level}/>FL
      </div>

      <div className="fpl-input">
      {"ETA : "+ computeETD(data)}
      </div>

    </div>

    </div>

    <div className="fpl-draw">
      {data.data.length > 1 ? <svg height={size.height} width={size.width} >

          <Trajectory flightdata={data} canvas={size}
          onUpdate={onUpdateData.bind(this,OBJECTS.FPL,data.id)}
          onWPClick={()=>{}/*this.handleWPClick.bind(this)*/}
          />

      </svg> : null}
    </div>
  </div>

}
export default FlightPlan ;
