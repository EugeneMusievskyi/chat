import {all} from "@redux-saga/core/effects";
import messageSagas from "../container/Chat/sagas"
import profileSaga from "../Profile/sagas";
import userSaga from "../container/Users/sagas";

export default function* rootSaga() {
    yield all ([
        messageSagas(),
        profileSaga(),
        userSaga()
    ]);
}
