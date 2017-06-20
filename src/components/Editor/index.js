import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import brace from "brace"; // eslint-disable-line no-unused-vars
import AceEditor from "react-ace";

import "./index.css";
import "brace/mode/javascript";
import "brace/theme/chaos";

import { updateCode } from "../../actions/inputActions";

class Editor extends Component {
  componentDiDMount() {
    this.editor.resize();
  }

  updateCode(value) {
    this.props.updateCode(value);
  }

  render() {
    return (
      <AceEditor
        className="editor"
        value={this.props.code}
        mode="javascript"
        theme="chaos"
        name="editor"
        fontSize={14}
        height="100%"
        width="100%"
        highlightActiveLine={false}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: Infinity }}
        onChange={this.updateCode.bind(this)}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    code: state.input.code
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCode: bindActionCreators(updateCode, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
