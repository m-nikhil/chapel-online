import React, { Component } from "react";
import Layout from "antd/lib/layout";

import "./index.css";
import "antd/lib/layout/style/css";

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
