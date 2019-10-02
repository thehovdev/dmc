import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';

import * as companyAction from '../../actions/company';


class EditCompany extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const updateCompany = (id) => {
            return this.props.companyAction.updateCompany(id);
        }

        return (
            <div className="form-content" id="edit-company-content">
                <div className="company-info">
                    <h3>Company information</h3>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input defaultValue={company.name} type="text" className="form-control" id="name" placeholder="Enter company name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input defaultValue={company.email} type="text" className="form-control" id="email" placeholder="Enter company email"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input defaultValue={company.address} type="text" className="form-control" id="address" placeholder="Enter company address"></input>
                    </div>

                    <div className="form-group">
                        <img src={'/storage/company/logo/' + company.logo} width="100px"></img>
                        <label htmlFor="logo">Logo</label>
                        <input type="file" className="form-control-file" id="logo"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => updateCompany(company.id)}>Update</button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
