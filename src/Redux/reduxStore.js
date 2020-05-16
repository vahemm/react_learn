import {combineReducers, createStore} from "redux";
import dispatchPost from "./profileReducer";
import dispatchMessage from "./gialogsReducer";

let reducers = combineReducers({
    profilePage: dispatchPost,
    dialogPage: dispatchMessage
});

let store = createStore(reducers);

export default store;