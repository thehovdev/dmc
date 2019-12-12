import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../../includes/helpers';
import * as stepAction from '../../../actions/step.js';

class TransportDetails extends Component {
    render() {

        const needTourLeader = this.props.step.inputActions.needTourLeader;
        const needExcursionOptions = this.props.step.inputActions.needExcursionOptions;
        const needMeetingFacilities = this.props.step.inputActions.needMeetingFacilities;

        const selectTourLeader = () => {
            return this.props.stepAction.selectToggle('needTourLeader');
        }

        const selectExcursionOptions = () => {
            return this.props.stepAction.selectToggle('needExcursionOptions');
        }

        const selectMeetingFacilities = () => {
            return this.props.stepAction.selectToggle('needMeetingFacilities');
        }




        const tourLeaderBlock = () => {
            if(needTourLeader) {
                return (
                    <div className="form-group-parent">
                        <div className="form-group">
                            <label htmlFor="number_of_tourleaders">
                                {translate('step.transfer.numberOfTourLeader')}
                            </label>
                            <input type="number" id="number_of_tourleaders" className="form-control" defaultValue="1"></input>
                        </div>    

                        <div className="form-group">
                            <label htmlFor="language_of_tourleaders">
                                {translate('step.transfer.preferredLanguage')}
                            </label>
                            <input type="text" id="language_of_tourleaders" className="form-control" defaultValue="English"></input>
                        </div>    
                    </div>
                );
            }
        }

        const excursionOptionsBlock = () => {

            if(needExcursionOptions) {
                return (
                    <div className="form-group">
                        <label htmlFor="excursion_options_description">{translate('step.transfer.describeYouRequest')}</label>
                        <input type="text" id="excursion_options_description" className="form-control" defaultValue="Some description"></input>
                    </div>    
                );
            }
        }

        const meetingFacilitiesBlock = () => {
            if(needMeetingFacilities) {
                return (
                    <div className="form-group">
                        <label htmlFor="meeting_facilities_description">{translate('step.transfer.describeYouRequest')}</label>
                        <input type="text" id="meeting_facilities_description" className="form-control" defaultValue="Some description"></input>
                    </div>    
                );
            }
        }




        return (
            <div className="tab-pane fade" id="pills-transfer" role="tabpanel" aria-labelledby="pills-transfer-tab">
                 <div id="final-details">


                    <div className="form-group">
                        <label htmlFor="need_tour_leader">{translate('step.transfer.doYouNeedTourLeader')}</label>
                        <select onChange={() => selectTourLeader()} className="form-control" id="need_tour_leader">
                            <option value="false">{translate('no')}</option>
                            <option value="true">{translate('yes')}</option>
                        </select>
                    </div>
            
                    { tourLeaderBlock() }

                    <div className="form-group">
                        <label htmlFor="need_excursion_options">{translate('step.transfer.doYouNeedExcursionOptions')}</label>
                        <select onChange={() => selectExcursionOptions()} className="form-control" id="need_excursion_options">
                            <option value="false">{translate('no')}</option>
                            <option value="true">{translate('yes')}</option>
                        </select>
                    </div>

                    { excursionOptionsBlock() } 

                    <div className="form-group">
                        <label htmlFor="need_meeting_facilities">{translate('step.transfer.doYouNeedMeetingFacilities')}</label>
                        <select onChange={() => selectMeetingFacilities()} className="form-control" id="need_meeting_facilities">
                            <option value="false">{translate('no')}</option>
                            <option value="true">{translate('yes')}</option>
                        </select>
                    </div>

                    { meetingFacilitiesBlock() }
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

export default connect(null, mapDispatchToProps)(TransportDetails);




