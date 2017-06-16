import { combineReducers } from "redux";

import editor from "./editorReducer";
import input from "./inputReducer";

const reducer = combineReducers({
  editor,
  input
});

export default reducer;
