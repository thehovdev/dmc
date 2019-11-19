import Swal from 'sweetalert2'

export function create(formData) {
    let redirect = '/admin/operator';
    let request = '/api/operator';
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
        .post(request, params, headers)
        .then(function (response) {
            console.log(response);
            if(response.data.status == 1) {
                Swal.fire({
                    title: 'Success !',
                    text: 'We receive you information',
                    type: 'success',
                }).then(function() {
                    window.location = redirect;
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

export function update(formData, operator) {
    let request_url = '/api/operator/' + operator; // post 
    let redirect_url = '/admin/operator'; // get

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
    let request_url = '/api/operator?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            action.get(response.data.operators);
        }
    });
}

export function find(action, id) {
    let request_url = '/api/operator/' + id;

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
    let request_url = '/api/operator/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'DELETE'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Operator successfully deactivated',
                showConfirmButton: false,
                timer: 1500
            })

            // get updated operators list
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
    let request_url = '/api/operator/restore/' + id;

    axios.post(request_url, {
        id : id,
        _method: 'GET'
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Operator successfully activated',
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

