import axios from 'axios';
import Swal from 'sweetalert2'


export function createCompany(formData) {
    let request_url = '/api/company'; // post 
    let redirect_url = '/cabinet/company'; // get

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

export function updateCompany(formData, company) {
    let request_url = '/api/company/' + company; // post 
    let redirect_url = '/cabinet/company'; // get

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

export function deleteCompany(action, id) {
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
                title: 'Company successfully deleted',
                showConfirmButton: false,
                timer: 1500
            })

            getCompanies(action)
            
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

export function getCompanies(action, page = 1) {
    let request_url = '/api/company?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            console.log(response.data);
            action.getCompanies(response.data.companies);
        }
    });
}

export function getCompaniesAll(action) {
    let request_url = '/api/company';

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            console.log(response.data);
            action.getCompaniesAll(response.data.companies);
        }
    });
}


export function getCompany(action, id) {
    let request_url = '/api/company/' + id;

    axios.get(request_url, {
        params : {
            id : id
        }
    }).then(function (response) {
        if(response.data.id) {
            action.editCompany(response.data);
        } 
    });
}







