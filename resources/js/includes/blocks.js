import React, { Component } from 'react'
import * as helper from './helpers';

export function mainInfoList (request) {
    if(request == null) return null;
    let infoArr = [
        { title : helper.translate('block.identificationNumber'), content : request.id },
        { title : helper.translate('block.country'), content : request.country.name },
        { title : helper.translate('block.requestedAccomodation'), content : helper.showCheckedIcon(request.need_hotel) } ,
        { title : helper.translate('block.requestedVisa'), content : helper.showCheckedIcon(request.need_visa) } ,
        { title : helper.translate('block.requestedTransferServices'), content : helper.showCheckedIcon(request.need_transfer) } ,
        { title : helper.translate('block.requestedMeals'), content : helper.showCheckedIcon(request.need_cuisine) } ,
        { title : helper.translate('block.requestedMeetingFacilities'), content : helper.showCheckedIcon(request.need_meeting_facilities) } ,
        { title : helper.translate('block.requestedExcursion'), content : helper.showCheckedIcon(request.need_excursion_options) } ,
        { title : helper.translate('block.requestedTourleader'), content : helper.showCheckedIcon(request.need_tourleader) } ,
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
        { title : helper.translate('block.groupType'), content : request.group_type.name },
        { title : helper.translate('block.countryOfOrigin'), content : request.nationality.name },
        { title : helper.translate('block.ageRange'), content : request.age_range.name },
        { title : helper.translate('block.numberOfPeople'), content : request.number_of_people },
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
        { title : helper.translate('block.arrivalDate'), content : request.arrival_date },
        { title : helper.translate('block.arrivalTime'), content : request.arrival_time },
        { title : helper.translate('block.departureDate'), content : request.departure_date },
        { title : helper.translate('block.departureTime'), content : request.departure_time },
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
    let hotel_stars = helper.getTranslatedMultipleFields(request, 'hotel_stars', 'block');
    let cuisine_list = helper.getTranslatedMultipleFields(request, 'cuisine_list', 'block');
    let transfer_list = helper.getTranslatedMultipleFields(request, 'transfer_list', 'block');

    let infoArr = [
        { title : helper.translate('block.hotelStars'), content : hotel_stars },
        { title : helper.translate('block.cuisines'), content : cuisine_list },
        { title : helper.translate('block.transfers'), content : transfer_list },
        { title : helper.translate('block.numberOfTourLeader'), content : request.number_of_tourleaders },
        { title : helper.translate('block.singleMinPrice'), content : request.single_min_price },
        { title : helper.translate('block.singleMaxPrice'), content : request.single_max_price },
        { title : helper.translate('block.doubleMinPrice'), content : request.double_min_price },
        { title : helper.translate('block.doubleMaxPrice'), content : request.double_max_price },
        { title : helper.translate('block.tripleMinPrice'), content : request.triple_min_price },
        { title : helper.translate('block.tripleMaxPrice'), content : request.triple_max_price },
        { title : helper.translate('block.email'), content : request.email },
        { title : helper.translate('block.languageOfTourleaders'), content : request.language_of_tourleaders },
        { title : helper.translate('block.meetingDescription'), content : request.meeting_facilities_description },
        { title : helper.translate('block.excursionDescription'), content : request.excursion_options_description },
        { title : helper.translate('block.hotelDescription'), content : request.hotel_description },
        { title : helper.translate('block.additionalDescription'), content : request.additional_request },
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
        { id: 'hotel_name', title : helper.translate('block.hotelName'), placeholder: helper.translate('block.hotelNameEnter'), type : 'text', required: true},
        { id: 'vehicle_name', title : helper.translate('block.vehicleName'), placeholder: helper.translate('block.vehicleNameEnter'), type : 'text', required: true},
        { id: 'offered_tours', title : helper.translate('block.offeredTours'), placeholder: helper.translate('block.offeredToursEnter'), type : 'text', required: false},
        { id: 'currency', title : helper.translate('block.currency'), placeholder: helper.translate('block.currencyEnter'), type : 'text'},
        { id: 'single_price', title : helper.translate('block.singlePrice'), placeholder: helper.translate('block.singlePriceEnter'), type : 'number', required: true},
        { id: 'double_price', title : helper.translate('block.doublePrice'), placeholder: helper.translate('block.doublePriceEnter'), type : 'number', required: true},
        { id: 'triple_price', title : helper.translate('block.triplePrice'), placeholder: helper.translate('block.triplePriceEnter'), type : 'number', required: true},
    ];

    return (
        <div className="col-sm-12">
            <div className="detail-data">
                <h5 className="main-title send-proposal-title text-center">{helper.translate('sendProposalForm')}</h5>

                <div className="detail-data-content" id="send-proposal-content">
                    <div className="row">
                        {inputList.map((input, index) => {
                            return (
                                <div className="col-sm-6" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="name">{input.title} {input.required == false ? '' : '*'}</label>
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
        { id: 'hotel_name', title : helper.translate('block.hotelName'), value: request.responded.hotel_name, type : 'text', required: true},
        { id: 'vehicle_name', title : helper.translate('block.vehicleName'), value: request.responded.vehicle_name, type : 'text', required: true},
        { id: 'offered_tours', title : helper.translate('block.offeredTours'), value: request.responded.offered_tours, type : 'text', required: false},
        { id: 'currency', title : helper.translate('block.currency'), value: request.responded.currency, type : 'text', required: true},
        { id: 'single_price', title : helper.translate('block.singlePrice'), value: request.responded.single_price, type : 'number', required: true},
        { id: 'double_price', title : helper.translate('block.doublePrice'), value: request.responded.double_price, type : 'number', required: true},
        { id: 'triple_price', title : helper.translate('block.triplePrice'), value: request.responded.triple_price, type : 'number', required: true},
    ];
    return (
        <div className="col-sm-12">
            <div className="detail-data">
                <h5 className="main-title send-proposal-title text-center">{helper.translate('sendProposalForm')}</h5>

                <div className="detail-data-content" id="send-proposal-content">
                    <div className="row">
                        {inputList.map((input, index) => {
                            return (
                                <div className="col-sm-6" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="name">{input.title} {input.required == false ? '' : '*'}</label>
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