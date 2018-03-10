import { combineReducers } from "redux";
import ActiveVideo from "./reducer_active_Video";
import videoList from "./reducer_list";
const rootReducer = combineReducers({
  activeVideo: ActiveVideo,
  posts:videoList
});

export default rootReducer;
