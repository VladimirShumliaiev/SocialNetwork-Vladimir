import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dilogsReducer from "./Reducers/dilogsReducer";
import settingsReducer from "./Reducers/settingsReaducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        arrDilogs: dilogsReducer,
        settingsPage: settingsReducer,
    }
)


let store = createStore(reducers);

export default store;