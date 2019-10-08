export const createContactPerson = () => {
    return {
      type: 'CREATE_CONTACT_PERSON',
      payload: 'admin create new company'
    }
}

export const updateContactPerson = (contactPerson) => {
    return {
      type: 'UPDATE_CONTACT_PERSON',
      payload: contactPerson
    }
}

export const getContactPersons = (contactPersons) => {
    return {
      type: 'GET_CONTACT_PERSONS',
      payload: contactPersons
    }
}

export const editContactPerson = (contactPerson) => {
    return {
      type: 'EDIT_CONTACT_PERSON',
      payload: contactPerson
    }
}
