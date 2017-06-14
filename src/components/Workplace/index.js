import React, { Component } from "react";
import SplitPane from "react-split-pane";
import { Input } from "antd";

import Editor from "../Editor";

import "./index.css";

class Workplace extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splitpane">
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={1000}
          defaultSize={800}
        >
          <Editor />
          <SplitPane
            split="horizontal"
            minSize={150}
            maxSize={450}
            defaultSize={300}
          >
            <Input
              type="textarea"
              autosize={false}
              disabled={true}
              className="output"
              defaultValue="Output will be displayed here."
            />
            <Input
              type="textarea"
              autosize={false}
              className="input"
              defaultValue="Enter your Input here."
            />
          </SplitPane>
        </SplitPane>
      </div>
    );
  }
}

export default Workplace;
