import axios from 'axios';
import Swal from 'sweetalert2'


export function getStepParameters(action) {
    let request_url = '/api/step/parameters/get';
    axios.get(request_url)
    .then(function (response) {
        action.getStepParameters(response.data);
    });
}

export function sendReserve(formData) {
    let request_url = '/api/reserve'; // post 
    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    
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

                return true;

            } else {
                Swal.fire(
                    'Error!',
                    'Please fill required fields',
                    'error'
                )

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


