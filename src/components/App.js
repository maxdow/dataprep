import React, { Component } from "react"

import CanvasEditor from "./CanvasEditor.component.js"
import ToolBarEditor from "../containers/ToolbarEditor.container"
import ToolBarGeo from "../containers/ToolbarGeo.container"
import MapEditor from "./MapEditor/MapEditor.component.js"

require("./commun.css");

const App = () => (
  <div className="wrapper">
    <div className="editor">
      <ToolBarEditor/>
      <CanvasEditor />
      <ToolBarGeo />
      <MapEditor />
    </div>
  </div>
)

export default App ;