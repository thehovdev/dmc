import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as contactPersonApi from '../requests/contactperson';

let form;
let formData;
let contactPerson;
let contactPersons;
let initialState = {
    edit: false,
    item: null,
    items: null,
    contactPersonsPageCount: null,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'CREATE_CONTACT_PERSON':
            form = document.getElementById('create-contact-person-content');
            formData = getFormData( form );

            console.log('CREATE_CONTACT_PERSON dispatched');
            contactPersonApi.create(formData)

            return state
        case 'UPDATE_CONTACT_PERSON':
            // get company id from action
            contactPerson = action.payload;

            // get form data
            form = document.getElementById('edit-contact-person-content');
            formData = getFormData( form );

            // call api update method
            console.log('UPDATE_CONTACT_PERSON dispatched');
            contactPersonApi.update(formData, contactPerson)

            return state

        case 'EDIT_CONTACT_PERSON':
            contactPerson = action.payload;

            if(contactPerson == false) {
                return update(state, { 
                    edit: {$set: false},
                    item: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                item: {$set: contactPerson}
            });

        case 'GET_CONTACT_PERSONS':
            contactPersons = action.payload;

            return update(state, { 
                items: {$set: contactPersons},
                contactPersonsPageCount: {$set: contactPersons.last_page},
                contactPersonsPerPage: {$set: contactPersons.per_page}
            });

        default :
            return state
    }    

}