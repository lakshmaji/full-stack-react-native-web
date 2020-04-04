import { combineReducers } from "redux";
import { postReducer } from "./Posts";
import { commentReducer } from "./Comments";

const reducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
});

export default reducer;
