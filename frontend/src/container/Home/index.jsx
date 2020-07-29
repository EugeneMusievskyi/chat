import React from "react";
import {Provider} from "react-redux";
import Routing from 'src/containers/Index';
import store, {history} from 'src/store';
import {BrowserRouter as Router} from "react-router-dom"


const Home = () => (
    <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
    </Provider>
);

export default Home;
