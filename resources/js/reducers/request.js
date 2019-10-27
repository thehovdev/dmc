import update from 'react-addons-update';

let request;
let requests;
let initialState = {
    edit: false,
    item: null,
    items: null,
    pageCount: null,
    perPage: null
}

export default function (state = initialState, action) {

    console.log(action.type);

    switch (action.type) {
        case 'EDIT_REQUEST':

            request = action.payload;
        
            if(request == false) {
                return update(state, { 
                    edit: {$set: false},
                    item: {$set: null}
                });
            }

            return update(state, { 
                edit: {$set: true},
                item: {$set: request}
            });

        case 'GET_REQUESTS':
            requests = action.payload;

            return update(state, { 
                items: {$set: requests},
                pageCount: {$set: requests.last_page},
                perPage: {$set: requests.per_page}
            });


        case 'GET_REQUESTS_ALL':
            requests = action.payload;

            return update(state, { 
                items: {$set: requests},
            });

        default :
            return state
    }    

}