import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Chat from "./container/Chat";

(async () => {
    const response = await fetch("https://edikdolynskyi.github.io/react_sources/messages.json");
    let initialMessages;
    if (!response.ok) {
        initialMessages = await response.json();
    } else {
        initialMessages = require("./messages.json");
    }
    ReactDOM.render(
        <Chat messages={initialMessages}/>,
        document.getElementById('root')
    );
})();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
