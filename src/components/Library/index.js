import React, { Component } from "react"
import SearchInput, {createFilter} from "react-search-input"

import "react-search-input/react-search-input.css"

import "./library.css";

const ObjectCategory = ({objectType}) => (
  <div>
    <div className="library-object-header">Waypoints</div>
    <div className="library-object-content">
      <ul>
        <li>WP1</li>
        <li>WP2</li>
        <li>WP3</li>
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
        <ObjectCategory objectType={"WP"} />
      </div>
    </div>
  }
}