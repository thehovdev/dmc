import React, { Component } from 'react';
import flatpickr from "flatpickr";
import {translate} from '../../../includes/helpers';

class ArrivalDetails extends Component {

    componentDidMount() {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        flatpickr("#arrival_date", {
            minDate: "today"
        });
        flatpickr("#departure_date", {
            minDate: tomorrow
        });

        flatpickr("#arrival_time", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
        flatpickr("#departure_time", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div id="arrival-details">
                    <div className="form-group my-2">
                        <label htmlFor="arrival_date">{translate('step.arrival.arrivalDate')}</label>
                        <input type="text" className="form-control" id="arrival_date" placeholder={translate('step.arrival.arrivalDateEnter')}></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="departure_date">{translate('step.arrival.departureDate')}</label>
                        <input type="text" className="form-control" id="departure_date" placeholder={translate('step.arrival.departureDateEnter')}></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="arrival_time">{translate('step.arrival.arrivalTime')}</label>
                        <input type="text" className="form-control" id="arrival_time" placeholder={translate('step.arrival.arrivalTimeEnter')}></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="departure_time">{translate('step.arrival.departureTime')}</label>
                        <input type="text" className="form-control" id="departure_time" placeholder={translate('step.arrival.departureTimeEnter')}></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="number_of_people">{translate('step.arrival.numberOfPeople')}</label>
                        <input type="number" className="form-control" id="number_of_people" placeholder={translate('step.arrival.numberOfPeopleEnter')}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArrivalDetails;