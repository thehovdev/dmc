import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as companyAction from '../../actions/company';
import * as requestApi from '../../requests/request';
import * as requestAction from '../../actions/request';
import * as blocks from '../../includes/blocks';

class RespondedRequest extends Component {

    constructor(props) {
        super(props);
    }

    getRespondedRequests (page = 1) {

        console.log(page);

        let action = this.props.requestAction;

        return requestApi.getResponded(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getRespondedRequests();
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
                    {blocks.editProposalList(request)}
                </div>

            );
        }

        // main actions
        const editRequest = (id) => {
            if(id == false) {
                return requestAction.edit(false);
            } else {
                return requestApi.findResponded(requestAction, id);
            }
        }

        const updateRequest = (id) => {
            return requestAction.update(id);
        }
        const declineRequest = (id) => {
            return requestApi.decline(requestAction, id);
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
            console.log('requestEditBlock');
            console.log(request);

            return (
                <div id="edit-request-content" className="animated bounceInRight">
                    <div className="cabinet-info">
                        {infoBlocks()}
                    </div>
    
                    <button className="btn btn-primary mx-1 my-2" onClick={() => editRequest(false)}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>

                    <button className="btn btn-success btn-lg mx-1 my-2" onClick={() => updateRequest(request.id)}>
                        <i className="fas fa-save"></i> Update proposal
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
                                <th>id</th>
                                <th>Arrival date / time</th>
                                <th>Departure date / time</th>
                                <th>Group type</th>
                                <th>Age range</th>
                                <th>Nationality</th>
                                <th>Country</th>
                                <th>Actions</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(RespondedRequest);
