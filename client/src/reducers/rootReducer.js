import { combineReducers } from "redux";
import { IUserReducer, userReducer } from "./userReducer.ts";
import {countReducer} from "./countReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    count:countReducer
});