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
            return this.props.homeAction.openForm(index);
        }

        const closeForm = (index) => {
            return this.props.homeAction.closeForm(index);
        }

        const sendForm = () => {

            return this.props.homeAction.sendForm();
        }

        const showItems = () => {
            if(this.props.home.form.show == true) {
                return "startItems d-none";
            } else {
                return "startItems";
            }
        }

        const showForm = () => {

            if(this.props.home.form.show == false) {
                return "reservation-form d-none";
            } else {
                return "reservation-form";
            }
        }

        const changeHotel = () => {
            console.log('hotel changed');
        }

        return (

            <div className="intro-content">
                <a href="/login" className="btn btn-outline-light btn-sm btn-login">Login</a>
                <div className={showItems()} id="startItems">
                    <h1>Lorem Ipsum is simply dummy text.</h1>
                    <button onClick={() => openForm()} className="btn btn-lg btn-light d-block m-auto">Reserve</button>
                </div>
                <div className={showForm()}>
                    <ReserveForm 
                        home={this.props.home} 
                        step={this.props.step} 
                        closeForm={closeForm}
                        />
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