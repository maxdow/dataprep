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