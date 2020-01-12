import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';
import flatpickr from "flatpickr";
import {translate} from '../../includes/helpers';
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
                    <h3>{translate('companyInformation')}</h3>

                    <div className="form-group">
                        <label htmlFor="name">{translate('name')}*</label>
                        <input defaultValue="ExampleCompany" type="text" className="form-control" id="name" placeholder={translate('enterName')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{translate('email')}*</label>
                        <input defaultValue="support@examplecompany.com" type="text" className="form-control" id="email" placeholder={translate('enterEmail')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">{translate('phone')}*</label>
                        <input type="number" className="form-control" id="phone" placeholder={translate('enterPhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">{translate('address')}*</label>
                        <input defaultValue="Baku, Azerbaijan" type="text" className="form-control" id="address" placeholder={translate('enterAddress')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">{translate('logo')}*</label>
                        <input type="file" className="form-control-file" id="logo"></input>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="address">{translate('activeFrom')}</label>
                                <input type="text" className="form-control" id="active_from"></input>
                            </div>                   
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="address">{translate('activeTo')}</label>
                                <input type="text" className="form-control" id="active_to"></input>
                            </div>
                        </div>
                    </div>

                </div>

                <hr></hr>

                <div className="contact-person-info">
                    <h3>{translate('contactPersonInformation')}</h3>

                    <div className="form-group">
                        <label htmlFor="personName">{translate('name')}*</label>
                        <input defaultValue="John" type="text" className="form-control" id="personName" placeholder={translate('enterName')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personSurname">{translate('surname')}*</label>
                        <input defaultValue="Doe" type="text" className="form-control" id="personSurname" placeholder={translate('enterSurname')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personSuffix">{translate('suffix')}*</label>
                        <input defaultValue="Mr" type="text" className="form-control" id="personSuffix" placeholder={translate('enterSuffix')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personPosition">{translate('position')}*</label>
                        <input defaultValue="Director" type="text" className="form-control" id="personPosition" placeholder={translate('enterPosition')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personPhone">{translate('phone')}*</label>
                        <input type="number" className="form-control" id="personPhone" placeholder={translate('enterPhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personOfficePhone">{translate('officePhone')}*</label>
                        <input type="number" className="form-control" id="personOfficePhone" placeholder={translate('enterOfficePhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personEmail">{translate('email')}*</label>
                        <input defaultValue="johndoe@example.com" type="text" className="form-control" id="personEmail" placeholder={translate('enterEmail')}></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={createCompany}>
                    <i className="fas fa-save"></i> {translate('createCompany')}
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
