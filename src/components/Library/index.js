import React, { Component } from "react"
import SearchInput, {createFilter} from "react-search-input"
import {OBJECTS} from "../../datatypes.constants.js"

import "react-search-input/react-search-input.css"
import "./library.css";

const mappingObjectKeyToName = (key) => {
  return key === OBJECTS.WP ? "Waypoints" :
         key === OBJECTS.FP ? "FlightPlans" :
                              "..."

}

const isSelected = (selection,elm,type) => {
 return selection && selection.elmtype === type && selection.idElement === elm.id ;
}

const ObjectElement = ({onClick, elm, selected}) => (
  <li  className={"library-object-item" + (selected ? " library-object-item--selected" :"")}
            onClick={onClick}>
            {elm.name}
   </li>
 )

const ObjectCategory = ({objectType, data, onSelectItem, selection}) => (
  <div>
    <div className="library-object-header">{mappingObjectKeyToName(objectType)}</div>
    <div className="library-object-content">
      <ul>
        {data.get(objectType).toJS().map((elm) => <ObjectElement elm={elm}
          selected={isSelected(selection,elm,objectType)}
          key={elm.id}
          onClick={onSelectItem.bind(null,objectType,elm.id)}
        />)}
      </ul>
    </div>
  </div>
)

export default class LibraryComponent extends Component {
  render() {
    return <div className="library">
    <div className="library-header">
      <span className="library-header-title">Library</span>
      <SearchInput className="search-input library-header-search"
        onChange={(input) => {
          console.log(input)
        }} />
      </div>
      <div className="library-content">
        <ObjectCategory
        objectType={OBJECTS.WP}
        {...this.props}
        />
        <ObjectCategory
        objectType={OBJECTS.FP}
        {...this.props}
        />
      </div>
    </div>
  }
}