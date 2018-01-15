import backend from '../common/api/backend'
import reactor from './reactor'
import getters from './getters'
import {
  DISMISS_FLASH,
  SET_ORDER_INITIAL,
  SET_ORDER_VALUE,
  RECEIVE_ORDER_START,
  RECEIVE_ORDER_SUCCESS,
  RECEIVE_ORDER_FAILED
} from './actionTypes'

import _ from 'underscore'

export default {

  dismissFlash() {
    reactor.dispatch(DISMISS_FLASH)
  },
  
 setEquipmentInitial() {
		  reactor.dispatch(SET_EQUIPMENT_INITIAL);

 },
 
 getOrderDetails(serviceorder) {
		  reactor.dispatch(RECEIVE_ORDER_START, { serviceorder });
		  backend.getOrderDetails(serviceorder,
				  order => {
					  reactor.dispatch(RECEIVE_ORDER_SUCCESS, { order })
					  
				  },
				  (message) => {
					  reactor.dispatch(RECEIVE_ORDER_FAILED, { message })
				  })
	  },
	  
 resetToIntial() {
    reactor.dispatch(RESET_TO_INITIAL)
  }
}
