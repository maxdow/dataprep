/**
 * This is the entry point of GeoToolBar
 * GeoToolbar provide controls for the MapView
 *
 */
import React, {Component} from "react"
import Select from "react-select"
import "react-select/dist/react-select.css"
import "./toolbar-geo.css"

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}

export default class ToolBarGeoComponent extends Component {
  render() {
    return (
    <div className="toolbar-geo">
      <button>ADEP</button>
      <button>ADES</button>
      <button>AADES</button>
      <div className="toolbar-geo-item">
        <span className="toolbar-geo-label">Zoom to</span>
        <Select
            name="zone-zoom"
            value="one"
            clearable={false}
            options={options}
            onChange={logChange}
        />
      </div>
    </div>
    )
  }
}