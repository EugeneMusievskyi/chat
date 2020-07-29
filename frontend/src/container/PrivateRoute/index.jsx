import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthorized
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
);

const mapStateToProps = state => ({
    isAuthorized: state.profile?.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);
