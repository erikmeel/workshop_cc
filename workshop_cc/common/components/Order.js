'use strict';

var React = require('react');

import { Grid, Row, Col, Button, Input, Modal } from 'react-bootstrap'

var Order = React.createClass({
  propTypes: {
    validOrder: React.PropTypes.bool,
    needToChooseOrder: React.PropTypes.bool,
    onOrderChanged: React.PropTypes.func.isRequired
  },
  
  getInitialState() {
	return {
		message:"",
		serviceorder: {
			validOrder: false,
			orderid: ""
		} 
	};
  },

  render: function () {
	let messageBox = <i></i>  
	if(this.state.message && this.state.message.size > 0) {
		messageBox = <div className="well">{this.state.message}</div>
	}
    	
    return (
      <div>
      	<Grid>
      		<Row className="well">
      			<Col md={2} lg={2}>
      				<label className="operation-label">Service Order: </label>
      			</Col>
      			<Col md={10} lg={10}>
      				<Input type="text" placeholder="Enter service order" onChange={this.props.onOrderChanged} value={this.state.orderid} />
      			</Col>
      		</Row>
      		<Row>
      			<Col md={7} lg={7}>
      				{ messageBox }
      			</Col>
      		</Row>
      	</Grid>
      </div>	  
    );
  }
});

module.exports = Order;
