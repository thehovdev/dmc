import axios from 'axios';
import Swal from 'sweetalert2'
import {translate} from '../includes/helpers';
import {hideLoader} from '../includes/helpers';

export function create(formData) {
    let request_url = '/api/company'; // post 
    let redirect_url = '/admin/company'; // get

    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    params.append('logo', document.getElementById('logo').files[0]);
    // params.append('_method', 'put'); // for laravel resource controller, define method put

    
    axios
        .post(request_url, params, headers)
        .then(function (response) {
            console.log(response);
            if(response.data.status == 1) {
                Swal.fire({
                    title: translate('successMessage'),
                    text: translate('createMessage'),
                    type: 'success',
                }).then(function() {
                    window.location = redirect_url;
                });

            } else {
                Swal.fire({
                    title: 'Error get information!',
                    text: 'Internal Server Error / ' + response.data.message,
                    type: 'error',
                })

                return false;
            }
        })
        .catch(function (err) {
            Swal.fire({
                title: 'Error get information!',
                text: 'Internal Server Error',
                type: 'error',
            })

            return false;
        });
}

export function update(formData, company) {
    let request_url = '/api/company/' + company; // post 
    let redirect_url = '/admin/company'; // get

    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    params.append('logo', document.getElementById('logo').files[0]);
    params.append('_method', 'put');

    
    axios
        .post(request_url, params, headers)
        .then(function (response) {
            console.log(response);
            if(response.data.status == 1) {
                Swal.fire({
                    title: translate('successMessage'),
                    text: translate('updateMessage'),
                    type: 'success',
                })
                .then(function() {
                    window.location = redirect_url;
                });

                return true;

            } else {
                Swal.fire({
                    title: 'Error get information!',
                    text: 'Internal Server Error / ' + response.data.message,
                    type: 'error',
                })

                return false;
            }
        })
        .catch(function (err) {
            Swal.fire({
                title: 'Error get information!',
                text: 'Internal Server Error',
                type: 'error',
            })

            return false;
        });
}

export function remove(action, id) {
    let request_url = '/api/company/' + id;

    const elem = document.getElementById('company-' + id);

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

            get(action)
            
        } else {
            Swal.fire(
                'Error!',
                'Internal server error',
                'error'
            )
            return false;
        }

    });

}

export function restore(action, id) {
    let request_url = '/api/company/restore/' + id;

    const elem = document.getElementById('company-' + id);

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

            get(action)
            
        } else {
            Swal.fire(
                'Error!',
                'Internal server error',
                'error'
            )
            return false;
        }

    });
}


export function get(action, page = 1) {
    let request_url = '/api/company?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            hideLoader();
            action.get(response.data.companies);
        }
    });
}

export function getAll(action) {
    let request_url = '/api/company';

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            console.log(response.data);
            action.getAll(response.data.companies);
        }
    });
}


export function find(action, id) {
    let request_url = '/api/company/' + id;

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







