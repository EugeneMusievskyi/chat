import {applyMiddleware, compose, createStore} from "redux";
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import reducers from "./reducers";

export const history = createBrowserHistory();

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, initialState,
                        composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
