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



const ObjectCategory = ({objectType, data}) => (
  <div>
    <div className="library-object-header">Waypoints</div>
    <div className="library-object-content">
      <ul>
        {data.map((elm) => <li>{`${elm.groupName} (${elm.data.length} items)`}</li>)}
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
        <ObjectCategory objectType={OBJECTS.WP} data={this.props.data.get(OBJECTS.WP).toJS()} />
      </div>
    </div>
  }
}