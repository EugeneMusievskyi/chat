import { combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";
import {loadMessages} from "./container/Chat/actions";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Chat from "./container/Chat/Chat";
import React from "react";

const currentUser = {
    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    user: "Zhenya"
};

const initialState = {
    chat : {
        messages: null,
        profile: currentUser,
        editedMessage: null
    }
};

const reducers = {
    chat: chatReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, initialState);

(async () => {
    await loadMessages(store.dispatch);
    ReactDOM.render(
        <Provider store={store}>
        <Chat />
    </Provider>,
        document.getElementById('root')
    );
})();


export default store;
