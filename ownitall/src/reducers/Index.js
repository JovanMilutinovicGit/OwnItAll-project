import { combineReducers } from "redux";

import RandomImageReducer from "./RandomImageReducer";
export default combineReducers({
  photos: RandomImageReducer,
});
