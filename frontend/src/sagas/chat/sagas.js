import {call, put, select, takeEvery, takeLatest} from "@redux-saga/core/effects";
import * as messageService from "../../services/messageService";
import {
    addMessageRoutine, addMessageToStateRoutine, deleteMessageFromStateRoutine,
    deleteMessageRoutine,
    editMessageRoutine, editMessageStateRoutine,
    loadMessagesRoutine
} from "./routines";
import {isWsConnected} from "../../helpers/websocket.helper";


function* loadMessages() {
    try {
        const messages = yield call(messageService.getAllMessages);
        yield put(loadMessagesRoutine.success(messages));
    } catch (e) {
        console.log(e);
    }
}

function* addMessage(action) {
    try {
        const newMessage = yield call(messageService.saveMessage, action.payload);
        if (!isWsConnected()) {
            yield put(addMessageRoutine.success(newMessage));
        }
    } catch (e) {
        console.log(e);
    }
}

function* addMessageToState(action) {
    try {
        yield put(addMessageToStateRoutine.success(action.payload))
    } catch (e) {
        console.log(e);
    }
}

function* editMessage(action) {
    try {
        const store = yield select();
        const message = { ...store.chat.editedMessage, body: action.payload.body };
        const resultMessage = yield call(messageService.updateMessage, message);
        if (!isWsConnected()) {
            yield put(editMessageRoutine.success(resultMessage));
        }
    } catch (e) {
        console.log(e);
    }
}

function* editMessageState(action) {
    try {
        yield put(editMessageRoutine.success(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function* deleteMessage(action) {
    try {
        yield call(messageService.deleteMessage, action.payload.id);
        if (!isWsConnected()) {
            yield put(deleteMessageRoutine.success(action.payload));
        }
    } catch (e) {
        console.log(e);
    }
}

function* deleteMessageFromState(action) {
    try {
        yield put(deleteMessageRoutine.success(action.payload));
    } catch (e) {
        console.log(e);
    }
}

export default function* messageSagas() {
    yield takeLatest(loadMessagesRoutine.TRIGGER, loadMessages);
    yield takeEvery(addMessageRoutine.TRIGGER, addMessage);
    yield takeEvery(addMessageToStateRoutine.TRIGGER, addMessageToState);
    yield takeEvery(editMessageRoutine.TRIGGER, editMessage);
    yield takeEvery(editMessageStateRoutine.TRIGGER, editMessageState);
    yield takeEvery(deleteMessageRoutine.TRIGGER, deleteMessage);
    yield takeEvery(deleteMessageFromStateRoutine.TRIGGER, deleteMessageFromState);
}
