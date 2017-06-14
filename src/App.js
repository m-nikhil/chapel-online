import React, { Component } from "react";

import Page from "./components/Page";
import Toolbar from "./components/Toolbar";
import Workplace from "./components/Workplace";

class App extends Component {
  render() {
    return <Page sider={<Toolbar />} content={<Workplace />} />;
  }
}

export default App;
