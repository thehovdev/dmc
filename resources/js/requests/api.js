import Swal from 'sweetalert2'

export function create(
    formData, 
    request, 
    redirect,
    logo = false
) {
    // let request_url = '/api/company'; // post 
    // let redirect_url = '/admin/company'; // get
    let headers = { 
        headers: { 
            'Content-Type': 'multipart/form-data',
            'Accept': 'Token',
            'Access-Control-Allow-Origin': '*',
        } 
    }
    let params = new FormData();
    params.append('formData', JSON.stringify(formData));
    if(logo) params.append('logo', document.getElementById('logo').files[0]);
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