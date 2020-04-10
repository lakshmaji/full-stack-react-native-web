import { combineReducers } from "redux";
import { postReducer } from "./Posts";
import { commentReducer } from "./Comments";
import { userReducer } from "./User";

const reducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  user: userReducer
});

export default reducer;
