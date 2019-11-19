import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as companyApi from '../../requests/company';
import * as companyAction from '../../actions/company';
import * as contactPersonAction from '../../actions/contactperson';

class ContactPersonCreate extends Component {

    constructor(props) {
        super(props);
    }

    getCompanies () {
        let action = this.props.companyAction;
        return companyApi.getAll(action);
    }

    componentDidMount() {
        return this.getCompanies();
    }


    render() {
        const companies = this.props.company.items;

        const companiesList = () => {
            if(companies == null) return null;

            return companies.map((company, index) =>
                <option key={ index } value={ company.id }>{ company.name }</option>
            );
        }

        const createContactPerson = () => {
            return this.props.contactPersonAction.create();
        }


        return (
            <div className="form-content" id="create-contact-person-content">
                <div className="contact-person-info">
                    <h3>Contact person information</h3>

                    <div className="form-group">
                        <label htmlFor="company_id">Choose company</label>
                        <select className="form-control" id="company_id">
                            { companiesList() }
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input defaultValue="Afgan" type="text" className="form-control" id="name" placeholder="Enter person name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input defaultValue="Khalilov" type="text" className="form-control" id="surname" placeholder="Enter person surname"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="suffix">Suffix</label>
                        <input defaultValue="Mr" type="text" className="form-control" id="suffix" placeholder="Enter person suffix"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input defaultValue="Director" type="text" className="form-control" id="position" placeholder="Enter person position"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input defaultValue="994513739930" type="text" className="form-control" id="phone" placeholder="Enter person phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="office_phone">Office phone</label>
                        <input defaultValue="0125970046" type="text" className="form-control" id="office_phone" placeholder="Enter person office phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input defaultValue="hov-dev@protonmail.ch" type="text" className="form-control" id="email" placeholder="Enter person email"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => createContactPerson()}>
                    <i className="fas fa-save"></i> Create contact person
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        companyAction: bindActionCreators(companyAction, dispatch),
        contactPersonAction: bindActionCreators(contactPersonAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      company: state.company,
      contactPerson: state.contactPerson
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPersonCreate);
