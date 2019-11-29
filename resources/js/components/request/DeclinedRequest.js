import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as companyAction from '../../actions/company';
import * as requestApi from '../../requests/request';
import * as requestAction from '../../actions/request';
import * as helper from '../../includes/helpers';

class DeclinedRequest extends Component {

    constructor(props) {
        super(props);
    }

    getDeclinedRequests (page = 1) {
        let action = this.props.requestAction;
        return requestApi.getDeclined(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getDeclinedRequests();
    }

    render() {
        const request = this.props.request.item;
        const requests = this.props.request.items;
        const requestAction = this.props.requestAction;

        // action buttons

        const restoreRequest = (id) => {
            return requestApi.restore(requestAction, id);
        }

        const actionButtons = (item) => {
            return (
                <div>
                    <button type="button" className="btn btn-success" onClick={() => restoreRequest(item.id)}>
                        <i className="fa fa-redo"></i>
                    </button>
                </div>
            );
        }

        // index and edit state blocks
        const requestBlock = () => {
            return requestIndexBlock();
        }
        const requestsListBlock = () => {
            console.log(requests);

            if(requests == null) return null;

            return requests.data.map((item, index) =>
                <tr id={'request-' + item.id} key={index} className="table-danger">
                    <td>{item.id}</td>
                    <td>{item.arrival_date} {item.arrival_time}</td>
                    <td>{item.departure_date} {item.departure_time}</td>
                    <td>{item.group_type.name}</td>
                    <td>{item.age_range.name}</td>
                    <td>{item.nationality.name}</td>
                    <td>{item.country.name}</td>
                    <td>{actionButtons(item)}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeclinedRequest);
