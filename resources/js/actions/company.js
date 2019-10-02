export const createCompany = () => {
    return {
      type: 'CREATE_COMPANY',
      payload: 'admin create new company'
    }
}

export const updateCompany = (id) => {
    return {
      type: 'UPDATE_COMPANY',
      payload: id
    }
}