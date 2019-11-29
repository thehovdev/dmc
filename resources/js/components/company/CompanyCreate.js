import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';
import flatpickr from "flatpickr";

import * as companyApi from '../../requests/company';
import * as companyAction from '../../actions/company';


class CompanyCreate extends Component {

    constructor(props) {
        super(props);
    }

    // do function after component ends render
    componentDidMount(){
        flatpickr("#active_from", {});
        flatpickr("#active_to", {});
    }

    render() {

        const createCompany = () => {
            return this.props.companyAction.create();
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
                        <label htmlFor="phone">Phone</label>
                        <input defaultValue="994513739930" type="text" className="form-control" id="phone" placeholder="Enter company phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input defaultValue="Baku, Azerbaijan" type="text" className="form-control" id="address" placeholder="Enter company address"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">Logo</label>
                        <input type="file" className="form-control-file" id="logo"></input>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="address">Active from</label>
                                <input type="text" className="form-control" id="active_from"></input>
                            </div>                   
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="address">Active to</label>
                                <input type="text" className="form-control" id="active_to"></input>
                            </div>
                        </div>
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
                        <label htmlFor="personSurname">Surname</label>
                        <input defaultValue="Khalilov" type="text" className="form-control" id="personSurname" placeholder="Enter person surname"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personSuffix">Suffix</label>
                        <input defaultValue="Mr" type="text" className="form-control" id="personSuffix" placeholder="Enter person suffix"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personPosition">Position</label>
                        <input defaultValue="Director" type="text" className="form-control" id="personPosition" placeholder="Enter person position"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personPhone">Phone</label>
                        <input defaultValue="994513739930" type="text" className="form-control" id="personPhone" placeholder="Enter person phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personOfficePhone">Office phone</label>
                        <input defaultValue="0125970046" type="text" className="form-control" id="personOfficePhone" placeholder="Enter person office phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personEmail">Email</label>
                        <input defaultValue="hov-dev@protonmail.ch" type="text" className="form-control" id="personEmail" placeholder="Enter person email"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={createCompany}>
                    <i className="fas fa-save"></i> Create Company
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreate);
