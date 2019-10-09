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
        return companyApi.getCompaniesAll(action);
    }

    componentDidMount() {
        return this.getCompanies();
    }


    render() {
        const companies = this.props.company.companiesData;

        const companiesList = () => {
            if(companies == null) return null;

            return companies.map((company, index) =>
                <option key={ index } defaultValue={ company.id }>{ company.name }</option>
            );
        }

        const createContactPerson = () => {
            return this.props.contactPersonAction.createContactPerson();
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
                        <label htmlFor="phone">Phone</label>
                        <input defaultValue="994513739930" type="text" className="form-control" id="phone" placeholder="Enter person phone"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input defaultValue="hov-dev@protonmail.ch" type="text" className="form-control" id="email" placeholder="Enter person email"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => createContactPerson()}>
                    <i class="fas fa-save"></i> Create contact person
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
