import React, { Component } from "react";

import Trajectory from "./trajectory.js";
import {OBJECTS} from "../../datatypes.constants.js"

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

const FlightPlan = ({data,size, onUpdate}) => (
  <div className="fpl">

    <div className="fpl-form">

    <div className="fpl-formleft">

      <div className="fpl-input fpl-input-adesdadep">
          <img src="../../../assets/plane-up-32.png"/>
        <div className="fpl-input-adesdadep--block fpl-input-geo ">
          <label>ADEP</label>
          <MaskedInput mask="11° 11' 11'' A" name="expiry" placeholder="11° 11' 11'' N" value={data.adep}/>
        </div>
        <div className="fpl-input">
          <label>ETD</label>
          <MaskedInput mask="1111/11/11 11:11" name="etd" placeholder="yyyy/MM/DD HH:MM" value={data.etd}/>
        </div>
      </div>


      <div className="fpl-input fpl-input-adesdadep">
        <img src="../../../assets/plane-land-32.png"/>
        <div className="fpl-input-adesdadep--block fpl-input-geo ">
          <label>ADES</label>
          <MaskedInput mask="11° 11' 11'' A" name="expiry" placeholder="11° 11' 11'' N" value={data.ades}/>
        </div>
      </div>
      <div className="fpl-input fpl-input-geo ">
        <label>AADES</label>
        <input value={data.aades}></input>
      </div>
    </div>

    <div className="fpl-formright">

      <div className="fpl-input">
        <label>Cruising speed</label>
        <input value={data.speed}></input>KT
        <label>Level</label>
        <input value={data.level}></input>
      </div>

      <div className="fpl-input">
      ETA : xx
      </div>

    </div>

    </div>

    <div className="fpl-draw">
      {data.data.length ? <svg height={size.height} width={size.width} >

          <Trajectory flightdata={data} canvas={size}
          onUpdate={onUpdate.bind(this,OBJECTS.FPL,data.id)}
          onWPClick={()=>{}/*this.handleWPClick.bind(this)*/}
          />

      </svg> : null}
    </div>
  </div>

)
export default FlightPlan ;
