import { create } from 'apisauce';
import { Actions } from 'react-native-router-flux';
import {
	ORDERS_FETCH_SUCCESS
} from './types';

export const ordersFetch = ({ id }) => {
	return (dispatch) => {
		const api = create({baseURL: `https://private-36f1e-contactstest.apiary-mock.com/contacts/${id}/order`});
		api
			.get()
			.then((response) => {
				dispatch({ type: ORDERS_FETCH_SUCCESS, payload: response.data});
			});
	};
};
