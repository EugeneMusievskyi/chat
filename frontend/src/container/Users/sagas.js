import {call, put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import * as usersService from "../../services/usersService"
import {ADD_USER, DELETE_USER, EDIT_USER, LOAD_ALL_USERS, LOAD_ALL_USERS_SUCCESS, LOAD_USER} from "./actionTypes";

export function* loadUsers() {
    try {
        const users = yield call(usersService.getAllUsers);
        yield put({ type: LOAD_ALL_USERS_SUCCESS, users})
    } catch (e) {
        console.log(e);
    }
}

export function* loadUserById(action) {
    try {
        const user = yield call(usersService.getUserById, action.id);
        yield put({ type: LOAD_ALL_USERS })
    } catch (e) {
        console.log(e);
    }
}

export function* addUser(action) {
    try {
        const user = yield call(usersService.getUserById, action.user);
        yield put({ type: LOAD_ALL_USERS })
    } catch(e) {
        console.log(e);
    }
}

export function* editUser(action) {
    try {
        const user = yield call(usersService.editUser, action.user);
        yield put({ type: LOAD_ALL_USERS })
    } catch(e) {
        console.log(e);
    }
}

export function* deleteUser(action) {
    try {
        const user = yield call(usersService.deleteUser, action.user.id);
        yield put({ type: LOAD_ALL_USERS })
    } catch(e) {
        console.log(e);
    }
}

export default function* userSaga() {
    yield takeLatest(LOAD_ALL_USERS, loadUsers);
    yield takeEvery(LOAD_USER, loadUserById);
    yield takeEvery(ADD_USER, addUser);
    yield takeEvery(EDIT_USER, editUser);
    yield takeEvery(DELETE_USER, deleteUser);
}
