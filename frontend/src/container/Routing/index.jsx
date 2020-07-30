import React, {useEffect} from "react";
import Loader from "../../components/Loader";
import {Switch} from 'react-router-dom';
import PublicRoute from "../PublicRoute";
import LoginForm from "../LoginForm";
import PrivateRoute from "../PrivateRoute";
import Chat from "../Chat";
import EditedMessage from "../../components/EditedMessage";
import {connect} from "react-redux";
import {loadUser} from "../../Profile/actions";

const Routing = ({ isAuthorized, loadUser }) => {
    const isLoading = false;
    useEffect(() => {
        if (!isAuthorized) {
            loadUser();
        }
    });

    return (
        isLoading
            ? <Loader />
            : (
               <div className="fill">
                 <Switch>
                    <PublicRoute exact path="/login" component={LoginForm} />
                    <PrivateRoute exact path="/" component={Chat} />
                    <PrivateRoute path="/edit/:id" component={EditedMessage} />
                    {/*<PrivateRoute path="/users" component={Users} />*/}
                 </Switch>
               </div>
            )
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.profile.isAuthorized,
        user: state.profile.user
    }
};

const mapDispatchToProps = {
    loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
