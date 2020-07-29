import React from "react";
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthorized
            ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Component {...props} />)}
    />
);

export default PublicRoute;
