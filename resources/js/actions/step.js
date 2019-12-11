export const selectToggle = (payload) => {
    return {
      type: 'SELECT_TOGGLE',
      payload: payload
    }
}

export const getCountries = (payload) => {
    return {
        type: 'GET_COUNTRIES',
        payload: payload
    }
}