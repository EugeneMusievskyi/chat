import React from "react";
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthorized
            ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Component {...props} />)}
    />
);

const mapStateToProps = state => ({
    isAuthorized: state.profile.isAuthorized
});

export default connect(mapStateToProps)(PublicRoute);
