import axios from 'axios';
import Swal from 'sweetalert2'

export function create(formData) {
    let request_url = '/api/contactPerson'; // post 
    let redirect_url = '/admin/contactperson'; // get

    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    // params.append('logo', document.getElementById('logo').files[0]);
    // params.append('_method', 'put'); // for laravel resource controller, define method put
    
    axios
        .post(request_url, params, headers)
        .then(function (response) {
            console.log(response);
            if(response.data.status == 1) {
                Swal.fire({
                    title: 'Success !',
                    text: 'We receive you information',
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
    let request_url = '/api/contactPerson/' + company; // post 
    let redirect_url = '/admin/contactperson'; // get

    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    // params.append('logo', document.getElementById('logo').files[0]);
    params.append('_method', 'put');
    
    axios
        .post(request_url, params, headers)
        .then(function (response) {
            console.log(response);
            if(response.data.status == 1) {
                Swal.fire({
                    title: 'Success !',
                    text: 'We receive you information',
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

export function get(action, page = 1) {
    let request_url = '/api/contactPerson?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            console.log(response.data);
            action.get(response.data.contactPersons);
        }
    });
}

export function find(action, id) {
    let request_url = '/api/contactPerson/' + id;

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

export function remove(action, id) {
    let request_url = '/api/contactPerson/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'DELETE'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Contact person successfully deactivated',
                showConfirmButton: false,
                timer: 1500
            })

            get(action)
            
        } else {
            Swal.fire(
                'Error!',
                'Please fill required fields',
                'error'
            )
            return false;
        }

    });

}

export function restore(action, id) {
    let request_url = '/api/contactPerson/restore/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'GET'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Contact person successfully activated',
                showConfirmButton: false,
                timer: 1500
            })

            // get updated operators list
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
