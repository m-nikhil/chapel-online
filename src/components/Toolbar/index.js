import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Menu, Icon } from "antd";

import "./index.css";

import { executeCode } from "../../actions/editorActions";

class Toolbar extends Component {

  execute() {
    this.props.executeCode();
  }

  render() {
    return (
      <Menu theme="dark" className="menu">
        <Menu.Divider className="top" />
        <Menu.Item><Icon type="appstore" className="icon" /></Menu.Item>
        <Menu.Item>
          <Icon
            type="play-circle-o"
            className="icon"
            onClick={this.execute.bind(this)}
          />
        </Menu.Item>
        <Menu.Divider className="bottom" />
      </Menu>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    executing: state.executing,
    executed: state.executed,
    output: state.output,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    executeCode: bindActionCreators(executeCode, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
