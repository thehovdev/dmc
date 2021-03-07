import axios from 'axios';
import Swal from 'sweetalert2'
import {translate} from '../includes/helpers';
import {hideLoader} from '../includes/helpers';

export function get(action, page = 1) {
    let request_url = '/api/reserve?page=' + page;

    return axios.get(request_url).then(function (response) {
        // console.log(response);
        if(response.data.status == 1) {
            hideLoader();
            action.get(response.data.reserves);
        }
    });
}

export function getDeclined(action, page = 1) {
    let request_url = '/api/reserve/declined?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            hideLoader();

            action.get(response.data.reserves);
        }
    });
}

export function getResponded(action, page = 1) {
    let request_url = '/api/reserve/responded?page=' + page;

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            hideLoader();
            
            action.get(response.data.reserves);
        }
    });
}

export function getUserReserves(action, page = 1) {
    let request_url = '/api/reserve/user?page=' + page;

    return axios.get(request_url).then(function (response) {
        // console.log(response);
        if(response.data.status == 1) {
            hideLoader()
            action.get(response.data.reserves);
        }
    });
}

export function getAll(action) {
    let request_url = '/api/reserve';

    return axios.get(request_url).then(function (response) {
        if(response.data.status == 1) {
            console.log(response.data);
            action.getAll(response.data.companies);
        }
    });
}

export function find(action, id) {
    let request_url = '/api/reserve/' + id;
   
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

export function findByUser(action, id, page) {
    let request_url = `/api/reserve/user/${id}/?page=${page}`;
    axios.get(request_url).then(function (response) {
        if(response.data.id) {
            action.edit(response.data);
        } 
    });
}

export function findResponded(action, id) {
    let request_url = '/api/reserve/responded/' + id;
   
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

export function decline(action, id) {
    let request_url = '/api/reserve/decline/' + id;
   
    axios.get(request_url, {
        params : {
            id : id
        }
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: translate('declineMessage'),
                showConfirmButton: false,
                timer: 1500
            })

            get(action);
            
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

export function respond(formData, id) {
    let request_url = '/api/reserve/respond/' + id; // post 
    let redirect_url = '/cabinet/reserve'; // get

    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    
    axios
        .post(request_url, params)
        .then(function (response) {
            if(response.data.status == 1) {
                Swal.fire({
                    title: translate('successMessage'),
                    text: translate('sendProposalMessage'),
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

export function update(formData, id) {
    let request_url = '/api/reserve/updaterespond/' + id; // post 
    let redirect_url = '/cabinet/reserve'; // get

    let params = new FormData();
    params.append('formData', JSON.stringify(formData));

    axios
        .post(request_url, params)
        .then(function (response) {
            if(response.data.status == 1) {
                Swal.fire({
                    title: translate('successMessage'),
                    text: translate('sendProposalMessage'),
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

export function restore(action, id) {
    let request_url = '/api/reserve/restore/' + id;
   
    axios.get(request_url, {
        params : {
            id : id
        }
    }).then(function (response) {

        if(response.data.status == 1) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: translate('restoredMessage'),
                showConfirmButton: false,
                timer: 1500
            })
            
            getDeclined(action)
            
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







