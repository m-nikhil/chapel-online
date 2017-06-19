import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

let middleware;

if (process.env.NODE_ENV === "production") {
  middleware =  applyMiddleware(thunk);
}
else {
  middleware = applyMiddleware(thunk, logger);
}

export default createStore(reducer, middleware);
