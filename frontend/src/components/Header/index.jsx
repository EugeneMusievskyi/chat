import React from "react";
import styles from "./styles.module.sass"
import {Button} from "semantic-ui-react";
import {logout} from "../../helpers/authorization.helper";
import { useHistory } from "react-router-dom";

const Header = ({ userCount, messageCount }) => {
    const history = useHistory();
    const handleLogout = () => {
        logout();
        history.push("/login");
    };

    return (
        <div className={`ui block ${styles.header}`}>
            <h3>{userCount ? userCount : 0} users</h3>
            <h3> {messageCount ? messageCount : 0} messages</h3>
            <Button className={styles.button} onClick={handleLogout} negative>Log out</Button>
        </div>
    );
};

export default Header;
