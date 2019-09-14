import axios from 'axios';
import Swal from 'sweetalert2'

export function sendReserve(formData) {

    axios.get('/reserve/store', {
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

            return 'success';
            
        } else {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'error'
            )
        }

    }).catch(function (error) {
        console.log(error);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'error'
        )
    })

}


