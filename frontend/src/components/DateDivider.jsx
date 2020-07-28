import React from "react";
import moment from "moment";

class DateDivider extends React.Component {
    render() {
        return (
            <h5 className="ui horizontal divider header">
                {moment(this.props.date).format("MMMM Do")}
            </h5>
        );
    }
}

export default DateDivider;
