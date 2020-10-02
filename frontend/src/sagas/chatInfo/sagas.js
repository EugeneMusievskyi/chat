import {loadChatInfoRoutine, setChatInfoRoutine} from "./routines";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import * as chatInfoService from "../../services/chatInfoService";

function* getChatInfo() {
    try {
        const chatInfo = yield call(chatInfoService.getChatInfo);
        yield put(loadChatInfoRoutine.success(chatInfo));
    } catch (e) {
        console.log(e);
    }
}

function* setChatInfo(action) {
    try {
        yield put(setChatInfoRoutine.success(action.payload));
    } catch (e) {
        console.log(e);
    }
}

export default function* chatInfoSagas() {
    yield takeEvery(loadChatInfoRoutine.TRIGGER, getChatInfo);
    yield takeEvery(setChatInfoRoutine.TRIGGER, setChatInfo)
}
