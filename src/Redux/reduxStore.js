import {combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dilogsReducer from "./Reducers/dilogsReducer";
import settingsReducer from "./Reducers/settingsReaducer";

let reduers = combineReducers({
        profilePage: profileReducer,
        arrDilogs: dilogsReducer,
        settingsPage: settingsReducer,
    }
)


let store = createStore(reduers);

export default store;