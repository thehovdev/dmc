import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendCreateCompany} from '../requests/createCompany';
import {sendEditCompany} from '../requests/editCompany';

import axios from 'axios';

let initialState = {
    form : {
        id : 0,
        name : 'form show status',
        show : false,
    }, 
}


export default function (state = initialState, action) {
    console.log(action.type);

    let form;
    let formData;
    let id = action.payload;

    switch (action.type) {


        case 'CREATE_COMPANY':
            form = document.getElementById('create-company-content');
            formData = getFormData( form );

            console.log('CREATE_COMPANY dispatched');
            sendCreateCompany(formData)

            return state
        case 'EDIT_COMPANY':
            return state

        case 'UPDATE_COMPANY':
            form = document.getElementById('edit-company-content');
            formData = getFormData( form );

            sendEditCompany(formData, id)
            return state    
        default :
            return state
    }    

}