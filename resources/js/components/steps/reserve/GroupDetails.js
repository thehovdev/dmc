import React, { Component } from 'react';
import {translate} from '../../../includes/helpers';

class GroupDetails extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const groupTypes = this.props.step.groupTypes;
        const nationality = this.props.step.nationality;
        const ageRange = this.props.step.ageRange;
        const countries = this.props.step.countries;

        const optionsList = (items) => {
            return items.map((item, index) =>
                <option key={ index } value={ item.id }>{ typeof item.value !== 'undefined' ? item.value : item.name }</option>
            );
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
                        <select className="form-control" id="age_range_id">
                            { optionsList(ageRange) }
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupDetails;