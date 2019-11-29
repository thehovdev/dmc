import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import flatpickr from "flatpickr";
import * as companyApi from '../../requests/company';
import * as companyAction from '../../actions/company';
import * as helper from '../../includes/helpers';

import axios from 'axios';

class CompanyIndex extends Component {

    constructor(props) {
        super(props);
    }

    getCompanies (page = 1) {

        console.log(page);

        let action = this.props.companyAction;

        return companyApi.get(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getCompanies();
    }

    componentDidUpdate() {
        flatpickr("#active_from", {});
        flatpickr("#active_to", {});
    }

    render() {
        const edit = this.props.company.edit;
        const company = this.props.company.item;
        const companies = this.props.company.items;
        const companyAction = this.props.companyAction;

        // button actions 
        const updateCompany = (id) => {
            return companyAction.update(id);
        }

        const editCompany = (id) => {
            if(id == false) {
                return companyAction.edit(false);
            } else {
                return companyApi.find(companyAction, id);
            }
        }

        const restoreCompany = (id) => {
            return companyApi.restore(companyAction, id);
        }

        const deleteCompany = (id) => {
            return companyApi.remove(companyAction, id);
        }

        const actionButtons = (item) => {
            if(item.status == 1) {
                return (
                    <div>
                        <button onClick={() => editCompany(item.id)} type="button" className="btn btn-primary mx-1">
                            <i className="fas fa-edit"></i> Edit
                        </button>
                        <button onClick={() => deleteCompany(item.id)} type="button" className="btn btn-danger mx-1">
                            <i className="fas fa-times-circle"></i> Deactivate
                        </button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button onClick={() => restoreCompany(item.id)} type="button" className="btn btn-success mx-1">
                            <i className="fas fa-check-circle"></i> Activate
                        </button>
                    </div>
                );
            }
        }

        // main actions 

        const companyBlock = () => {
            if(edit == false) {
                return companyIndexBlock();
            } else {
                return companyEditBlock();
            }
        }

        const companyEditBlock = () => {
            console.log('companyEditBlock');
            console.log(company);

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
                            <label htmlFor="phone">Phone</label>
                            <input defaultValue={company.phone} type="text" className="form-control" id="phone" placeholder="Enter company phone"></input>
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

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="address">Active from</label>
                                    <input defaultValue={company.active_from} type="text" className="form-control" id="active_from"></input>
                                </div>                   
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="address">Active until</label>
                                    <input defaultValue={company.active_to} type="text" className="form-control" id="active_to"></input>
                                </div>
                            </div>
                        </div>



                    </div>
    
                    <button className="btn btn-primary mx-1" onClick={() => editCompany(false)}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <button className="btn btn-primary mx-1" onClick={() => updateCompany(company.id)}>
                        <i className="fas fa-save"></i> Update
                    </button>
                </div>
            );
        }

        const companyListBlock = () => {

            console.log(companies);
            if(companies == null) return null;

            return companies.data.map((item, index) =>
                <tr id={'company-' + item.id} key={index} className={item.status == 0 ? 'table-danger' : ''}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>
                        {/* <div>From: {helper.formatDate(item.active_from)}</div>
                        <hr className="small-border"></hr>
                        <div>Until: {helper.formatDate(item.active_to)}</div>
                        <hr className="small-border"></hr> */}
                        <div>{helper.daysCount(item.active_from, item.active_to)} days left</div>
                    </td>
                    <td>
                        {actionButtons(item)}
                    </td>
                </tr>
            );
        }

        const companiesPagination = () => {

            if(companies != null) {
                let pageCount = companies.last_page;
                let currentPage = companies.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {this.getCompanies(page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }

        }


        const companyIndexBlock = () => {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Active period</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyListBlock()}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {companiesPagination()}
                    </ul>
                </div>
            );
        }

        return companyBlock();
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
