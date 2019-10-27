import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as stepAction from '../../../actions/step.js';

class OtherDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const needHotel = this.props.step.inputActions.needHotel;
        const needTransfer = this.props.step.inputActions.needTransfer;
        const needCuisine = this.props.step.inputActions.needCuisine;
        
        const hotelStars = this.props.step.hotelStars;
        const transferServices = this.props.step.transferServices;
        const cuisineTypes = this.props.step.cuisineTypes;


        const selectHotel = () => {
            return this.props.stepAction.selectToggle('needHotel');
        }
        const selectTransfer = () => {
            return this.props.stepAction.selectToggle('needTransfer');
        }
        const selectCuisine = () => {
            return this.props.stepAction.selectToggle('needCuisine');
        }


        const optionsList = (items) => {
            return items.map((item, index) =>
                <option key={ index } value={ item.id }>{ item.value }</option>
            );
        }

        const checkList = (items, prefix) => {
            return items.map((item, index) =>
                <div className="form-check-inline" key={ index }>
                    <input className="styled-checkbox" id={ item.prefix } type="checkbox" value={ item.id } prefix={prefix}></input>
                    <label htmlFor={ item.prefix } className="noselect">{ item.value }</label>
                </div>
            );
        }
        const hotelStarsBlock = () => {
            if(needHotel) {
                return (
                    <div>
                        <div>
                            { checkList(hotelStars, 'hotel_star_id_list') }
                        </div>
                        <div>
                            <textarea className="form-control full-width" id="hotel_description" placeholder="You description for hotel"></textarea>
                        </div>
                    </div>
                );
            }
        }
        const transportServiceBlock = () => {
            if(needTransfer) {
                return (
                    <div>
                        { checkList(transferServices, 'transfer_id_list') }
                    </div>
                );
            }
        }
        const cuisineBlock = () => {
            if(needCuisine) {
                return (
                    <div> 
                        { checkList(cuisineTypes, 'cuisine_id_list') }
                    </div>
                );
            }
        }



        return (
            <div className="tab-pane fade" id="pills-others" role="tabpanel" aria-labelledby="pills-others-tab">
                <div id="other-details">
                    <div className="form-group">
                        <label htmlFor="need_visa">Do you need visa</label>
                        <select className="form-control" id="need_visa">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="need_hotel">Do you need hotel</label>
                        <select onChange={() => selectHotel()} className="form-control" id="need_hotel">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    <div className="form-group">
                        { hotelStarsBlock() }
                    </div>

                    <div className="form-group">
                        <label htmlFor="need_transport">Do you need Transportation service during the stay</label>
                        <select onChange={() => selectTransfer()} className="form-control" id="need_transfer">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    <div className="form-group">
                        { transportServiceBlock() }
                    </div>


                    <div className="form-group">
                        <label htmlFor="need_cuisine">Do you need Meals ?</label>
                        <select onChange={() => selectCuisine()} className="form-control" id="need_cuisine">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    <div className="form-group">
                        { cuisineBlock() }
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        stepAction: bindActionCreators(stepAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(OtherDetails);
