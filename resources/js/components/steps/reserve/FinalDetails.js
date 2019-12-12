import React, { Component } from 'react';
import {translate} from '../../../includes/helpers';

class FinalDetails extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="pills-final" role="tabpanel" aria-labelledby="pills-final-tab">
                 <div id="final-details">

                    <div className="form-group">
                        <label htmlFor="email">{translate('step.final.provideEmailAddress') }</label>
                        <input type="email" id="email" className="form-control" required></input>
                    </div>    

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="single_min_price">{translate('step.final.expectedBudget') }</label>
                            </div>
                            <div className="col-sm-3 d-flex align-items-center">
                                {translate('step.final.single') }
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="single_min_price" className="form-control" placeholder={translate('step.final.single_min') }></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="single_max_price" className="form-control" placeholder={translate('step.final.single_max') }></input>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                {translate('step.final.double') }
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="double_min_price" className="form-control" placeholder={translate('step.final.double_min') }></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="double_max_price" className="form-control" placeholder={translate('step.final.double_max') }></input>
                            </div>
                        </div>

                      <div className="row mt-2">
                            <div className="col-sm-3 d-flex align-items-center">
                                {translate('step.final.triple') }
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="triple_min_price" className="form-control" placeholder={translate('step.final.triple_min') }></input>
                            </div>
                            <div className="col-sm-4">
                                <input type="number" id="triple_max_price" className="form-control" placeholder={translate('step.final.triple_max') }></input>
                            </div>
                        </div>

                    </div>   

                    <div className="form-group">
                        <label htmlFor="additional_request">{translate('step.final.additionalRequest') }</label>
                        <textarea className="full-width" id="additional_request"></textarea>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default FinalDetails;




