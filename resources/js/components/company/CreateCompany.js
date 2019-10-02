import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';

import * as companyAction from '../../actions/company';


class CreateCompany extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const createCompany = () => {
            return this.props.companyAction.createCompany();
        }

        return (
            <div className="form-content" id="create-company-content">
                <div className="company-info">
                    <h3>Company information</h3>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input defaultValue="Profam" type="text" className="form-control" id="name" placeholder="Enter company name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input defaultValue="support@profam.az" type="text" className="form-control" id="email" placeholder="Enter company email"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input defaultValue="Baku, Azerbaijan" type="text" className="form-control" id="address" placeholder="Enter company address"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">Logo</label>
                        <input type="file" className="form-control-file" id="logo"></input>
                    </div>
                </div>

                <hr></hr>

                <div className="contact-person-info">
                    <h3>Contact person information</h3>

                    <div className="form-group">
                        <label htmlFor="personName">Name</label>
                        <input defaultValue="Afgan" type="text" className="form-control" id="personName" placeholder="Enter person name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personPhone">Phone</label>
                        <input defaultValue="Khalilov" type="text" className="form-control" id="personPhone" placeholder="Enter person phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personEmail">Email</label>
                        <input defaultValue="hov-dev@protonmail.ch" type="text" className="form-control" id="personEmail" placeholder="Enter person email"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={createCompany}>Create company</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompany);
