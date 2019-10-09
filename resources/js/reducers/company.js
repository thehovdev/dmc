import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as companyApi from '../requests/company';
import * as api from '../requests/api';


let form;
let formData;
let company;
let companies;
let request;
let redirect;
let initialState = {
    edit: false,
    companyData: null,
    companiesData: null,
    companiesPageCount: null,
}

export default function (state = initialState, action) {
    console.log(action.type);

    switch (action.type) {
        case 'CREATE_COMPANY':
            form = document.getElementById('create-company-content');
            formData = getFormData( form );

            console.log('CREATE_COMPANY dispatched');
            companyApi.createCompany(formData)

            return state       
        case 'UPDATE_COMPANY':
            // get company id from action
            company = action.payload;

            // get form data
            form = document.getElementById('edit-company-content');
            formData = getFormData( form );

            // call api update method
            console.log('UPDATE_COMPANY dispatched');
            companyApi.updateCompany(formData, company)

            return state

        case 'EDIT_COMPANY':
            company = action.payload;
        
            if(company == false) {
                return update(state, { 
                    edit: {$set: false},
                    companyData: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                companyData: {$set: company}
            });

        case 'GET_COMPANIES':
            companies = action.payload;

            return update(state, { 
                companiesData: {$set: companies},
                companiesPageCount: {$set: companies.last_page},
                companiesPerPage: {$set: companies.per_page}
            });


        case 'GET_COMPANIES_ALL':
            companies = action.payload;

            return update(state, { 
                companiesData: {$set: companies},
            });

        default :
            return state
    }    

}