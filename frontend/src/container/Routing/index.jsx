import React, {useEffect} from "react";
import Loader from "../../components/Loader";
import {Redirect, Route, Switch} from 'react-router-dom';
import PublicRoute from "../PublicRoute";
import LoginForm from "../LoginForm";
import PrivateRoute from "../PrivateRoute";
import Chat from "../Chat";
import {connect} from "react-redux";
import {loadCurrentUserRoutine} from "../../sagas/auth/routines";
import {useAuth} from "../../helpers/authorization.helper";

const Routing = ({ loadUser }) => {
    const isLoading = false;
    const isLogged = useAuth();

    useEffect(() => {
        isLogged && loadUser();
    }, [isLogged, loadUser]);

    return (
        isLoading
            ? <Loader />
            : (
               <div className="fill">
                 <Switch>
                    <PublicRoute exact path="/login" component={LoginForm} />
                    <PrivateRoute exact path="/" component={Chat} />
                    {/*<PrivateRoute path="/users" component={Users} />*/}
                    <Route path="/*">
                        <Redirect to="/"/>
                    </Route>
                 </Switch>
               </div>
            )
    )
};

const mapDispatchToProps = {
    loadUser: loadCurrentUserRoutine
};

export default connect(null, mapDispatchToProps)(Routing);
