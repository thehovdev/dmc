import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as homeAction from '../actions/home';

import ReserveForm from './steps/reserve/ReserveForm';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const openForm = (index) => {

            let opened = $("#reserve-form").attr('data-opened');
            if(opened == 0) {
                $("#reserve-form").attr('data-opened', 1);
                $("#reserve-form").steps({
                    headerTag: "h3",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                    autoFocus: true,
                    onFinished: function (event, currentIndex) {
                        sendForm(); // вызываем react метод (const sendForm) для отправки формы
                    },
                });
            }

            return this.props.homeAction.openForm(index);
        }

        const sendForm = () => {

            return this.props.homeAction.sendForm();
        }

        const showForm = () => {

            if(this.props.home.form.show == false) {
                return "reservation-form d-none";
            } else {
                return "reservation-form";
            }
        }

        return (
            <div className="intro-content">
                <h1>Lorem Ipsum is simply dummy text.</h1>
                <button onClick={() => openForm()} className="btn btn-lg btn-primary">Reserve</button>

                <div className={showForm()}>
                    <ReserveForm step={this.props.step} />
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      home: state.home,
      step: state.step
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);