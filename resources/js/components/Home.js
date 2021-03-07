import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as homeAction from '../actions/home';
import * as userApi from '../requests/user';
import * as userAction from '../actions/user';
import * as stepAction from '../actions/step';
import * as reserveApi from '../requests/reserve';
import {translate} from '../includes/helpers';

import ReserveForm from './steps/reserve/ReserveForm';

class Home extends Component {

    constructor(props) {
        super(props);

        if(typeof createRequestFromCabinet !== 'undefined') {
            console.log(createRequestFromCabinet);

            props.home.form.show = true;
        }
    }

    componentDidMount(){
        userApi.checkAuth(this.props.userAction);
        reserveApi.getStepParameters(this.props.stepAction);
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
        const startButtons = () => {
            if(typeof this.props.user.auth !== 'undefined' && typeof this.props.home.form.show !== 'undefined') {

                if(this.props.user.auth == 1 && this.props.home.form.show == false) {

                        return (
                            <div className="startItems" id="startItems">
                                <h1>{translate('introTitle')}</h1>
                                <button onClick={() => openForm()} className="btn btn-lg btn-light d-block m-auto">
                                    {translate('makeReservation')}
                                </button>
                            </div>
                        )


                } else if(this.props.user.auth == 2 && this.props.home.form.show == false) { 
                    return (
                        <div className="startItems" id="startItems">
                            <h1>{translate('introOperator')}</h1>
                            <a className="btn btn-lg btn-light d-block m-auto" href="/cabinet/reserve">
                                {translate('pendingRequest')}
                            </a>
                        </div>
                    )
                } else if(this.props.user.auth == 3 && this.props.home.form.show == false) {
                    return (
                        <div className="startItems" id="startItems">
                            <h1>{translate('introAdmin')}</h1>
                            <a className="btn btn-lg btn-light d-block m-auto" href="/admin/company">
                                {translate('admin')}
                            </a>
                        </div>
                    )
                } else if(this.props.user.auth == 0 && this.props.home.form.show == false) {
                    return (
                        <div className="startItems" id="startItems">
                            <h1>{translate('introTitle')}</h1>
                            <div className="d-flex">
                                <a href="/login" className="btn btn-lg btn-light d-block w-50 mx-1">
                                    {translate('auth.login')}
                                </a>
                                <a href="/register" className="btn btn-lg btn-light d-block w-50 mx-1">
                                    {translate('auth.create_account')}
                                </a>
                            </div>
                        </div>
                    )
                }

            }
        }
        const showForm = () => {

            // if(typeof createRequestFromCabinet !== 'undefined' && createRequestFromCabinet == 1) {
            //     return "reservation-form";
            // }

            if(this.props.home.form.show == false) {
                return "reservation-form d-none";
            } else {
                return "reservation-form";
            }
        }

        return (
            <div className="intro-content">
                {startButtons()}
                <div className={showForm()}>
                    <ReserveForm 
                        home={this.props.home} 
                        step={this.props.step} 
                        sendForm={sendForm}
                        closeForm={closeForm} />
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch),
        userAction: bindActionCreators(userAction, dispatch),
        stepAction: bindActionCreators(stepAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      home: state.home,
      step: state.step,
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);