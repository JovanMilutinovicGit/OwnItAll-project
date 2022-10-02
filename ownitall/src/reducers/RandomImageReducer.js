import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_RANDOM_PHOTOS":
      return action.payload;
    default:
      return state;
  }
};
