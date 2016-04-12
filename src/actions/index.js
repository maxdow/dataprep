export const selectElementAction = (data) => {
  return {
    type: "SELECT_ELM",
    data // {elmtype}
  }
}

export const changeView = (data) => {
  return {
    type: "CHANGE_VIEW",
    data // {coords}
  }
}

export const selectElement = (data) => {
  return {
    type: "VIEW_ELM",
    data // {elmtype, idElement}
  }
}
export const addElement = (data) => {
  return {
    type: "ADD_ELM",
    data
  }
}