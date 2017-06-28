import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SplitPane from "react-split-pane";
import Input from "antd/lib/input";

import Editor from "../Editor";

import "./index.css";
import "antd/lib/input/style/css";

import ScrollArea  from "react-scrollbar";

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
          defaultSize={700}
        >
          <Editor />
          <SplitPane
            split="horizontal"
            minSize={150}
            maxSize={450}
            defaultSize={300}
          >
          <ScrollArea
          speed={0.8}
          contentClassName="content"
          horizontal={false}
          className="output"
          swapWheelAxes={true}
          >
            <div >
            {this.props.output.split("<br />").map((item, key) => {
                return <span key={key}>{item}<br/></span>
            })}

            {this.props.error.split("<warning />").map((item, key) => {
                return <span key={key}><font color="red">{
                    item.split("<br />").map((item2, key) => {
                        return <span key={key}>{item2}<br/></span>
                    })
                }</font></span>
            })}

            </div>
            </ScrollArea>

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
    output: state.output.output,
    error: state.output.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateInput: bindActionCreators(updateInput, dispatch),
    updateFlags: bindActionCreators(updateFlags, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Workplace);
