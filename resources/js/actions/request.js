export const create = () => {
    return {
      type: 'CREATE_REQUEST',
      payload: 'admin create new company'
    }
}

export const update = (request) => {
    return {
      type: 'UPDATE_REQUEST',
      payload: request
    }
}

export const get = (requests) => {
    return {
      type: 'GET_REQUESTS',
      payload: requests
    }
}

export const getAll = (requests) => {
    return {
      type: 'GET_REQUESTS',
      payload: companies
    }
}

export const edit = (request) => {
    return {
      type: 'EDIT_REQUEST',
      payload: request
    }
}

export const respond = (request) => {
    return {
      type: 'RESPOND_REQUEST',
      payload: request
    }
}