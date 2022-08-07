import { combineReducers, createStore } from "redux";
import { postReducer } from "./new-app-reducers";

let reducers = combineReducers({
  post: postReducer,
});

let store = createStore(reducers);

export default store;
