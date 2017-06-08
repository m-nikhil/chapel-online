import React from "react"
import { connect } from "react-redux"

import SplitterLayout from 'react-splitter-layout';
import { Container, Grid} from 'semantic-ui-react'



export default class Layout extends React.Component {


	render(){


		return (

				<Grid Container fluid className="container-height">
					<Grid.Column width={1}>
						<p> Sidebar</p>
					</Grid.Column>

					<Grid.Column width={15}>
						<SplitterLayout >
        					<div>Pane 1</div>
        					<SplitterLayout vertical> 
        						<div>Pane 2</div>
        						<div>Pane 3</div>
        					</SplitterLayout>
      					</SplitterLayout>
      				</Grid.Column>
      			</Grid>
      		

		);
	}

}