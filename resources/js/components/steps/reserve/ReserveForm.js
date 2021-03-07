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

    // componentDidUpdate() {

    //     console.log('componentDidUpdate');

    //     var buttons = document.getElementsByClassName("btnStepAction");
    //     for(var i = 0; i < buttons.length; i++)
    //     {
    //        console.log(buttons[i]);
    //     }


    // }

    checkRequiredFields() {
        // required fields
        let required = ['arrival_date', 'departure_date'];
        let trigger;

        for (let index = 0; index < required.length; index++) {
            var element = required[index];
            var input = document.getElementById(element);

            if(input.value == '') {
                input.classList.add('error-input');
                trigger = false;
            } else {
                input.classList.remove('error-input');
                trigger = true;
            }
        }

        return trigger;

        // let arrival_date = document.getElementById('arrival_date');
        // let departure_date = document.getElementById('departure_date');

        // if(arrival_date.value == '' || departure_date.value == '') {
        //     arrival_date.classList.add('error-input');
        //     departure_date.classList.add('error-input');
        //     return false;
        // } else {
        //     arrival_date.classList.remove('error-input');
        //     departure_date.classList.remove('error-input');
        // }

        // return true;
    }

    setButtonDelay() {
        var buttons = document.getElementsByClassName("btnStepAction");

        for(var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        setTimeout(() => {
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }
        }, 500);
    }

    render() {
        const nextButton = (element) => {
            let elem = document.querySelector('.nav-link.active').closest('li');

            if(this.checkRequiredFields() == false) {
                return false;
            }
            
            if(elem.nextElementSibling != null) {
                elem.nextElementSibling.querySelector('a').classList.remove('disabled');
                elem.nextElementSibling.querySelector('a').click();

                this.setButtonDelay();
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

                this.setButtonDelay();
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
                            <a className="nav-link disabled" id="pills-groups-tab" data-toggle="pill" href="#pills-groups" role="tab" aria-controls="pills-groups" aria-selected="false">{translate('step.groupDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" id="pills-others-tab" data-toggle="pill" href="#pills-others" role="tab" aria-controls="pills-others" aria-selected="false">{translate('step.otherDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" id="pills-transfer-tab" data-toggle="pill" href="#pills-transfer" role="tab" aria-controls="pills-transfer" aria-selected="false">{translate('step.transferDetails')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" id="pills-final-tab" data-toggle="pill" href="#pills-final" role="tab" aria-controls="pills-final" aria-selected="false">{translate('step.finalDetails')}</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <ArrivalDetails step={this.props.step}/>
                        <GroupDetails step={this.props.step}/>
                        <OtherDetails step={this.props.step} />
                        <TransportDetails step={this.props.step}/>
                        <FinalDetails step={this.props.step}/>

                        <button onClick={(element) => prevButton(element)} className="btn btn-light btnStepAction">{translate('previous')}</button>
                        <button onClick={(element) => nextButton(element)} className="btn btn-success btnStepAction">{translate('next')}</button>
                    </div>
                </div>
        );
    }
}

export default ReserveForm;