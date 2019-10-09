import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { create } from 'domain';

import * as companyApi from '../../requests/company';
import * as companyAction from '../../actions/company';

import * as api from '../../requests/api';
import * as operatorAction from '../../actions/operator';

class CompanyOperatorCreate extends Component {

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
                <option key={ index } value={ company.id }>{ company.name }</option>
            );
        }

        const createOperator = () => {
            return this.props.operatorAction.createOperator();
        }

        return (
            <div className="form-content" id="create-company-operator-content">
                <div className="company-info">
                    <div className="form-group">
                        <label htmlFor="company_id">Choose company</label>
                        <select className="form-control" id="company_id">
                            { companiesList() }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input defaultValue="Afgan" type="text" className="form-control" id="name" placeholder="Enter operator name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input defaultValue="halilov.lib@gmail.com" type="text" className="form-control" id="email" placeholder="Enter operator email"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input defaultValue="Baku, Azerbaijan" type="text" className="form-control" id="phone" placeholder="Enter operator phone"></input>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => createOperator()}>
                    <i className="fas fa-save"></i> Create operator
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        companyAction: bindActionCreators(companyAction, dispatch),
        operatorAction: bindActionCreators(operatorAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      company: state.company,
      operator: state.operator,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyOperatorCreate);
