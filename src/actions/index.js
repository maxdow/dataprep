
// TODO
// factor this
// element could be object (wp , fpl ...)
// item could be data from this element

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

export const newElement = (data) => {
  return {
    type: "NEW_ELM",
    data
  }
}

export const updateElement = (data) => {
  return {
    type: "UPDATE_ELM",
    data
  }
}

export const updateElementData = (data) => {
  return {
    type: "UPDATE_ELM_DATA",
    data
  }
}