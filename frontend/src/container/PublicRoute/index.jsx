import React from "react";
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from "../../helpers/authorization.helper";

const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => {
    const isLogged = useAuth();

    return (
        <Route
            {...rest} render={props => (isLogged
            ? <Redirect to={{pathname: '/', state: {from: props.location}}} />
            : <Component {...props} />)} />
    );
};

export default PublicRoute;
