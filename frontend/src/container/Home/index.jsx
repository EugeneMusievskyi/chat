import React from "react";
import {Provider} from "react-redux";
import store, {history} from '../../store';
import {HashRouter as Router} from "react-router-dom"
import Routing from "../Routing";


const Home = () => (
    <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
    </Provider>
);

export default Home;
