import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";
import profileReducer from "./Profile/reducer"
import usersReducer from "./container/Users/reducer"
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

export const history = createBrowserHistory();

const initialState = {};

const reducers = {
    chat: chatReducer,
    profile: profileReducer,
    users: usersReducer
};

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState,
                        applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
