import React from "react";
import moment from "moment";
import styles from "./styles.module.sass"

class DateDivider extends React.Component {
    render() {
        return (
            <h5 className={`ui horizontal divider header ${styles.divider}`}>
                {moment(this.props.date).format("MMMM Do")}
            </h5>
        );
    }
}

export default DateDivider;
