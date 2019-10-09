import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as api from '../requests/api';

let form;
let formData;
let item;
let items;
let request;
let redirect;
let initialState = {
    edit: false,
    data: null,
    datas: null,
    pagecount: null,
}

export default function (state = initialState, action) {
    console.log(action.type);

    switch (action.type) {
        case 'CREATE_OPERATOR':
            form = document.getElementById('create-company-operator-content');
            formData = getFormData( form );

            redirect = '/admin/operator';
            request = '/api/operator';

            console.log('CREATE_OPERATOR dispatched');
            api.create(formData, request, redirect)

            return state       
        // case 'UPDATE_COMPANY':
        //     // get company id from action
        //     company = action.payload;

        //     // get form data
        //     form = document.getElementById('edit-company-content');
        //     formData = getFormData( form );

        //     // call api update method
        //     console.log('UPDATE_COMPANY dispatched');
        //     companyApi.updateCompany(formData, company)

        //     return state

        // case 'EDIT_COMPANY':
        //     company = action.payload;
        
        //     if(company == false) {
        //         return update(state, { 
        //             edit: {$set: false},
        //             companyData: {$set: null}
        //         });
        //     }

        //     return update(state, { 
        //         edit: {$set: true},
        //         companyData: {$set: company}
        //     });

        // case 'GET_COMPANIES':
        //     companies = action.payload;

        //     return update(state, { 
        //         companiesData: {$set: companies},
        //         companiesPageCount: {$set: companies.last_page},
        //         companiesPerPage: {$set: companies.per_page}
        //     });


        // case 'GET_COMPANIES_ALL':
        //     companies = action.payload;

        //     return update(state, { 
        //         companiesData: {$set: companies},
        //     });

        default :
            return state
    }    

}