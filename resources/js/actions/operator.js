export const create = () => {
    return {
      type: 'CREATE_OPERATOR',
      payload: 'admin create new operator'
    }
}

export const update = (item) => {
    return {
      type: 'UPDATE_OPERATOR',
      payload: item
    }
}

export const get = (items) => {
    return {
      type: 'GET_OPERATORS',
      payload: items
    }
}


export const getAll = (items) => {
    return {
      type: 'GET_OPERATORS_ALL',
      payload: items
    }
}

export const edit = (item) => {
    return {
      type: 'EDIT_OPERATOR',
      payload: item
    }
}
