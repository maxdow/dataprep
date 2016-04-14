import React, { Component } from "react";

import Trajectory from "./trajectory.js";
import {OBJECTS} from "../../datatypes.constants.js"

import "./fpl.css"



const FlightPlan = ({data,size, onUpdate}) => (
  <div className="fpl">

    <div className="fpl-form">

    <div className="fpl-formleft">

      <div className="fpl-input fpl-input-adesdadep">
          <img src="../../../assets/plane-up-32.png"/>
        <div className="fpl-input-adesdadep--block">
          <label>ADEP</label>
          <input  value={data.adep}></input>
        </div>
        <div className="fpl-input">
          <label>ETD</label>
          <input value={data.etd}></input>
        </div>
      </div>


      <div className="fpl-input fpl-input-adesdadep">
        <img src="../../../assets/plane-land-32.png"/>
        <div className="fpl-input-adesdadep--block">
          <label>ADES</label>
          <input  value={data.ades}></input>
        </div>
      </div>
      <div className="fpl-input">
        <label>AADES</label>
        <input value={data.aades}></input>
      </div>
    </div>

    <div className="fpl-formright">
      <div className="fpl-input">
        <label>SPEED</label>
        <input value={data.speed}></input>KT
      </div>

      <div className="fpl-input">
      ETA
      </div>

      <div className="fpl-input">
        <label>Cruising speed / level</label>
        <input></input> /
        <input></input>
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
