import React from "react";
import {connect} from "react-redux";
import styles from "./styles.module.sass"
import {Button} from "semantic-ui-react";
import {logout} from "../../helpers/authorization.helper";
import { useHistory } from "react-router-dom";

const Header = ({ info }) => {
    const history = useHistory();
    const handleLogout = () => {
        logout();
        history.push("/login");
    };

    return (
        <div className={`ui block ${styles.header} ${!info && styles.flexEnd}`}>
            {info?.userCount &&
            <h3>{info.userCount} users</h3>}
            {info?.messageCount &&
            <h3> {info.messageCount} messages</h3>}
            <Button className={styles.button} onClick={handleLogout} negative>Log out</Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        info: state.chat.info
    }
};

export default connect(mapStateToProps)(Header);
