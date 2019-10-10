import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as companyApi from '../requests/company';

let form;
let formData;
let company;
let companies;
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
        case 'CREATE_COMPANY':
            form = document.getElementById('create-company-content');
            formData = getFormData( form );

            console.log('CREATE_COMPANY dispatched');
            companyApi.create(formData)

            return state       
        case 'UPDATE_COMPANY':
            // get company id from action
            company = action.payload;

            // get form data
            form = document.getElementById('edit-company-content');
            formData = getFormData( form );

            // call api update method
            console.log('UPDATE_COMPANY dispatched');
            companyApi.update(formData, company)

            return state

        case 'EDIT_COMPANY':
            company = action.payload;
        
            if(company == false) {
                return update(state, { 
                    edit: {$set: false},
                    item: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                item: {$set: company}
            });

        case 'GET_COMPANIES':
            companies = action.payload;

            return update(state, { 
                items: {$set: companies},
                pageCount: {$set: companies.last_page},
                perPage: {$set: companies.per_page}
            });


        case 'GET_COMPANIES_ALL':
            companies = action.payload;

            return update(state, { 
                items: {$set: companies},
            });

        default :
            return state
    }    

}