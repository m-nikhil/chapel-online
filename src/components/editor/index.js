import React, { Component } from "react";
import brace from "brace"; // eslint-disable-line no-unused-vars
import AceEditor from "react-ace";

import "brace/mode/javascript";
import "brace/theme/github";

function onChange(newValue) {
  console.log("change", newValue);
}

class Editor extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        name="ace-editor"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default Editor;
