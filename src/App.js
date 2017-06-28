import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import 'react-toastify/dist/ReactToastify.min.css'

import Page from "./components/Page";
import Toolbar from "./components/Toolbar";
import Workplace from "./components/Workplace";
import { ToastContainer } from 'react-toastify';



import { loadPermalink } from "./actions/permalinkActions";

class App extends Component {

componentWillMount() {
  this.props.loadPermalink(this.props.match.params.id);
}


 render() {
    return (
      <div>
        <ToastContainer position={ "bottom-right"} autoClose={2000}  hideProgressBar={true} className={"notify"}/>
        <Page sider={<Toolbar />} content={<Workplace />} />
      </div>
    );
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
