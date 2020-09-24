import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../../helpers/authorization.helper";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogged = useAuth();

    return (
        <Route
            {...rest} render={props => (isLogged
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />)}
        />
    );
};

export default PrivateRoute;
