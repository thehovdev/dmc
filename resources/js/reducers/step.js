import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendReserve} from '../requests/reserve';
import {translate} from '../includes/helpers';
import axios from 'axios';

let initialState = {
    groupTypes : [{}],
    nationality : [{}],
    ageRange : [{}],
    hotelStars : [{}],
    cuisineTypes : [{}],
    countries : [{}],
    transferServices : [{}],
    inputActions : {
        needHotel : false,
        needTransfer : false,
        needCuisine: false,
        needTourLeader: false,
        needExcursionOptions: false,
        needMeetingFacilities: false
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_STEP':
            return state
        case 'SELECT_TOGGLE':

            // get payload from action
            let payload = action.payload

            // toggle true/false status
            let status = !state.inputActions[payload]

            return update(state, { 
                inputActions: {
                    [payload]: {$set: status},
                }
            });
        case 'GET_STEP_PARAMETERS':
            
            let nationalities = action.payload.nationalities;
            let groupTypes = action.payload.groupTypes;
            let cuisineTypes = action.payload.cuisineTypes;
            let hotelStars = action.payload.hotelStars;
            let countries = action.payload.countries;
            let ageRange = action.payload.ageRange;
            let transferServices = action.payload.transfers;


            console.log(hotelStars);

            return update(state, { 
                nationality: {$set: nationalities},
                groupTypes: {$set: groupTypes},
                cuisineTypes: {$set: cuisineTypes},
                hotelStars: {$set: hotelStars},
                countries: {$set: countries},
                ageRange: {$set: ageRange},
                transferServices: {$set: transferServices}
            });
        default :
            return state
    }    

}