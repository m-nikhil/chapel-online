import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";

import "./index.css";
import "antd/lib/menu/style/css";
import "antd/lib/icon/style/css";

import { executeCode } from "../../actions/editorActions";

import { toast } from 'react-toastify';

class Toolbar extends Component {
  executeCode() {
    this.props.executeCode(this.props.code, this.props.input, this.props.flags,this.props.link);
  }

executing() {
  toast.error('Wait, till the current execution ends :)')
}

  render() {
    return (
      <Menu theme="dark" className="menu">
        <Menu.Divider className="top" />
        <Menu.Item><Icon type="appstore" className="icon" /></Menu.Item>
        <Menu.Item>
          <Icon
            disabled = "true"
            type="play-circle-o"
            className="icon"
            onClick={ this.props.executing ? this.executing.bind(this) : this.executeCode.bind(this)}
            //{this.executing.bind(this)}
          />
        </Menu.Item>
        <Menu.Divider className="bottom" />
      </Menu>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    input: state.input.input,
    flags: state.input.flags,
    code: state.input.code,
    link: state.permalink.link,
    executing: state.output.executing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    executeCode: bindActionCreators(executeCode, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
