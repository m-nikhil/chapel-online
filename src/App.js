import React, { Component } from "react";
import { Card } from "antd";
import Editor from "./components/editor";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title="This component comes from">Ant design</Card>
        <div id="ace-editor" />
        <Editor />
      </div>
    );
  }
}

export default App;
