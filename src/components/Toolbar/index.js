import React, { Component } from "react";
import { Menu, Icon } from "antd";

import "./index.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu theme="dark" className="menu">
        <Menu.Divider className="top" />
        <Menu.Item><Icon type="appstore" className="icon" /></Menu.Item>
        <Menu.Item><Icon type="play-circle-o" className="icon" /></Menu.Item>
        <Menu.Divider className="bottom" />
      </Menu>
    );
  }
}

export default Toolbar;
