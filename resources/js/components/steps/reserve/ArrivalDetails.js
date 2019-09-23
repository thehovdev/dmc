import React, { Component } from 'react';

class ArrivalDetails extends Component {

    render() {
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div id="arrival-details">
                    <div className="form-group my-2">
                        <label htmlFor="arrival_date">Arrival date</label>
                        <input type="date" className="form-control" id="arrival_date" placeholder="Enter arrival date"></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="departure_date">Departure date</label>
                        <input type="date" className="form-control" id="departure_date" placeholder="Enter departure date"></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="arrival_time">Arrival time</label>
                        <input type="text" className="form-control" id="arrival_time" placeholder="Enter arrival time"></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="departure_time">Departure time</label>
                        <input type="text" className="form-control" id="departure_time" placeholder="Enter departure time"></input>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="number_of_people">Number of people</label>
                        <input type="number" className="form-control" id="number_of_people" placeholder="Enter number of people"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArrivalDetails;