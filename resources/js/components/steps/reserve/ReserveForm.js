import React, { Component } from 'react';
import ArrivalDetails from './ArrivalDetails';
import GroupDetails from './GroupDetails';
import OtherDetails from './OtherDetails';
import TransportDetails from './TransportDetails';
import FinalDetails from './FinalDetails';
import Swal from 'sweetalert2';
import {translate} from '../../../includes/helpers';

class ReserveForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const nextButton = () => {
            let elem = document.querySelector('.nav-link.active').closest('li');

            if(elem.nextElementSibling != null) {
                elem.nextElementSibling.querySelector('a').click();
            } else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Please check all fields",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#38c172',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm Reserve'
                }).then((result) => {
                    if (result.value) {
                        this.props.sendForm();
                    } 
                })

            }

        }
        const prevButton = () => {
            let elem = document.querySelector('.nav-link.active').closest('li');

            if(elem.previousElementSibling != null) {
                elem.previousElementSibling.querySelector('a').click();
            } else {
                this.props.closeForm();
            }
        }
        return (
                <div id="reserve-form" className="user-form steps-form" data-opened="0">
                    <h3 className="text-center">{translate('stepTitle')}</h3>
                    <ul className="nav nav-pills nav-steps mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{translate('step.arrivalDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-groups-tab" data-toggle="pill" href="#pills-groups" role="tab" aria-controls="pills-groups" aria-selected="false">{translate('step.groupDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-others-tab" data-toggle="pill" href="#pills-others" role="tab" aria-controls="pills-others" aria-selected="false">{translate('step.otherDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-transfer-tab" data-toggle="pill" href="#pills-transfer" role="tab" aria-controls="pills-transfer" aria-selected="false">{translate('step.transferDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-final-tab" data-toggle="pill" href="#pills-final" role="tab" aria-controls="pills-final" aria-selected="false">{translate('step.finalDetails')}</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <ArrivalDetails step={this.props.step}/>
                        <GroupDetails step={this.props.step}/>
                        <OtherDetails step={this.props.step} />
                        <TransportDetails step={this.props.step}/>
                        <FinalDetails step={this.props.step}/>

                        <button onClick={() => prevButton()} className="btn btn-light btnStepAction">{translate('previous')}</button>
                        <button onClick={() => nextButton()} className="btn btn-success btnStepAction">{translate('next')}</button>
                    </div>
                </div>
        );
    }
}

export default ReserveForm;