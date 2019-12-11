import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as requestApi from '../requests/request';

let form;
let formData;
let request;
let requests;
let initialState = {
    edit: false,
    item: null,
    items: null,
    proposal: null,
    pageCount: null,
    perPage: null
}

export default function (state = initialState, action) {

    console.log(action.type);

    switch (action.type) {
        case 'EDIT_REQUEST':
            request = action.payload;
        
            if(request == false) {
                return update(state, { 
                    edit: {$set: false},
                    item: {$set: null},
                    proposal: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                item: {$set: request},
                proposal: {$set: null}
            });

        case 'SHOW_PROPOSAL':

            request = action.payload;
        
            if(request == false) {
                return update(state, { 
                    proposal: {$set: null}
                });
            }

            return update(state, { 
                proposal: {$set: request}
            });

        case 'UPDATE_REQUEST':

            // get request id from action
            request = action.payload;

            // get form data
            form = document.getElementById('send-proposal-content');
            formData = getFormData( form );

            // call api update method
            console.log('UPDATE_REQUEST dispatched');

            requestApi.update(formData, request)

            return state


        case 'RESPOND_REQUEST':

            // get request id from action
            request = action.payload;

            // get form data
            form = document.getElementById('send-proposal-content');
            formData = getFormData( form );

            // call api update method
            console.log('RESPOND_REQUEST dispatched');

            requestApi.respond(formData, request)

            return state

        case 'GET_REQUESTS':
            requests = action.payload;

            return update(state, { 
                items: {$set: requests},
                pageCount: {$set: requests.last_page},
                perPage: {$set: requests.per_page}
            });


        case 'GET_REQUESTS_ALL':
            requests = action.payload;

            return update(state, { 
                items: {$set: requests},
            });

        default :
            return state
    }    

}