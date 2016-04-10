import { connect } from "react-redux"

import LibraryComponent from "../components/Library"
import {selectElement} from "../actions"


const mapStateToProps = (state) => {
  return {
    data : state.data,
    selection : state.editor.dataSelection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectItem : (elmtype, idElement) => {
      dispatch(selectElement({elmtype, idElement}));
    }
  }
}

const Library = connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryComponent)


export default Library;