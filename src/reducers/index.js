import { combineReducers } from "redux";

import input from "./inputReducer";
import output from "./outputReducer";

const reducer = combineReducers({
  input,
  output
});

export default reducer;
