import React, { Component } from "react"
import SearchInput, {createFilter} from "react-search-input"
import {OBJECTS} from "../../datatypes.constants.js"

import "react-search-input/react-search-input.css"
import "./library.css";

const mappingObjectKeyToName = (key) => {
  if(key === OBJECTS.WP) {
    return "Waypoints"
  } else {
    return "..."
  }
}

const isSelected = (selection,elm,type) => {
 return selection && selection.elmtype === type && selection.idElement === elm.id ;
}

const WaypointElement = ({onClick, elm, selected}) => (
  <li  className={"library-object-item" + (selected ? " library-object-item--selected" :"")}
            onClick={onClick}>

            {`${elm.groupName} (${elm.data.length} items)`}
   </li>
 )

const ObjectCategory = ({objectType, data, onClick, selection}) => (
  <div>
    <div className="library-object-header">Waypoints</div>
    <div className="library-object-content">
      <ul>
        {data.map((elm) => <WaypointElement elm={elm}
          selected={isSelected(selection,elm,OBJECTS.WP)}
          key={elm.id}
          onClick={onClick.bind(null,elm.id)}
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
        data={this.props.data.get(OBJECTS.WP).toJS()}
        selection={this.props.selection}
        onClick={this.props.onSelectItem.bind(null,OBJECTS.WP)}
        />
      </div>
    </div>
  }
}