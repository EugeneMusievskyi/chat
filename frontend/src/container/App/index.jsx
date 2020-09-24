import React from "react";
import {Provider} from "react-redux";
import store, {history} from '../../store';
import {Router} from "react-router-dom"
import Routing from "../Routing";


const App = () => (
    <Provider store={store}>
        <Router history={history}>
          <Routing />
        </Router>
    </Provider>
);

export default App;
