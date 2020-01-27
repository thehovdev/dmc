import React, { Component } from 'react';
import {translate} from '../../../includes/helpers';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as stepAction from '../../../actions/step.js';

class GroupDetails extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const groupTypes = this.props.step.groupTypes;
        const nationality = this.props.step.nationality;
        const ageRange = this.props.step.ageRange;
        const countries = this.props.step.countries;
        const ageFromTo = this.props.step.inputActions.ageFromTo;


        const optionsList = (items) => {
            return items.map((item, index) =>
                <option key={ index } value={ item.id }>
                    { typeof item.prefix !== 'undefined' ? translate(item.prefix) : item.name }
                </option>
            );
        }

        const selectAgeRange = (event) => {

            if(event.target.value == 5) {
                return this.props.stepAction.selectToggleWithParam({char: 'ageFromTo', data: true });
            } else {
                return this.props.stepAction.selectToggleWithParam({char: 'ageFromTo', data: false });
            }
        }

        
        const ageFromToBlock = () => {
          if(ageFromTo) {
              return (
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="number" id="age_from" className="form-control" placeholder={translate('step.group.ageFrom') }></input>
                        </div>
                        <div className="col-sm-6">
                            <input type="number" id="age_to" className="form-control" placeholder={translate('step.group.ageTo') }></input>
                        </div>
                    </div>
                </div>
              );
          }
      }


        
        return (
            <div className="tab-pane fade" id="pills-groups" role="tabpanel" aria-labelledby="pills-groups-tab">
                <div id="group-details">
                    <div className="form-group">
                        <label htmlFor="group_type_id">{translate('step.group.groupType')}</label>
                        <select className="form-control" id="group_type_id">
                            { optionsList(groupTypes) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country_id">{translate('step.group.tripCountry')}</label>
                        <select className="form-control" id="country_id">
                            { optionsList(countries) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nationality_id">{translate('step.group.nationality')}</label>
                        <select className="form-control" id="nationality_id">
                            { optionsList(nationality) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age_range_id">{translate('step.group.ageRange')}</label>
                        <select onChange={() => selectAgeRange(event)} className="form-control" id="age_range_id">
                            { optionsList(ageRange) }
                        </select>
                    </div>
                    { ageFromToBlock() }
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

export default connect(null, mapDispatchToProps)(GroupDetails);