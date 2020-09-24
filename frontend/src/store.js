import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import reducers from "./reducers";

export const history = createBrowserHistory();

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, initialState,
                        applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
