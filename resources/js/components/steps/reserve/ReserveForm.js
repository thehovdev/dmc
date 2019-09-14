import React, { Component } from 'react';

import ArrivalDetails from './ArrivalDetails';
import GroupDetails from './GroupDetails';
import OtherDetails from './OtherDetails';
import FinalDetails from './FinalDetails';


class ReserveForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div id="reserve-form" className="user-form" data-opened="0">
                    <h3>Arrival details</h3>
                    <section id="arrivad-details-section">
                        <ArrivalDetails/>
                    </section>

                    <h3>Group details</h3>
                    <section id="group-details-section">
                        <GroupDetails step={this.props.step} />
                    </section>

                    <h3>Other detals</h3>
                    <section id="other-details-section">
                        <OtherDetails step={this.props.step}/>
                    </section>

                    <h3>Final detals</h3>
                    <section>
                        <FinalDetails/>
                    </section> 

                </div>
    }
}

export default ReserveForm;