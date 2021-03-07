import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import { create } from 'domain';

import * as companyApi from '../../requests/company';
import * as companyAction from '../../actions/company';
import * as operatorAction from '../../actions/operator';

class OperatorCreate extends Component {

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

            console.log(companies);

            return companies.map((company, index) =>
                <option key={ index } value={ company.id }>{ company.name }</option>
            );
        }

        const createOperator = () => {
            return this.props.operatorAction.create();
        }

        return (
            <div className="form-content" id="create-company-operator-content">
                <div className="company-info">
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
                        <label htmlFor="phone">{translate('phone')}*</label>
                        <input type="number" className="form-control" id="phone" placeholder={translate('enterPhone')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{translate('email')}*</label>
                        <input defaultValue="johndoe@examplecompany.com" type="text" className="form-control" id="email" placeholder={translate('enterEmail')}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">{translate('password')}*</label>
                        <input type="password" className="form-control" id="password" placeholder={translate('enterPassword')}></input>
                    </div>


                </div>

                <button className="btn btn-primary" onClick={() => createOperator()}>
                    <i className="fas fa-save"></i> {translate('createOperator')}
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

export default connect(mapStateToProps, mapDispatchToProps)(OperatorCreate);
