import axios from 'axios';
import Swal from 'sweetalert2'

export function sendDeleteCompany(id) {
    let request_url = '/cabinet/company/' + id;

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

            elem.parentNode.removeChild(elem);

            return true;
            
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


