import React, { Component } from 'react'
import * as helper from './helpers';

export function mainInfoList (request) {
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
export function groupInfoList (request) {
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
export function arrivalInfoList (request) {
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
export function additionalInfoList (request) {
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
        { title : 'Double min price:', content : request.double_min_price },
        { title : 'Double max price:', content : request.double_max_price },
        { title : 'Triple min price:', content : request.triple_min_price },
        { title : 'Triple max price:', content : request.triple_max_price },
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
export function sendProposalList (request) {
    if(request == null) return null;

    let inputList = [
        { id: 'hotel_name', title : 'Hotel name:', placeholder: 'Enter hotel name', type : 'text'},
        { id: 'vehicle_name', title : 'Vehicle name:', placeholder: 'Enter vehicle name', type : 'text'},
        { id: 'offered_tours', title : 'Offered tours:', placeholder: 'Enter offered tours', type : 'text'},
        { id: 'currency', title : 'Currency:', placeholder: 'Enter currency', type : 'text'},
        { id: 'single_price', title : 'Price per pax (single room):', placeholder: 'Enter price', type : 'number'},
        { id: 'double_price', title : 'Price per pax (double room):', placeholder: 'Enter price', type : 'number'},
        { id: 'triple_price', title : 'Price per pax (triple room):', placeholder: 'Enter price', type : 'number'},
    ];


    return (
        <div className="col-sm-12">
            <div className="detail-data">
                <h5 className="main-title send-proposal-title text-center">Send proposal form</h5>

                <div className="detail-data-content" id="send-proposal-content">
                    <div className="row">
                        {inputList.map((input, index) => {
                            return (
                                <div className="col-sm-6" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="name">{input.title}</label>
                                        <input type={input.type} className="form-control" id={input.id} placeholder={input.placeholder}></input>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function editProposalList (request) {
    if(request == null) return null;

    let inputList = [
        { id: 'hotel_name', title : 'Hotel name:', value: request.responded.hotel_name, type : 'text'},
        { id: 'vehicle_name', title : 'Vehicle name:', value: request.responded.vehicle_name, type : 'text'},
        { id: 'offered_tours', title : 'Offered tours:', value: request.responded.offered_tours, type : 'text'},
        { id: 'currency', title : 'Currency:', value: request.responded.currency, type : 'text'},
        { id: 'single_price', title : 'Price per pax (single room):', value: request.responded.single_price, type : 'number'},
        { id: 'double_price', title : 'Price per pax (double room):', value: request.responded.double_price, type : 'number'},
        { id: 'triple_price', title : 'Price per pax (triple room):', value: request.responded.triple_price, type : 'number'},
    ];
    return (
        <div className="col-sm-12">
            <div className="detail-data">
                <h5 className="main-title send-proposal-title text-center">Send proposal form</h5>

                <div className="detail-data-content" id="send-proposal-content">
                    <div className="row">
                        {inputList.map((input, index) => {
                            return (
                                <div className="col-sm-6" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="name">{input.title}</label>
                                        <input type={input.type} className="form-control" id={input.id} defaultValue={input.value}></input>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}