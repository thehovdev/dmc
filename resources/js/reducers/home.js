import update from 'react-addons-update';
import {getFormData} from '../includes/helpers';
import {sendReserve} from '../requests/reserve';

let initialState = {
    form : {
        id : 0,
        name : 'form show status',
        show: false
    }, 
}


export default function (state = initialState, action) {

    switch (action.type) {
        case 'OPEN_FORM':
            return update(state, { 
                form : {
                    show: {$set: true},
                }
            });
        case 'CLOSE_FORM':

            return update(state, { 
                form : {
                    show: {$set: false},
                }
            });

        case 'SEND_FORM':
            let form = document.getElementById('reserve-form');
            let formData = getFormData( form );

            sendReserve(formData);

            return update(state, { 
                form : {
                    show: {$set: false},
                }
            });

        default :
            return state
    }    

}