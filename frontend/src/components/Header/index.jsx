import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import styles from "./styles.module.sass"

const Header = ({messages}) => {
    return (
        !messages ?
            null
            : (
                <div className={`ui block ${styles.header}`}>
                     <h3>My Chat</h3>
                     <h3>23 participants</h3>
                     <h3>{messages?.length} messages</h3>
                     <h3>last message at {moment.utc(messages[messages.length - 1]?.createdAt).format("HH:mm")}</h3>
                </div>
            )
    );
};

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
};

export default connect(mapStateToProps)(Header);
