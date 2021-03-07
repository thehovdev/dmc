export const selectToggle = (payload) => {
    return {
      type: 'SELECT_TOGGLE',
      payload: payload
    }
}

export const selectToggleWithParam = (payload) => {
    return {
      type: 'SELECT_TOGGLE_PARAM',
      payload: payload
    }
}

export const getStepParameters = (payload) => {
    return {
        type: 'GET_STEP_PARAMETERS',
        payload: payload
    }
}