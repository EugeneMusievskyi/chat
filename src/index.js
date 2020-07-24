import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Chat from "./container/Chat";
import Loader from "./components/Loader";
import {func} from "prop-types";

(async () => {
    ReactDOM.render(
        <Loader/>,
        document.getElementById('root')
    );

    const response = await fetch("https://edikdolynskyi.github.io/react_sources/messages.json");
    let initialMessages;
    if (response.ok) {
        initialMessages = await response.json();
    } else {
        initialMessages = require("./messages.json");
    }

    ReactDOM.render(
        <Chat messages={initialMessages}/>,
        document.getElementById('root')
    );
})();

export const currentUser = {
  userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  user: "Zhenya"
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
