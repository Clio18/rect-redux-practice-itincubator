import { combineReducers, createStore } from "redux";
import { postReducer } from "./post-reducers";
import { showPostsReducer } from "./show-posts-reducer";

let reducers = combineReducers({
  postPage: postReducer,
  postsPage: showPostsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
