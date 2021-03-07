import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import * as companyAction from '../../actions/company';
import * as companyApi from '../../requests/company';

import * as operatorApi from '../../requests/operator';
import * as operatorAction from '../../actions/operator';

class OperatorIndex extends Component {

    constructor(props) {
        super(props);
    }

    getOperators (page = 1) {
        let action = this.props.operatorAction;
        return operatorApi.get(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getOperators();
    }

    render() {
        const edit = this.props.operator.edit;
        const operator = this.props.operator.item;
        const operators = this.props.operator.items;
        const operatorAction = this.props.operatorAction;

        const companies = this.props.company.items;
        const companyAction = this.props.companyAction;

        const companiesList = () => {
            if(companies == null) return null;

            return companies.map((company, index) => {
                if(company.id == operator.company_id) {
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


        const activatePassword = () => {
            let elem = document.getElementById('password');
            let button = document.getElementById('updatePwd');

            if(elem.disabled == true) {
                elem.disabled = false
            } else {
                elem.disabled = true
            }

            button.classList.toggle("btn-success");
        }

        // button actions 
        const updateOperator = (id) => {
            return operatorAction.update(id);
        }

        const editOperator = (id) => {
            if(id == false) {
                return operatorAction.edit(false);
            } else {

                companyApi.getAll(companyAction)

                operatorApi.find(operatorAction, id);
            }
        }

        const restoreOperator = (id) => {
            return operatorApi.restore(operatorAction, id);
        }

        const deleteOperator = (id) => {
            return operatorApi.remove(operatorAction, id);
        }

        const deleteOrRestoreButton = (item) => {
            if(item.status == 1) {
                return (
                    <button onClick={() => deleteOperator(item.id)} type="button" className="btn btn-danger mx-1">
                        <i className="fas fa-times-circle"></i> {translate('deactivate')}
                    </button>
                );
            } else {
                return (
                    <button onClick={() => restoreOperator(item.id)} type="button" className="btn btn-success mx-1">
                        <i className="fas fa-check-circle"></i> {translate('activate')}
                    </button>
                );
            }
        }

        const operatorBlock = () => {
            console.log(edit);

            if(edit == false) {
                return operatorIndexBlock();
            } else {
                return operatorEditBlock();
            }
        }

        const operatorEditBlock = () => {

            return (
                <div className="form-content" id="edit-operator-content">
                    <div className="opertor-info">
                        <h3>{translate('operatorInformation')}</h3>
    
                        <div className="form-group">
                            <label htmlFor="company_id">{translate('chooseCompany')}</label>
                            <select className="form-control" id="company_id" defaultValue={operator.company_id}>
                                { companiesList() }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">{translate('name')}</label>
                            <input defaultValue={operator.name} type="text" className="form-control" id="name" placeholder="Enter name"></input>
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="phone">{translate('phone')}</label>
                            <input defaultValue={operator.phone} type="text" className="form-control" id="phone" placeholder="Enter company address"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{translate('email')}</label>
                            <input defaultValue={operator.email} type="text" className="form-control" id="email" placeholder="Enter company email"></input>
                        </div>

                        <div className="form-group">
                            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="input-group w-100">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text py-0" id="btnGroupAddon">
                                        <button className="btn btn-primary btn-sm" id="updatePwd" onClick={() => activatePassword()}>
                                            {translate('updatepassword')}
                                        </button>
                                        </div>
                                    </div>
                                    <input disabled type="password" id="password" className="form-control" placeholder="enter password" aria-label="enter password" aria-describedby="btnGroupAddon"></input>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <button className="btn btn-primary mx-1" onClick={() => editOperator(false)}>
                        <i className="fas fa-arrow-left"></i> {translate('back')}
                    </button>
                    <button className="btn btn-primary mx-1" onClick={() => updateOperator(operator.id)}>
                        <i className="fas fa-save"></i> {translate('update')}
                    </button>
                </div>
            );
        }

        const operatorListBlock = () => {


            if(operators == null) return null;

            // console.log(operators.data.operators);

            return operators.data.map((item, index) =>
                <tr id={'operator-' + item.id} key={index} className={item.status == 0 ? 'table-danger' : ''}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.company.name}</td>
                    <td>
                        <button onClick={() => editOperator(item.id)} type="button" className={item.status == 0 ? 'd-none' : 'btn btn-primary mx-1'}>
                            <i className="fas fa-edit"></i> Edit
                        </button>

                        {deleteOrRestoreButton(item)}
                    </td>
                </tr>
            );
        }

        const operatorsPagination = () => {

            if(operators != null) {
                let pageCount = operators.last_page;
                let currentPage = operators.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {this.getOperators(page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }
        }

        const operatorIndexBlock = () => {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>{translate('id')}</th>
                                <th>{translate('name')}</th>
                                <th>{translate('phone')}</th>
                                <th>{translate('email')}</th>
                                <th>{translate('company')}</th>
                                <th>{translate('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operatorListBlock()}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {operatorsPagination()}
                    </ul>
                </div>
            );
        }

        return operatorBlock();
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
      operator: state.operator
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OperatorIndex);
