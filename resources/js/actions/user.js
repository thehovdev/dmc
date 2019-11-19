export const get = (items) => {
    return {
      type: 'GET_USERS',
      payload: items
    }
}


export const getAll = (items) => {
    return {
      type: 'GET_USERS_ALL',
      payload: items
    }
}