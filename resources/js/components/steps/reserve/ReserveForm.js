import React, { Component } from 'react';

import ArrivalDetails from './ArrivalDetails';
import GroupDetails from './GroupDetails';
import OtherDetails from './OtherDetails';
import FinalDetails from './FinalDetails';


class ReserveForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        
        const nextButton = () => {
            let elem = document.querySelector('.nav-link.active').closest('li');
            elem.nextElementSibling.querySelector('a').click();
        }
        const prevButton = () => {
            let elem = document.querySelector('.nav-link.active').closest('li');

            if(elem.previousElementSibling != null) {
                elem.previousElementSibling.querySelector('a').click();
            } else {

                this.props.closeForm();
                // document.getElementById('startItems').style.display = 'block';
                // document.getElementById('reserve-form').style.display = 'none';
            }
        }


        return (

                <div id="reserve-form" className="user-form steps-form" data-opened="0">
                    <h3 className="text-center">Something about information</h3>
                    <ul className="nav nav-pills nav-steps mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Arrival Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-groups-tab" data-toggle="pill" href="#pills-groups" role="tab" aria-controls="pills-groups" aria-selected="false">Group Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-others-tab" data-toggle="pill" href="#pills-others" role="tab" aria-controls="pills-others" aria-selected="false">Other Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-final-tab" data-toggle="pill" href="#pills-final" role="tab" aria-controls="pills-final" aria-selected="false">Final Details</a>
                        </li>
                    </ul>


                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <ArrivalDetails/>
                        </div>
                        <div className="tab-pane fade" id="pills-groups" role="tabpanel" aria-labelledby="pills-groups-tab">
                            <GroupDetails step={this.props.step}/>
                        </div>
                        <div className="tab-pane fade" id="pills-others" role="tabpanel" aria-labelledby="pills-others-tab">
                            <OtherDetails step={this.props.step}/>
                        </div>
                        <div className="tab-pane fade" id="pills-final" role="tabpanel" aria-labelledby="pills-final-tab">
                            <FinalDetails step={this.props.step}/>
                        </div>


                        <button onClick={() => prevButton()} className="btn btn-light btnStepAction">Previous</button>
                        <button onClick={() => nextButton()} className="btn btn-success btnStepAction">Next</button>
                    </div>
                </div>

                    // <h3>Arrival Details</h3>
                    // <section id="arrivad-details-section">
                    //     <ArrivalDetails/>
                    // </section>

                    // <h3>Group details</h3>
                    // <section id="group-details-section">
                    //     <GroupDetails step={this.props.step} />
                    // </section>

                    // <h3>Other details</h3>
                    // <section id="other-details-section">
                    //     <OtherDetails step={this.props.step}/>
                    // </section>

                    // <h3>Final Details</h3>
                    // <section>
                    //     <FinalDetails/>
                    // </section>

        );
    }
}

export default ReserveForm;