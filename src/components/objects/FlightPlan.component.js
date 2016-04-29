import React, { Component } from "react";
import moment from "moment"
import geolib from "geolib"

import {computeTimestamps} from "../../helpers.js";

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
  if(data.data.length < 2){
    return null
  }
  const startPosition = {
    latitude : data.data[0][WP_DATATYPES.TYPE_LAT],
    longitude : data.data[0][WP_DATATYPES.TYPE_LNG]
  }
  const finalPosition = {
    latitude : data.data[data.data.length-1][WP_DATATYPES.TYPE_LAT],
    longitude : data.data[data.data.length-1][WP_DATATYPES.TYPE_LNG]
  }
  const d = geolib.getDistance(startPosition,finalPosition); // m
  const v = data.speed*0.514444444; //m.s-1
  const t = d/v;
  const date = moment(data.etd).add(t,"s")

  return `${date.format("YYYY/MM/DD HH:mm")} (${moment.duration(t,"s").humanize()})`
}

const formatHour = (event) => moment(event.target.value,"YYYY/MM/DD HH:mm").toDate()

//dont update if date is invalid
function dataChangeCallBack(value,data,update){
  const newdate = formatHour(value);
  if(moment(newdate).isValid()){
    update(OBJECTS.FPL,data.id,"etd",newdate)
  }
}

const FlightPlan = ({data,size, onUpdate, onUpdateData}) => {

  const waypoints = computeTimestamps(data.data,data.etd,data.speed);
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
          <MaskedInput mask="1111/11/11 11:11" name="etd" placeholder="YYYY/MM/DD HH:mm" onChange={(event) => dataChangeCallBack(event,data,onUpdate)} value={moment(data.etd).format("YYYY/MM/DD HH:mm")}/>
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
        <MaskedInput mask="111" name="speed" placeholder="300" onChange={(e) => onUpdate(OBJECTS.FPL,data.id,"speed",parseInt(e.target.value))} value={data.speed.toString()}/>KT

        <label>Level</label>
        <MaskedInput mask="111" name="level" placeholder="300" value={data.level}/>FL
      </div>

      <div className="fpl-input">
      {waypoints.length ? ("ETA : "+ moment(waypoints[waypoints.length-1].timestamp).format("YYYY/MM/DD HH:mm")) : ""}
      </div>

    </div>

    </div>

    <div className="fpl-draw">
      {waypoints.length > 1 ? <svg height={size.height} width={size.width} >

          <Trajectory flightdata={data} canvas={size}
          showWaypointInfo={waypoints.length < 10}
          onUpdate={onUpdateData.bind(this,OBJECTS.FPL,data.id)}
          onWPClick={()=>{}/*this.handleWPClick.bind(this)*/}
          />

      </svg> : null}
    </div>
  </div>

}
export default FlightPlan ;
