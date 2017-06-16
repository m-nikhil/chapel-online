import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

const middleware = process.env.NODE_ENV === "production"
  ? applyMiddleware(thunk)
  : applyMiddleware(thunk, logger);

export default createStore(reducer, middleware);
