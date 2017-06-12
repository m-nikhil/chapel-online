import React, { Component } from "react";
import brace from "brace"; // eslint-disable-line no-unused-vars
import AceEditor from "react-ace";

import "./index.css";

import "brace/mode/javascript";
import "brace/theme/chaos";

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDiDMount() {
    this.editor.resize();
  }

  render() {
    return (
      <AceEditor
        className="editor"
        value={'writeln("Hello Chapel!");'}
        mode="javascript"
        theme="chaos"
        name="editor"
        fontSize={14}
        height="100%"
        width="100%"
        highlightActiveLine={false}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: Infinity }}
      />
    );
  }
}

export default Editor;
