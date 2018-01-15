import React from 'react'

import Order from '../../common/components/Order'
var moment = require('moment');

import { Grid, Row, Col, Button, Input, Modal } from 'react-bootstrap'

import reactor from '../reactor'
import getters from '../getters'
import actions from '../actions'

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
    	serviceorder: getters.serviceorder,
    	validOrder:getters.validOrder,
    	needToChooseOrder:getters.needToChooseOrder,
    }
  },
  
  orderChange(event) {
	    actions.setOrderValue(event.target.value);
	    
	    if (event.target.value.length === 9) {
	    	actions.getOrderDetails(event.target.value);
	    }
	    else {
//	    	actions.setOrderInitial();
	    }
	    if (event.target.value.length === 0) {
	      //actions.resetToIntial()
	    }
	  },

  
  render: function () {
		  
	    	  
    return (
      <div className="container-fluid">
      		<Order onOrderChanged={this.orderChange} validOrder= {this.state.validOrder} />		
      </div>
    );
  },
});
