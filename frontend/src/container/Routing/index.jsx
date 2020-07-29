import React from "react";
import Loader from "../../components/Loader";
import {Switch} from 'react-router-dom';
import PublicRoute from "../PublicRoute";
import LoginForm from "../LoginForm";
import PrivateRoute from "../PrivateRoute";
import Chat from "../Chat";

const Routing = () => {
    let isLoading = false;

    return (
        isLoading
            ? <Loader />
            : (
               <div className="fill">
                 <Switch>
                    <PublicRoute exact path="/login" component={LoginForm} />
                    <PrivateRoute exact path="/" component={Chat} />
                 </Switch>
               </div>
            )
    )
};

export default Routing;
