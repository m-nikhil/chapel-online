import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

import WebFont from "webfontloader";

import App from "./App";

import "antd/dist/antd.css";
import "./index.css";

WebFont.load({
  google: {
    families: ["Dosis", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
