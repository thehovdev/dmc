import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendCreateCompany} from '../requests/createCompany';
import axios from 'axios';

let initialState = {
    form : {
        id : 0,
        name : 'form show status',
        show : false,
    }, 
}


export default function (state = initialState, action) {

    switch (action.type) {
        case 'CREATE_COMPANY':

            let form = document.getElementById('create-company-content');
            let formData = getFormData( form );

            console.log(formData);

            console.log('CREATE_COMPANY dispatched');

            sendCreateCompany(formData);
            // let status = state.form.show
            // if(status == false) status = true; else status = false

            // return update(state, { 
            //     form : {
            //         show: {$set: status},
            //     }
            // });

            return state
        case 'EDIT_COMPANY':
            // let form = document.getElementById('reserve-form');
            // let formData = getFormData( form );

            // sendReserve(formData);

            // if(status == false) status = true; else status = false

            // return update(state, { 
            //     form : {
            //         show: {$set: status},
            //     }
            // });
            return state

        default :
            return state
    }    

}