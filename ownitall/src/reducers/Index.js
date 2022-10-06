import { combineReducers } from "redux";
import RandomImageReducer from "./RandomImageReducer";
import TestimonialsReducer from "./TestimonialsReducer";

export default combineReducers({
  photos: RandomImageReducer,
  testimonials: TestimonialsReducer,
});
