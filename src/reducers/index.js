import { combineReducers } from "redux"
import data from "./elements.reducer"
import editor from "./editor.reducer"

export default combineReducers({data,editor})