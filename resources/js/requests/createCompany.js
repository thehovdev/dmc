import axios from 'axios';
import Swal from 'sweetalert2'

export function sendCreateCompany(formData) {

    const headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }

    const params = new FormData();
    params.append('formData', JSON.stringify(formData));
    params.append('logo', document.getElementById('logo').files[0]);

    axios
        .post('/cabinet/company/store', params, headers)
        .then(function (res) {
            console.log(res);
            if(response.data.status == 1) {
                Swal.fire(
                    'Success !',
                    'We receive you information',
                    'success'
                )
            }
        })
        .catch(function (err) {
            console.log(err);
            Swal.fire(
                'Error uploading file!',
                'ajax request / something went wrong!',
                'error'
            )
        });

}


