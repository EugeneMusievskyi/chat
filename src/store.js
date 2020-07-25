import {combineReducers, createStore} from "redux";
import chatReducer from "./container/Chat/reducer";

const currentUser = {
    userId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    user: "Zhenya"
};

const initialState = {
    messages: require("./messages.json")
};

const reducers = {
    chat: chatReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
