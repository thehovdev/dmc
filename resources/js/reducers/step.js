import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendReserve} from '../requests/reserve';
import {translate} from '../includes/helpers';
import axios from 'axios';

let initialState = {
    groupTypes : [
        { id: 1, value: 'Training' },
        { id: 2, value: 'Incentive' },
        { id: 3, value: 'Conference' },
        { id: 4, value: 'Meeting' },
        { id: 5, value: 'CityWide Event' },
        { id: 6, value: 'Event' },
        { id: 7, value: 'Corporate' },
        { id: 8, value: 'Government' },
        { id: 9, value: 'Leisure' },
        { id: 10, value: 'Family' },
    ],
    nationality : [{}],
    ageRange : [
        { id: 1, value: '0-20' },
        { id: 2, value: '20-30' },
        { id: 3, value: '30-50' },
        { id: 4, value: '50-80' },
    ],
    hotelStars : [
        { id: 1, prefix: 'hotel_star_3', value: translate('star3') },
        { id: 2, prefix: 'hotel_star_4', value: translate('star4') },
        { id: 3, prefix: 'hotel_star_5', value: translate('star5') },
    ],
    cuisineTypes : [
        { id: 1, prefix: 'cuisine_mix', value: 'Mix(local and others)' },
        { id: 2, prefix: 'cuisine_local', value: 'Local' },
        { id: 3, prefix: 'cuisine_indian', value: 'Indian' },
        { id: 4, prefix: 'cuisine_arabic', value: 'Arabic' },
        { id: 5, prefix: 'cuisine_italian', value: 'Italian' },
        { id: 6, prefix: 'cuisine_international', value: 'International' },
    ],
    countries : [
        { id: 1, value: 'Azerbaijan' },
    ],
    transferServices : [
        { id: 1, prefix: 'transfer_airport', value: 'Airport transfer' },
        { id: 2, prefix: 'transfer_during_stay', value: 'Transfer during the stay' },
    ],

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
            console.log('select toggle dispatched');

            // get payload from action
            let payload = action.payload

            // toggle true/false status
            let status = !state.inputActions[payload]

            return update(state, { 
                inputActions: {
                    [payload]: {$set: status},
                }
            });
        case 'GET_COUNTRIES':
            console.log('GET_COUNTRIES');

            let nationality = []
            let countries = action.payload.countries;

            return update(state, { 
                nationality: {$set: countries},
            });
        default :
            return state
    }    

}