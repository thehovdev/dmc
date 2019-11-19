import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as companyAction from '../../actions/company';
import * as requestApi from '../../requests/request';
import * as requestAction from '../../actions/request';
import * as helper from '../../includes/helpers';

class RequestIndex extends Component {

    constructor(props) {
        super(props);
    }

    getRequests (page = 1) {

        console.log(page);

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

        // extended actions

        const infoBlocks = () => {
            return (
                <div className="row">
                    {arrivalInfoList()}
                    {groupInfoList()}
                    {mainInfoList()}
                    {additionalInfoList()}
                </div>

            );
        }

        const mainInfoList = () => {
            if(request == null) return null;
            let infoArr = [
                { title : 'Identification Number:', content : request.id },
                { title : 'Country:', content : request.country.name },
                { title : 'Requested accommodation', content : helper.showCheckedIcon(request.need_hotel) } ,
                { title : 'Requested visa', content : helper.showCheckedIcon(request.need_visa) } ,
                { title : 'Requested transfer services', content : helper.showCheckedIcon(request.need_transfer) } ,
                { title : 'Requested meals', content : helper.showCheckedIcon(request.need_cuisine) } ,
                { title : 'Requested meeting facilities', content : helper.showCheckedIcon(request.need_meeting_facilities) } ,
                { title : 'Requested excursion', content : helper.showCheckedIcon(request.need_excursion_options) } ,
                { title : 'Requested tourleader', content : helper.showCheckedIcon(request.need_tourleader) } ,
            ];

            return (
                <div className="col-sm-12">
                    <div className="detail-data">
                        <h5 className="main-title text-center">Main information</h5>
                        <ul className="detail-data-list">
                            {infoArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="title">{item.title}</span>
                                        <span className="content">{item.content != null ? item.content : '-' }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )


        }
        const groupInfoList = () => {
            if(request == null) return null;
            let infoArr = [
                { title : 'Group Type:', content : request.group_type.name },
                { title : 'Country of origin:', content : request.nationality.name },
                { title : 'Age range:', content : request.age_range.name },
                { title : 'Number of people:', content : request.number_of_people },
            ];

            return (
                <div className="col-sm-6">
                    <div className="detail-data">
                        <h5 className="main-title text-center">Group information</h5>
                        <ul className="detail-data-list">
                            {infoArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="title">{item.title}</span>
                                        <span className="content">{item.content != null ? item.content : '-' }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )

        }
        const arrivalInfoList = () => {
            if(request == null) return null;
            let infoArr = [
                { title : 'Arrival date:', content : request.arrival_date },
                { title : 'Arrival time:', content : request.arrival_time },
                { title : 'Departure date:', content : request.departure_date },
                { title : 'Departure time:', content : request.departure_time },
            ];

            return (
                <div className="col-sm-6">
                    <div className="detail-data">
                        <h5 className="main-title text-center">Arrival information</h5>
                        <ul className="detail-data-list">
                            {infoArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="title">{item.title}</span>
                                        <span className="content">{item.content != null ? item.content : '-' }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
        const additionalInfoList = () => {
            if(request == null) return null;
            let hotel_stars = helper.getMultipleFields(request, 'hotel_stars');
            let cuisine_list = helper.getMultipleFields(request, 'cuisine_list');
            let transfer_list = helper.getMultipleFields(request, 'transfer_list');

            let infoArr = [
                { title : 'Hotel stars:', content : hotel_stars },
                { title : 'Cuisines:', content : cuisine_list },
                { title : 'Transfers:', content : transfer_list },
                { title : 'Number of tourleader:', content : request.number_of_tourleaders },
                { title : 'Signle min price:', content : request.single_min_price },
                { title : 'Single max price:', content : request.single_max_price },
                { title : 'Email:', content : request.email },
                { title : 'Language of tourleader:', content : request.language_of_tourleaders },
                { title : 'Meeting description:', content : request.meeting_facilities_description },
                { title : 'Excursion description:', content : request.excursion_options_description },
                { title : 'Hotel description:', content : request.hotel_description },
                { title : 'Additional description:', content : request.additional_request },
            ];

            return (
                <div className="col-sm-12">
                    <div className="detail-data">
                        <h5 className="main-title text-center">Additional information</h5>
                        <ul className="detail-data-list">
                            {infoArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="title">{item.title}</span>
                                        <span className="content">{item.content != null ? item.content : '-' }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }

        // main actions
        const editRequest = (id) => {
            if(id == false) {
                return requestAction.edit(false);
            } else {
                return requestApi.find(requestAction, id);
            }
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestIndex);
