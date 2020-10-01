import React, {useEffect} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import PublicRoute from "../../components/PublicRoute";
import PrivateRoute from "../../components/PrivateRoute";
import Chat from "../Chat";
import {connect} from "react-redux";
import {loadCurrentUserRoutine} from "../../sagas/auth/routines";
import {useAuth} from "../../helpers/authorization.helper";
import RegistrationForm from "../../components/AuthForm/RegistrationForm";
import LoginForm from "../../components/AuthForm/LoginForm";

const Routing = ({ loadUser }) => {
    const isLogged = useAuth();

    useEffect(() => {
        isLogged && loadUser();
    }, [isLogged, loadUser]);

    return (
        <div className="fill">
            <Switch>
                <PublicRoute exact path="/login" component={LoginForm} />
                <PublicRoute exact path="/registration" component={RegistrationForm} />
                <PrivateRoute exact path="/" component={Chat} />
                {/*<PrivateRoute path="/users" component={Users} />*/}
                <Route path="/*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </div>
    )
};

const mapDispatchToProps = {
    loadUser: loadCurrentUserRoutine
};

export default connect(null, mapDispatchToProps)(Routing);
