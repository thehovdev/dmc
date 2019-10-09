export const createCompany = () => {
    return {
      type: 'CREATE_COMPANY',
      payload: 'admin create new company'
    }
}

export const createOperator = () => {
    return {
      type: 'CREATE_OPERATOR',
      payload: 'admin create new operator'
    }
}

export const updateCompany = (company) => {
    return {
      type: 'UPDATE_COMPANY',
      payload: company
    }
}

export const getCompanies = (companies) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}

export const getCompaniesAll = (companies) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}

export const editCompany = (company) => {
    return {
      type: 'EDIT_COMPANY',
      payload: company
    }
}
