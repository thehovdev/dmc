import React, { Component } from 'react';

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
                <option key={ index } value={ item.id }>{ item.value }</option>
            );
        }


        
        return <div id="group-details">
                    <div className="form-group">
                        <label htmlFor="group_type_id">Group type</label>
                        <select className="form-control" id="group_type_id">
                            { optionsList(groupTypes) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country_id">Choose trip country</label>
                        <select className="form-control" id="country_id">
                            { optionsList(countries) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nationality_id">Nationality</label>
                        <select className="form-control" id="nationality_id">
                            { optionsList(nationality) }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age_range_id">Age range</label>
                        <select className="form-control" id="age_range_id">
                            { optionsList(ageRange) }
                        </select>
                    </div>
                </div>
    }
}

export default GroupDetails;