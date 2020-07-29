import {applyMiddleware, combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";
import React from "react";
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const currentUser = {
    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    user: "Zhenya"
};

export const history = createBrowserHistory();

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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState,
                        applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

/*(async () => {
    await loadMessages(store.dispatch);
    ReactDOM.render(
        <Provider store={store}>
        <Chat />
    </Provider>,
        document.getElementById('root')
    );
})();*/


export default store;
