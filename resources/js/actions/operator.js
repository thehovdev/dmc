export const createOperator = () => {
    return {
      type: 'CREATE_OPERATOR',
      payload: 'admin create new operator'
    }
}

export const updateOperator = (operator) => {
    return {
      type: 'UPDATE_OPERATOR',
      payload: operator
    }
}

export const getOperators = (operators) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}


export const getOperatorsAll = (operators) => {
    return {
      type: 'GET_COMPANIES',
      payload: companies
    }
}

export const editOperator = (operator) => {
    return {
      type: 'EDIT_OPERATOR',
      payload: operator
    }
}
