import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';
import OrderReducer from './OrderReducer';

export default combineReducers({
	contacts: ContactReducer,
	orders: OrderReducer
});
