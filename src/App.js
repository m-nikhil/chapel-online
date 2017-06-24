import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Page from "./components/Page";
import Toolbar from "./components/Toolbar";
import Workplace from "./components/Workplace";

import { loadPermalink } from "./actions/permalinkActions";

class App extends Component {

componentWillMount() {
  this.props.loadPermalink(this.props.match.params.id);
}


 render() {
    return <Page sider={<Toolbar />} content={<Workplace />} />;
  }
}


function mapStateToProps(state, ownProps) {
  return {
    input: state.input.input,
    flags: state.input.flags,    // to be added
    code: state.input.code
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPermalink: bindActionCreators(loadPermalink, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
