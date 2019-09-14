import React, { Component } from 'react';

class OtherDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const cuisineTypes = this.props.step.cuisineTypes;
        const optionsList = (items) => {
            return items.map((item, index) =>
                <option key={ index } value={ item.id }>{ item.value }</option>
            );
        }

        return <div id="other-details">
                    <div className="form-group">
                        <label htmlFor="cuisine_id">Preferred cuisine</label>
                        <select className="form-control" id="cuisine_id">
                            { optionsList(cuisineTypes) }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="need_transfer">Do you need Transfer from/to Hotel</label>
                        <select className="form-control" id="need_transfer">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="need_transport">Do you need Transportation service during the stay</label>
                        <select className="form-control" id="need_transport">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="need_guide">Do you need guide service</label>
                        <select className="form-control" id="need_guide">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
    }
}

export default OtherDetails;