import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import * as companyAction from '../../actions/company';
import * as requestApi from '../../requests/request';
import * as requestAction from '../../actions/request';
import * as blocks from '../../includes/blocks';

class RequestIndex extends Component {

    constructor(props) {
        super(props);
    }

    getRequests (page = 1) {
        let action = this.props.requestAction;
        return requestApi.get(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getRequests();
    }

    render() {
        const edit = this.props.request.edit;
        const request = this.props.request.item;
        const requests = this.props.request.items;
        const requestAction = this.props.requestAction;

        // information bloocks in reserve detail page 
        const infoBlocks = () => {
            return (
                <div className="row">
                    {blocks.arrivalInfoList(request)}
                    {blocks.groupInfoList(request)}
                    {blocks.mainInfoList(request)}
                    {blocks.additionalInfoList(request)}
                    {blocks.sendProposalList(request)}
                </div>
            );
        }

        // main actions
        const editRequest = (id) => {
            if(id == false) {
                return requestAction.edit(false);
            } else {
                return requestApi.find(requestAction, id);
            }
        }
        const declineRequest = (id) => {
            return requestApi.decline(requestAction, id);
        }
        const respondRequest = (id) => {
            return requestAction.respond(id);
        }

        // index and edit state blocks
        const requestBlock = () => {

            console.log('edit : ' + edit);

            if(edit == false) {
                return requestIndexBlock();
            } else {
                return requestEditBlock();
            }
        }
        const requestEditBlock = () => {
            return (
                <div id="edit-request-content" className="animated bounceInRight">
                    <div className="cabinet-info">
                        {infoBlocks()}
                    </div>
    
                    <button className="btn btn-primary mx-1 my-2" onClick={() => editRequest(false)}>
                        <i className="fas fa-arrow-left"></i> {translate('back')}
                    </button>

                    <button className="btn btn-success btn-lg mx-1 my-2" onClick={() => respondRequest(request.id)}>
                        <i className="fas fa-arrow-alt-circle-up"></i> {translate('sendProposal')}
                    </button>
                </div>
            );
        }
        const requestsListBlock = () => {
            if(requests == null) return null;

            return requests.data.map((item, index) =>
                <tr id={'request-' + item.id} key={index}>
                    <td>{item.id}</td>
                    <td>{item.arrival_date} {item.arrival_time}</td>
                    <td>{item.departure_date} {item.departure_time}</td>
                    <td>{item.group_type.name}</td>
                    <td>{item.age_range.name}</td>
                    <td>{item.nationality.name}</td>
                    <td>{item.country.name}</td>
                    <td>
                        <button type="button" className="btn btn-success" onClick={() => editRequest(item.id)}>
                            <i className="fas fa-pen"></i>
                        </button>
                        <button type="button" className="btn btn-danger mx-1" onClick={() => declineRequest(item.id)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
            );
        }
        const requestsPagination = () => {

            if(requests != null) {
                let pageCount = requests.last_page;
                let currentPage = requests.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {this.getRequests(page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }

        }
        const requestIndexBlock = () => {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>{translate('id')}</th>
                                <th>{translate('arrivalDateTime')}</th>
                                <th>{translate('departureDateTime')}</th>
                                <th>{translate('groupType')}</th>
                                <th>{translate('ageRange')}</th>
                                <th>{translate('nationality')}</th>
                                <th>{translate('tripCountry')}</th>
                                <th>{translate('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestsListBlock()}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {requestsPagination()}
                    </ul>
                </div>
            );
        }

        return requestBlock();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        companyAction: bindActionCreators(companyAction, dispatch),
        requestAction: bindActionCreators(requestAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      company: state.company,
      request: state.request
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestIndex);
