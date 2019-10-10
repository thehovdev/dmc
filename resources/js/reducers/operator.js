import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import * as operatorApi from '../requests/operator';

let form;
let formData;
let payload;
let operator;
let operators;
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
        case 'CREATE_OPERATOR':
            form = document.getElementById('create-company-operator-content');
            formData = getFormData( form );

            console.log('CREATE_OPERATOR dispatched');
            operatorApi.create(formData)

            return state       
        case 'GET_OPERATORS':
            operators = action.payload;

            return update(state, { 
                items: {$set: operators},
                pageCount: {$set: operators.last_page},
                perPage: {$set: operators.per_page}
            });



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

        case 'EDIT_OPERATOR':
            operator = action.payload;
        
            if(operator == false) {
                return update(state, { 
                    edit: {$set: false},
                    item: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                item: {$set: operator}
            });
        // case 'GET_COMPANIES_ALL':
        //     companies = action.payload;

        //     return update(state, { 
        //         companiesData: {$set: companies},
        //     });

        default :
            return state
    }    

}