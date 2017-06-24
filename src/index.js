import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";

import WebFont from "webfontloader";


import App from "./App";
import store from "./store";

import "./index.css";

WebFont.load({
  google: {
    families: ["Dosis", "sans-serif"]
  }
});


const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/:id?' component={App} />
      </div>
    </Router>
  </Provider>,
  root
);

registerServiceWorker();
