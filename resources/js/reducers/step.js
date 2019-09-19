import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendReserve} from '../requests/reserve';
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
    countries : [
        { id: 1, value: 'Azerbaijan' },
    ],
    nationality : [
        { id: 1, value: 'All nations' },
        { id: 2, value: 'International' },
    ],
    ageRange : [
        { id: 1, value: '0-20' },
        { id: 2, value: '20-30' },
        { id: 3, value: '30-50' },
        { id: 4, value: '50-80' },
    ],
    hotelStars : [
        { id: 1, value: '3 star' },
        { id: 2, value: '4 star' },
        { id: 3, value: '5 star' },
    ],
    cuisineTypes : [
        { id: 1, value: 'Mix(local and others)' },
        { id: 2, value: 'Local' },
        { id: 3, value: 'Indian' },
        { id: 4, value: 'Italian' },
        { id: 5, value: 'Arabic' },
        { id: 6, value: 'International' },
    ]

}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_STEP':
            return state
        default :
            return state
    }    

}