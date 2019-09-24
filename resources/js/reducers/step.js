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
        { id: 1, prefix: 'hotel_star_3', value: '3 star' },
        { id: 2, prefix: 'hotel_star_4', value: '4 star' },
        { id: 3, prefix: 'hotel_star_5', value: '5 star' },
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
    transportServices : [
        { id: 1, prefix: 'transfer_airport', value: 'Airport transfer' },
        { id: 2, prefix: 'transfer_during_stay', value: 'Transfer during the stay' },
    ],

    inputActions : {
        needHotel : false,
        needTransportService : false,
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

        // case 'SELECT_HOTEL':
        //     console.log('select hotel dispatched');
        //     let needHotel = state.inputActions.needHotel
        //     if(needHotel == false) needHotel = true; else needHotel = false
        //     return update(state, { 
        //         inputActions : {
        //             needHotel: {$set: needHotel},
        //         }
        //     });
        // case 'SELECT_CUISINE':
        //     console.log('select cuisine dispatched');
        //     let needCuisine = state.inputActions.needCuisine
        //     if(needCuisine == false) needCuisine = true; else needCuisine = false
        //     return update(state, { 
        //         inputActions : {
        //             needCuisine: {$set: needCuisine},
        //         }
        //     });
        // case 'SELECT_TRANSPORT_SERVICE':
        //     console.log('select transport service dispatched');
        //     let needTransportService = state.inputActions.needTransportService
        //     if(needTransportService == false) needTransportService = true; else needTransportService = false
        //     return update(state, { 
        //         inputActions : {
        //             needTransportService: {$set: needTransportService},
        //         }
        //     });
        // case 'SELECT_TOUR_LEADER':
        //     console.log('select tour leader dispatched');
        //     let needTourLeader = state.inputActions.needTourLeader
        //     if(needTourLeader == false) needTourLeader = true; else needTourLeader = false
        //     return update(state, { 
        //         inputActions : {
        //             needTourLeader: {$set: needTourLeader},
        //         }
        //     });                
        // case 'SELECT_EXCURSION_OPTIONS':
        //     console.log('select excursion options dispatched');
        //     let needExcursionOptions = state.inputActions.needExcursionOptions
        //     if(needExcursionOptions == false) needExcursionOptions = true; else needExcursionOptions = false
        //     return update(state, { 
        //         inputActions : {
        //             needExcursionOptions: {$set: needExcursionOptions},
        //         }
        //     });    
        // case 'SELECT_MEETING_FACILITIES':
        //     console.log('select meeting facilities dispatched');
        //     let needMeetingFacilities = state.inputActions.needMeetingFacilities
        //     if(needMeetingFacilities == false) needMeetingFacilities = true; else needMeetingFacilities = false
        //     return update(state, { 
        //         inputActions : {
        //             needMeetingFacilities: {$set: needMeetingFacilities},
        //         }
        //     });    
        default :
            return state
    }    

}