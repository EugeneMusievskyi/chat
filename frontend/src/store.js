import {applyMiddleware, combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";
import React from "react";
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

export const history = createBrowserHistory();

const reducers = {
    chat: chatReducer,
};

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
                        applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
