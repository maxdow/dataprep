import React, { Component } from "react"

import CanvasEditor from "./CanvasEditor.component.js"
import ToolBar from "./ToolBar.component.js"
import MapEditor from "./MapEditor/MapEditor.component.js"

require("./commun.css");

const App = () => (
  <div>
    <ToolBar/>
    <CanvasEditor />
    <MapEditor />
  </div>
)

export default App ;