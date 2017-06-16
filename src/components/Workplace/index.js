import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SplitPane from "react-split-pane";
import  Input  from "antd/lib/input"

import Editor from "../Editor";

import "./index.css";
import 'antd/lib/input/style/css';

import { updateInput, updateFlags } from "../../actions/inputActions";


class Workplace extends Component {

  updateInput(event) {
    this.props.updateInput(event.target.value);
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
              defaultValue={this.props.output}
            />
            <Input
              type="textarea"
              autosize={false}
              className="input"
              defaultValue={this.props.input}
              value={this.props.input}
              onChange={this.updateInput.bind(this)}
            />
          </SplitPane>
        </SplitPane>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    input: state.input.input,
    flags: state.input.flags,
    output: state.editor.output
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInput: bindActionCreators(updateInput, dispatch),
    updateFlags: bindActionCreators(updateFlags, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Workplace);
