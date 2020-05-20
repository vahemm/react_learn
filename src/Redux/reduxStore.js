import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReducer";
import dialogsReduser from "./gialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;