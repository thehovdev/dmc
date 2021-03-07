export const get = (items) => {
    return {
      type: 'GET_USERS',
      payload: items
    }
}

export const checkAuth = (status) => {
    return {
      type: 'CHECK_AUTH',
      payload: status
    }
}


export const getAll = (items) => {
    return {
      type: 'GET_USERS_ALL',
      payload: items
    }
}