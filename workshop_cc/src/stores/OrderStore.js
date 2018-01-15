import { Store, toImmutable } from 'nuclear-js'
import { SET_ORDER_INITIAL, SET_ORDER_VALUE, RECEIVE_ORDER_START, RECEIVE_ORDER_SUCCESS, RECEIVE_ORDER_FAILED } from '../actionTypes'

const initialState = toImmutable({
	validOrder: false,
	needToChooseOrder: false,
	orderid : "",
	serviceorder: null,
	error:""
})

export default Store({
  getInitialState() {
    return initialState
  },

  initialize() {
	   this.on(SET_ORDER_INITIAL, setOrderInitial)	   
	   this.on(SET_ORDER_VALUE, setOrderValue)
	   this.on(RECEIVE_ORDER_SUCCESS, receiveOrder)
	   this.on(RECEIVE_ORDER_FAILED, invalidateOrder)
	  }
})

function setOrderInitial(state) {
	  let s = state 
	  s = s.setIn(['serviceorder'], null)
	  return initialState
}

function setOrderValue(state, value) {
	let s = state
	s = s.setIn(['orderid'], value)
	s = s.setIn(['message'], "")
	return s
}

function receiveOrder(state, { serviceorder }) {
	  return state.merge({
		  "suborders": serviceorder.suborders,
		  "serviceorder": serviceorder
	  })
}

function invalidateOrder(state, { message }) {
	var s= state
	s = s.setIn(['message'], message)
	return s
}
