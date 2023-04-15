import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {countReducer} from "./countReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    count:countReducer
});