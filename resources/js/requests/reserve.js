import axios from 'axios';
import Swal from 'sweetalert2'

export function sendReserve(formData) {
    let request_url = '/reserve/store';

    axios.get(request_url, {
        params: {
            formData : formData
        }
    }).then(function (response) {

        if(response.data.status == 1) {
            Swal.fire(
                'Success !',
                'We receive you information',
                'success'
            )

            return true;
            
        } else {
            Swal.fire(
                'Error!',
                'Please fill required fields',
                'error'
            )

            return false;
        }

    }).catch(function (error) {
        console.log(error);
        Swal.fire(
            'Error!',
            'Internal Server Error!',
            'error'
        )
        return false;
    })

}


