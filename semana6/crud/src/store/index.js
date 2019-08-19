import { createStore } from 'redux'
import Mock from '../seeds/mock'

const initState = {
	data: Mock,
	selected: null
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'SELECT_CARD':
			return {
				...state,
				selected: action.payload
			}
		default:
			return state
	}
}

const store = createStore(reducer)

export default store
