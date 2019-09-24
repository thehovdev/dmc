import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
                            <label htmlFor="tour_leaders_number">Number of tour leaders</label>
                            <input type="number" id="tour_leaders_number" className="form-control" defaultValue="1"></input>
                        </div>    

                        <div className="form-group">
                            <label htmlFor="tour_leaders_language">Preferred language</label>
                            <input type="text" id="tour_leaders_language" className="form-control" defaultValue="English"></input>
                        </div>    
                    </div>
                );
            }
        }

        const excursionOptionsBlock = () => {

            if(needExcursionOptions) {
                return (
                    <div className="form-group">
                        <label htmlFor="excursion_options_request">Describe you request</label>
                        <input type="text" id="excursion_options_request" className="form-control" defaultValue="Some description"></input>
                    </div>    
                );
            }
        }

        const meetingFacilitiesBlock = () => {
            if(needMeetingFacilities) {
                return (
                    <div className="form-group">
                        <label htmlFor="meeting_facilities_request">Describe you request</label>
                        <input type="text" id="meeting_facilities_request" className="form-control" defaultValue="Some description"></input>
                    </div>    
                );
            }
        }




        return (
            <div className="tab-pane fade" id="pills-transport" role="tabpanel" aria-labelledby="pills-transport-tab">
                 <div id="final-details">


                    <div className="form-group">
                        <label htmlFor="need_tour_leader">Do you need tour leader service ?</label>
                        <select onChange={() => selectTourLeader()} className="form-control" id="need_tour_leader">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
            
                    { tourLeaderBlock() }

                    <div className="form-group">
                        <label htmlFor="need_excursion_options">Do you need excursion options for the group</label>
                        <select onChange={() => selectExcursionOptions()} className="form-control" id="need_excursion_options">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    { excursionOptionsBlock() } 

                    <div className="form-group">
                        <label htmlFor="need_meeting_facilities">Do you need meeting facilities for the group</label>
                        <select onChange={() => selectMeetingFacilities()} className="form-control" id="need_meeting_facilities">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    { meetingFacilitiesBlock() }

                    <div className="form-group">
                        <label htmlFor="need_guide">Do you need guide service</label>
                        <select className="form-control" id="need_guide">
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
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

export default connect(null, mapDispatchToProps)(TransportDetails);




