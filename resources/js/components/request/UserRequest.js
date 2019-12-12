import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import * as companyAction from '../../actions/company';
import * as requestApi from '../../requests/request';
import * as requestAction from '../../actions/request';
import * as blocks from '../../includes/blocks';

class UserRequest extends Component {

    constructor(props) {
        super(props);
    }

    getUserReserves (page = 1) {
        let action = this.props.requestAction;
        return requestApi.getUserReserves(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getUserReserves();
    }

    render() {
        const edit = this.props.request.edit;
        const proposal = this.props.request.proposal;
        const proposals = this.props.request.proposals;
        const request = this.props.request.item;
        const requests = this.props.request.items;
        const requestAction = this.props.requestAction;

        // information bloocks in reserve detail page 
        const infoBlocks = () => {
            return (
                <div className="row">
                    {proposalList()}

                    {blocks.arrivalInfoList(request)}
                    {blocks.groupInfoList(request)}
                    {blocks.mainInfoList(request)}
                    {blocks.additionalInfoList(request)}
                </div>
            );
        }

        // main actions
        const editRequest = (id, page = 1) => {
            if(id == false) {
                return requestAction.edit(false);
            } else {
                return requestApi.findByUser(requestAction, id, page);
            }
        }

        const showProposal = (item) => {
            if(typeof item !== 'undefined') {
                return requestAction.showProposal(item);
            }
        }

        // index and edit state blocks
        const requestBlock = () => {
            console.log('edit : ' + edit);
            console.log(proposal);

            if(edit == false) {
                return requestIndexBlock();
            } else {

                if (proposal == null) {
                    return requestEditBlock();
                } else {
                    return proposalBlock();
                }

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
                    <td>{translate(item.group_type.prefix)}</td>
                    <td>{item.age_range.name}</td>
                    <td>{item.nationality.name}</td>
                    <td>{item.country.name}</td>
                    <td>
                        <button type="button" className="btn btn-success" onClick={() => editRequest(item.id)}>
                            <i className="fas fa-eye"></i>
                        </button>
                    </td>
                </tr>
            );
        }


        const requestIndexBlock = () => {
            return (
                <div>
                    <h4 className="py-2">{translate('myRequestList')}</h4>

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
        const proposalList = () => {

            console.log(request);

            if(request.responded_reserves == null) return null;

            return (
                <div className="col-sm-12">
                    <h4 className="py-2">{translate('myProposalList')}</h4>

                    <table className="table table-bordered table-primary">
                        <thead>
                            <tr>
                                <th>{translate('id')}</th>
                                {/* <th>{translate('block.hotel')}</th> */}
                                {/* <th>{translate('block.vehicle')}</th> */}
                                <th>{translate('block.tours')}</th>
                                <th>{translate('currency')}</th>
                                <th>{translate('singlePrice')}</th>
                                <th>{translate('doublePrice')}</th>
                                <th>{translate('triplePrice')}</th>
                                <th>{translate('company')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {request.responded_reserves.data.map((item, index) =>
                                <tr id={'request-' + item.id} key={index}>
                                    <td>{item.id}</td>
                                    {/* <td>{item.hotel_name}</td> */}
                                    {/* <td>{item.vehicle_name}</td> */}
                                    <td>{item.offered_tours}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.single_price}</td>
                                    <td>{item.double_price}</td>
                                    <td>{item.triple_price}</td>
                                    <td>{item.operator.company.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => showProposal(item)}>
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {proposalsPagination()}
                    </ul>
                </div>
            )

            
        }
        const proposalBlock = () => {

            if(proposal == null) return null;

            let infoArr = [
                { id: 'hotel_name', title : translate('block.hotelName'), value: proposal.hotel_name},
                { id: 'vehicle_name', title : translate('block.vehicleName'), value: proposal.vehicle_name},
                { id: 'offered_tours', title : translate('block.offeredTours'), value: proposal.offered_tours},
                { id: 'currency', title : translate('block.currency'), value: proposal.currency},
                { id: 'single_price', title : translate('block.singlePrice'), value: proposal.single_price},
                { id: 'double_price', title : translate('block.doublePrice'), value: proposal.double_price},
                { id: 'triple_price', title : translate('block.triplePrice'), value: proposal.triple_price},
                { id: 'company', title : translate('block.company'), value: proposal.operator.company.name},
                { id: 'company_email', title : translate('block.companyEmail'), value: proposal.operator.company.email},
                { id: 'company_phone', title : translate('block.companyPhone'), value: proposal.operator.company.phone},
            ];

            return (
                <div className="col-sm-12 ">
                    {/* <div className="company-logo">
                        <img src={'/storage/company/logo/' + proposal.operator.company.logo}></img>
                    </div> */}

                    <div className="proposal-status">
                        {proposalStatus(proposal)}
                    </div>

                    <div id="show-proposal-content"  className="animated bounceInRight">
                        <div className="cabinet-info">
                            <h4 className="py-2">{translate('myProposalDetails')}</h4>
                            <div className="detail-data">
                                <h5 className="main-title text-center">{translate('proposalInformation')}</h5>
                                <ul className="detail-data-list proposal-detail-data-list">
                                    {infoArr.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="title">{item.title}</span>
                                                <span className="content">{item.value != null ? item.value : '-' }</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="detail-data">
                                <h5 className="main-title text-center">Contact person information</h5>
                                <table className="table table-bordered table-primary">
                                    <thead>
                                        <tr>
                                            <th>{translate('name')}</th>
                                            <th>{translate('email')}</th>
                                            <th>{translate('phone')}</th>
                                            <th>{translate('officePhone')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {proposal.operator.company.contact_persons.map((item, index) => {
                                            return (
                                                <tr id={'request-' + item.id} key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.office_phone}</td>
                                                    <td>{item.phone}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                            
                        <button className="btn btn-primary mx-1 my-2" onClick={() => editRequest(request.id)}>
                            <i className="fas fa-arrow-left"></i> {translate('back')}
                        </button>
                    </div>
                </div>
            )
        }

        const proposalStatus = (proposal) => {
            if(proposal.operator.company.status == 0 || proposal.operator.status == 0) {
                return (
                    <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">{translate('proposalWarning')}</h4>
                        <p>{translate('proposalNotValid')}</p>
                    </div>
                )
            }

            return null;
        }

        /* pagination */
        const proposalsPagination = () => {

            if(request != null && request.responded_reserves != null) {
                let pageCount = request.responded_reserves.last_page;
                let currentPage = request.responded_reserves.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {editRequest(request.id, page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRequest);
