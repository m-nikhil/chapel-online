import { combineReducers } from "redux";

import input from "./inputReducer";
import output from "./outputReducer";
import permalink from "./permalinkReducer";

const reducer = combineReducers({
  input,
  output,
  permalink
});

export default reducer;
