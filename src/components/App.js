import React, { Component } from "react"

import CanvasEditor from "./CanvasEditor.component.js"
import ToolBarEditor from "../containers/ToolbarEditor.container"
import ToolBarGeo from "../containers/ToolbarGeo.container"
import Library from "../containers/Library.container.js"
import ToolbarActionComponent from "./ToolbarActions"
import MapEditor from "./MapEditor/MapEditor.component.js"


import "./commun.css"
import "./layout.css"

const App = () => (
  <div className="wrapper">
    <div className="layout-editors">
      <ToolBarEditor/>
      <CanvasEditor />
      <ToolBarGeo />
      <MapEditor />
    </div>
    <ToolbarActionComponent />
    <div className="layout-library">
      <Library/>
    </div>

  </div>
)

export default App ;