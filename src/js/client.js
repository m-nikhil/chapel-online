import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"

import "semantic-ui-css/semantic.min.css"
import "../css/mycss.css"

const app = document.getElementById('app')

ReactDOM.render(<Provider>
  <Layout />
</Provider>, app);
