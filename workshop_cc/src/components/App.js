'use strict';

import React from 'react'
import { Alert, Button, ButtonToolbar } from 'react-bootstrap'

import reactor from '../reactor'
import getters from '../getters'
import actions from '../actions'

import OrderContainer from './OrderContainer'

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
    	validOrder: getters.validOrder,
    	serviceorder: getters.serviceorder
    }
  },
  
  stopSubmitOnEnter(e) {
	  var eve = e || window.event;
	  var keycode = eve.keyCode || eve.which || eve.charCode;

	  if (keycode == 13) {
	    eve.cancelBubble = true;
	    eve.returnValue = false;

	    if (eve.stopPropagation) {   
	      eve.stopPropagation();
	      eve.preventDefault();
	    }

	    //return false;
	  }

  },

  render() {
	    
    return (
      <div className="container-fluid">
        <form className="form" id="foo" onKeyPress={this.stopSubmitOnEnter}>
          < OrderContainer />
        </form>
      </div>
    );
  }
});
