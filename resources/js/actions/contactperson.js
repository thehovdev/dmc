export const create = () => {
    return {
      type: 'CREATE_CONTACT_PERSON',
      payload: 'admin create new company'
    }
}

export const update = (contactPerson) => {
    return {
      type: 'UPDATE_CONTACT_PERSON',
      payload: contactPerson
    }
}

export const get = (contactPersons) => {
    return {
      type: 'GET_CONTACT_PERSONS',
      payload: contactPersons
    }
}

export const edit = (contactPerson) => {
    return {
      type: 'EDIT_CONTACT_PERSON',
      payload: contactPerson
    }
}
