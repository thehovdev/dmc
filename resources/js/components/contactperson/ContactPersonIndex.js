import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import * as companyAction from '../../actions/company';
import * as companyApi from '../../requests/company';

import * as contactPersonApi from '../../requests/contactperson';
import * as contactPersonAction from '../../actions/contactperson';

class ContactPersonIndex extends Component {

    constructor(props) {
        super(props);
    }


    getContactPersons (page = 1) {
        let action = this.props.contactPersonAction;

        return contactPersonApi.get(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getContactPersons();
    }

    render() {
        const edit = this.props.contactPerson.edit;
        const contactPerson = this.props.contactPerson.item;
        const contactPersons = this.props.contactPerson.items;
        const contactPersonAction = this.props.contactPersonAction;

        const companies = this.props.company.items;
        const companyAction = this.props.companyAction;


        const companiesList = () => {
            if(companies == null) return null;

            return companies.map((company, index) => {
                if(company.id == contactPerson.company_id) {
                    return <option key={ index } value={ company.id }>
                                { company.name }
                            </option>
                } else {
                    return <option key={ index } value={ company.id }>
                                { company.name }
                            </option>
                }
            });
        }

        // button actions 
        const updateContactPerson = (id) => {
            return contactPersonAction.update(id);
        }

        const editContactPerson = (id) => {
            if(id == false) {
                return contactPersonAction.edit(false);
            } else {

                companyApi.getAll(companyAction)

                contactPersonApi.find(contactPersonAction, id);
            }
        }

        const restoreContactPerson = (id) => {
            return contactPersonApi.restore(contactPersonAction, id);
        }

        const deleteContactPerson  = (id) => {
            return contactPersonApi.remove(contactPersonAction, id);
        }

        const actionButtons = (item) => {
            if(item.status == 1) {
                return (
                    <div>
                        <button onClick={() => editContactPerson(item.id)} type="button" className={item.status == 0 ? 'd-none' : 'btn btn-primary mx-1'}>
                            <i className="fas fa-edit"></i> Edit
                        </button>

                        <button onClick={() => deleteContactPerson(item.id)} type="button" className="btn btn-danger mx-1">
                            <i className="fas fa-times-circle"></i> Deactivate
                        </button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button onClick={() => restoreContactPerson(item.id)} type="button" className="btn btn-success mx-1">
                            <i className="fas fa-check-circle"></i> Activate
                        </button>
                    </div>
                );
            }
        }

        const contactPersonBlock = () => {
            console.log(edit);

            if(edit == false) {
                return contactPersonIndexBlock();
            } else {
                return contactPersonEditBlock();
            }
        }

        const contactPersonEditBlock = () => {

            return (
                <div className="form-content" id="edit-contact-person-content">
                    <div className="contact-person-info">
                        <h3>{translate('contactPersonInformation')}</h3>
    
                        <div className="form-group">
                            <label htmlFor="company_id">{translate('chooseCompany')}</label>
                            <select className="form-control" id="company_id" defaultValue={contactPerson.company_id}>
                                { companiesList() }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">{translate('name')}</label>
                            <input defaultValue={contactPerson.name} type="text" className="form-control" id="name" placeholder="Enter name"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="surname">{translate('surname')}</label>
                            <input defaultValue={contactPerson.surname} type="text" className="form-control" id="surname" placeholder="Enter surname"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="suffix">{translate('suffix')}</label>
                            <input defaultValue={contactPerson.suffix} type="text" className="form-control" id="suffix" placeholder="Enter suffix"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">{translate('position')}</label>
                            <input defaultValue={contactPerson.position} type="text" className="form-control" id="position" placeholder="Enter position"></input>
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="phone">{translate('phone')}</label>
                            <input defaultValue={contactPerson.phone} type="text" className="form-control" id="phone" placeholder="Enter company phone"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="office_phone">{translate('officePhone')}</label>
                            <input defaultValue={contactPerson.office_phone} type="text" className="form-control" id="office_phone" placeholder="Enter company office phone"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{translate('email')}</label>
                            <input defaultValue={contactPerson.email} type="text" className="form-control" id="email" placeholder="Enter company email"></input>
                        </div>

                    </div>
    
                    <button className="btn btn-primary mx-1" onClick={() => editContactPerson(false)}>
                        <i className="fas fa-arrow-left"></i> {translate('back')}
                    </button>
                    <button className="btn btn-primary mx-1" onClick={() => updateContactPerson(contactPerson.id)}>
                        <i className="fas fa-save"></i> {translate('update')}
                    </button>
                </div>
            );
        }

        const contactPersonListBlock = () => {

            // console.log(companies);
            if(contactPersons == null) return null;

            console.log(contactPersons);


            return contactPersons.data.map((item, index) =>


                <tr id={'contact-person-' + item.id} key={index} className={item.status == 0 ? 'table-danger' : ''}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.suffix}</td>
                    <td>{item.position}</td>
                    {/* <td>{item.phone}</td> */}
                    {/* <td>{item.office_phone}</td> */}
                    <td>{item.email}</td>
                    <td>{item.company.name}</td>
                    <td>
                        {actionButtons(item)}
                    </td>
                </tr>
            );
        }

        const contactPersonsPagination = () => {

            if(contactPersons != null) {
                let pageCount = contactPersons.last_page;
                let currentPage = contactPersons.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {this.getContactPersons(page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }
        }

        const contactPersonIndexBlock = () => {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>{translate('id')}</th>
                                <th>{translate('name')}</th>
                                <th>{translate('surname')}</th>
                                <th>{translate('suffix')}</th>
                                <th>{translate('position')}</th>
                                {/* <th>{translate('phone')}</th> */}
                                {/* <th>{translate('officePhone')}</th> */}
                                <th>{translate('email')}</th>
                                <th>{translate('company')}</th>
                                <th>{translate('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactPersonListBlock()}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {contactPersonsPagination()}
                    </ul>
                </div>
            );
        }

        return contactPersonBlock();
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPersonIndex);
