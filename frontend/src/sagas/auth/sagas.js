import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import * as usersService from "../../services/usersService";
import * as authService from "../../services/authService";
import {loadUserRoutine, loginRoutine, registerRoutine, loadCurrentUserRoutine} from "./routines";
import {setToken} from "../../helpers/authorization.helper";

export function* loadUserById(action) {
    try {
        const user = yield call(usersService.getUserById, action.id);
        yield put(loadUserRoutine.success(user))
    } catch (e) {
        console.log(e);
    }
}

export function* login(action) {
    try {
        const userLogin = action.payload;
        const response = yield call(authService.login, userLogin);
        const {user, token} = response.data;
        setToken(token);
        yield put(loginRoutine.success(user));
    } catch (e) {
        yield put(loginRoutine.failure(e.error));
    }
}

export function* register(action) {
    try {
        const response = yield call(authService.createUser, action.payload);
        const {user, token} = response.data;
        setToken(token);
        yield put(registerRoutine.success(user))
    } catch (e) {
        yield put (registerRoutine.failure(e.error));
    }
}

export function* loadUser() {
    try {
        const user = yield call(authService.getCurrentUser);
        yield put(loadCurrentUserRoutine.success(user));
    } catch (e) {
        console.log(e);
    }
}

export default function* authSagas() {
    yield all([
        yield takeEvery(loadCurrentUserRoutine.TRIGGER, loadUser),
        yield takeEvery(loginRoutine.TRIGGER, login),
        yield takeEvery(loadUserRoutine.TRIGGER, loadUserById),
        yield takeEvery(registerRoutine.TRIGGER, register)
    ])
}
