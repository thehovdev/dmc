import Swal from 'sweetalert2'
import {translate} from '../includes/helpers';
import {hideLoader} from '../includes/helpers';

export function get(action, page = 1) {
    let request_url = '/api/user?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            hideLoader();
            action.get(response.data.users);
        }
    });
}

export function find(action, id) {
    let request_url = '/api/user/' + id;

    axios.get(request_url, {
        params : {
            id : id
        }
    }).then(function (response) {

        if(response.data.id) {
            action.edit(response.data);
        } 
    });
}

export function checkAuth(action) {
    let request_url = '/api/user/checkauth';
    axios.get(request_url)
    .then(function (response) {
        action.checkAuth(response.data.status);
    });

}

export function remove(action, id) {
    let request_url = '/api/user/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'DELETE'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: translate('deactivateMessage'),
                showConfirmButton: false,
                timer: 1500
            })

            // get updated users list
            get(action)
            
        } else {
            Swal.fire(
                'Error!',
                response.data.message,
                'error'
            )
            return false;
        }

    });

}

export function restore(action, id) {
    let request_url = '/api/user/restore/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'GET'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: translate('activateMessage'),
                showConfirmButton: false,
                timer: 1500
            })

            // get updated users list
            get(action)
            
        } else {
            Swal.fire(
                'Error!',
                response.data.message,
                'error'
            )
            return false;
        }

    });

}

