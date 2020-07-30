import {call, put, takeEvery} from "@redux-saga/core/effects";
import * as authService from "../services/authService";
import {LOAD_CURRENT_USER, LOAD_CURRENT_USER_SUCCESS, SET_AUTH_DATA, SET_USER} from './actionTypes'
import {LOAD_MESSAGES} from "../container/Chat/actionTypes";


export function* loadUser() {
    try {
        const user = yield call(authService.getCurrentUser);
        yield put({type: LOAD_CURRENT_USER_SUCCESS, payload: {user}})
    } catch (e) {
        console.log(e);
    }
}

const setToken = token => localStorage.setItem('token', token);

export function* setAuthData(action) {
    if (action.payload.token) {
        yield put({ type: LOAD_MESSAGES })
    }

    setToken(action.payload.token);
    yield put( { type: LOAD_CURRENT_USER_SUCCESS, payload: { user: action.payload.user } } )
}

export function* login(action) {
    try {
        const {user, token} = yield call(authService.login, action.request);
        yield put( { type: SET_AUTH_DATA, payload: { user, token } })
    } catch (e) {
        console.log(e);
    }
}

export default function* profileSaga() {
    yield takeEvery(LOAD_CURRENT_USER, loadUser);
    yield takeEvery(SET_USER, login);
    yield takeEvery(SET_AUTH_DATA, setAuthData)
}
