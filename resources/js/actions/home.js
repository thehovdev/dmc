export const openForm = () => {
    return {
      type: 'OPEN_FORM',
      payload: 'user opened reserve form'
    }
}

export const closeForm = () => {
    return {
      type: 'CLOSE_FORM',
      payload: 'user closed reserve form'
    }
}

export const sendForm = () => {
    return {
      type: 'SEND_FORM',
      payload: 'user send reserve form'
    }
}
