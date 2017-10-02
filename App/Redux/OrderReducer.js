import {
	ORDERS_FETCH_REQUEST,
	ORDERS_FETCH_SUCCESS
} from '../Navigation/Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ORDERS_FETCH_REQUEST:
			console.log("orderreducer", action.id);
			console.log(action);
			return { ...state, ["id"]: action.id };
			// return state
		case ORDERS_FETCH_SUCCESS:
			console.log("orderreducer success", action.orders.items);
			return action.orders.items;
		default:
			return state;
	}
}
