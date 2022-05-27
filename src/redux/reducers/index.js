import { combineReducers } from "redux";

import UseReducer from "./user";
import PostsReducer from "./posts";
const RootReducer = combineReducers({
  user: UseReducer,
  posts: PostsReducer,
});

export default RootReducer;
