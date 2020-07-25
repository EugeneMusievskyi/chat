import {combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";

const currentUser = {
    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    user: "Zhenya"
};

const initialState = {
    chat : {
        messages: require("./messages.json"),
        profile: currentUser
    }
};

const reducers = {
    chat: chatReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, initialState);

export default store;
