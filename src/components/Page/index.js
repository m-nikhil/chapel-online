import React, { Component } from "react";
import { Layout } from "antd";

import "./index.css";

const { Sider, Content } = Layout;

class Page extends Component {

  render() {
    return (
      <Layout className="fit-height">
        <Sider width="70" className="sider">
          {this.props.sider}
        </Sider>
        <Content className="content">
          {this.props.content}
        </Content>
      </Layout>
    );
  }
}

export default Page;
