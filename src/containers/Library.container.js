import { connect } from "react-redux"

import LibraryComponent from "../components/Library"
//import {changeView} from "../actions"


const mapStateToProps = (state) => {
  return {
    data : state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Library = connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryComponent)


export default Library;