'use strict';

import React from 'react'

import App from './components/App'
import reactor from './reactor'
import actions from './actions'

import OrderStore from './stores/OrderStore'

reactor.registerStores({
	order: OrderStore	
})

React.render(
    React.createElement(App, null),
    document.getElementById('app')
);
