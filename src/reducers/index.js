import { combineReducers } from "redux"
import data from "./elements.reducer"
import editor from "./editor.reducer"
import dataMap from "./map.reducer"

export default combineReducers({data,editor,dataMap})