import { combineReducers } from "redux";
import { randomUserReducer } from "./randomUser";

export const rootReducer = combineReducers({
  randomUser: randomUserReducer,
});
