// export const selectToggle = (payload) => {
//     return {
//       type: 'SELECT_TOGGLE',
//       payload: 'user selected hotel input'
//     }
// }


export const selectHotel = () => {
    return {
      type: 'SELECT_HOTEL',
      payload: 'user selected hotel input'
    }
}

export const selectCuisine = () => {
    return {
      type: 'SELECT_CUISINE',
      payload: 'user selected cuisine input'
    }
}

export const selectTransportService = () => {
    return {
      type: 'SELECT_TRANSPORT_SERVICE',
      payload: 'user selected transport service input'
    }
}

export const selectTourLeader = () => {
    return {
      type: 'SELECT_TOUR_LEADER',
      payload: 'user selected tour leader service'
    }
}

export const selectExcursionOptions = () => {
    return {
      type: 'SELECT_EXCURSION_OPTIONS',
      payload: 'user selected excursion options'
    }
}

export const selectMeetingFacilities = () => {
    return {
      type: 'SELECT_MEETING_FACILITIES',
      payload: 'user selected meeting facilities'
    }
}

