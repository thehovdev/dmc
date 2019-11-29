import React, { Component } from 'react';

class FinalDetails extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="pills-final" role="tabpanel" aria-labelledby="pills-final-tab">
                 <div id="final-details">

                    <div className="form-group">
                        <label htmlFor="email">Please provide you email address</label>
                        <input type="email" id="email" className="form-control" required></input>
                    </div>    

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="single_min_price">Expected budget per person</label>
                            </div>
                            <div className="col-sm-3 d-flex align-items-center">
                                Single :
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="single_min_price" className="form-control" placeholder="single (min):"></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="single_max_price" className="form-control" placeholder="single (max):"></input>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                Double :
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="double_min_price" className="form-control" placeholder="double (min):"></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="double_max_price" className="form-control" placeholder="double (max):"></input>
                            </div>
                        </div>

                      <div className="row mt-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                Triple :
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="triple_min_price" className="form-control" placeholder="triple (min):"></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="triple_max_price" className="form-control" placeholder="triple (max):"></input>
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




