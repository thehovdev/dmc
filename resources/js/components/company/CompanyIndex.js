import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';

import { sendDeleteCompany } from '../../requests/deleteCompany';


import * as companyAction from '../../actions/company';


class CompanyIndex extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const companiesList = companies.map((item, index) =>
            <tr id={'company-' + item.id} key={index}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>
                    <a href={'/cabinet/company/' + item.id + '/edit'} className="btn btn-primary mx-1">Edit</a>
                    <button onClick={() => sendDeleteCompany(item.id)} type="button" className="btn btn-danger mx-1">Delete</button>
                </td>
            </tr>
        );

        return (


            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companiesList}
                </tbody>
            </table>


        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        companyAction: bindActionCreators(companyAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      company: state.company,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyIndex);
