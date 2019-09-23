import React, { Component } from 'react';

class FinalDetails extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="pills-final" role="tabpanel" aria-labelledby="pills-final-tab">
                 <div id="final-details">

                    <div className="form-group">
                        <label htmlFor="need_tour_options">Do you need tour options for the group</label>
                        <select className="form-control" id="need_tour_options">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Please provide you email address</label>
                        <input type="email" id="email" className="form-control" required></input>
                    </div>    

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="single_min_price">Single room budget per person</label>
                            </div>
                            <div className="col-sm-6">
                                <input type="number" id="single_min_price" className="form-control" placeholder="budget (min):"></input>
                            </div>
                            <div className="col-sm-6">
                                <input type="number" id="single_max_price" className="form-control" placeholder="budget (max):"></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="double_min_price">Double room budget per person</label>
                            </div>
                            <div className="col-sm-6">
                                <input type="number" id="double_min_price" className="form-control" placeholder="budget (min):"></input>
                            </div>
                            <div className="col-sm-6">
                                <input type="number" id="double_max_price" className="form-control" placeholder="budget (max):"></input>
                            </div>
                        </div>

                    </div>   

                    <div className="form-group">
                        <label htmlFor="additional_request">Additional Request : description for missed part.</label>
                        <textarea className="full-width" id="additional_request"></textarea>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default FinalDetails;




