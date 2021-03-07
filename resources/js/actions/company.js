export const create = () => {
    return {
      type: 'CREATE_COMPANY',
      payload: 'admin create new company'
    }
}

export const update = (company) => {
    return {
      type: 'UPDATE_COMPANY',
      payload: company
    }
}

export const get = (companies) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}

export const getAll = (companies) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}

export const edit = (company) => {
    return {
      type: 'EDIT_COMPANY',
      payload: company
    }
}
