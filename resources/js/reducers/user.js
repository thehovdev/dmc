import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as userApi from '../requests/user';

let form;
let formData;
let payload;
let user;
let users;
let request;
let redirect;
let initialState = {
    edit: false,
    item: null,
    items: null,
    pageCount: null,
    perPage: null,
}


export default function (state = initialState, action) {
    console.log(action.type);

    switch (action.type) {
        case 'GET_USERS':
            users = action.payload;

            return update(state, { 
                items: {$set: users},
                pageCount: {$set: users.last_page},
                perPage: {$set: users.per_page}
            });
        default :
            return state
    }    

}