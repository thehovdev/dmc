import React, { Component } from 'react';

class FinalDetails extends Component {
    render() {
        return <div id="final-details">
                    <div className="form-group">
                        <label htmlFor="need_tour_options">Do you need tour options for the group</label>
                        <select className="form-control" id="need_tour_options">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="need_meeting_facilities">Do you need meeting facilities for the group</label>
                        <select className="form-control" id="need_meeting_facilities">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Please provide you email address</label>
                        <input type="email" id="email" className="form-control" required></input>
                    </div>    

                    <div className="form-group">
                        <label htmlFor="additional_request">Additional Request : description for missed part.</label>
                        <textarea className="full-width" id="additional_request"></textarea>
                    </div>                    
                </div>
    }
}

export default FinalDetails;




