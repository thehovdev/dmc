import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendReserve} from '../requests/reserve';
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
        case 'OPEN_FORM':

            let status = state.form.show
            if(status == false) status = true; else status = false

            return update(state, { 
                form : {
                    show: {$set: status},
                }
            });

        case 'SEND_FORM':
            let form = document.getElementById('reserve-form');
            let formData = getFormData( form );

            sendReserve(formData);

            if(status == false) status = true; else status = false

            return update(state, { 
                form : {
                    show: {$set: status},
                }
            });

        default :
            return state
    }    

}