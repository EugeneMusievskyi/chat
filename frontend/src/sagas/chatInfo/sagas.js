import {loadChatInfoRoutine} from "./routines";
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

export default function* chatInfoSagas() {
    yield takeEvery(loadChatInfoRoutine.TRIGGER, getChatInfo)
}
