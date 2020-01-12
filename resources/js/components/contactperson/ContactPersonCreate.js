import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
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
                    <h3>{translate('contactPersonInformation')}</h3>

                    <div className="form-group">
                        <label htmlFor="company_id">{translate('chooseCompany')}*</label>
                        <select className="form-control" id="company_id">
                            { companiesList() }
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="name">{translate('name')}*</label>
                        <input defaultValue="John" type="text" className="form-control" id="name" placeholder={translate('enterName')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">{translate('surname')}*</label>
                        <input defaultValue="Doe" type="text" className="form-control" id="surname" placeholder={translate('enterSurname')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="suffix">{translate('suffix')}*</label>
                        <input defaultValue="Mr" type="text" className="form-control" id="suffix" placeholder={translate('enterSuffix')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">{translate('position')}*</label>
                        <input defaultValue="Director" type="text" className="form-control" id="position" placeholder={translate('enterPosition')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">{translate('phone')}*</label>
                        <input type="text" className="form-control" id="phone" placeholder={translate('enterPhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="office_phone">{translate('officePhone')}*</label>
                        <input type="text" className="form-control" id="office_phone" placeholder={translate('enterOfficePhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{translate('email')}*</label>
                        <input type="text" className="form-control" id="email" placeholder={translate('enterEmail')}></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => createContactPerson()}>
                    <i className="fas fa-save"></i> {translate('createContactPerson')}
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
