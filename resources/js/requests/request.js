import axios from 'axios';
import Swal from 'sweetalert2'

export function get(action, page = 1) {
    let request_url = '/api/reserve?page=' + page;

    return axios.get(request_url).then(function (response) {
        // console.log(response);
        if(response.data.status == 1) {
            // console.log(response.data.reserves);
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







