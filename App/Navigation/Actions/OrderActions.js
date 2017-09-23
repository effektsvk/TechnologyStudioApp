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
				switch (response.problem) {
					case null:
						dispatch({ type: ORDERS_FETCH_SUCCESS, payload: response.data });
						break
					case 'NETWORK_ERROR':
						Alert.alert(
							"Something went wrong...",
							"Check your internet connection and try again.",
							{ text: "OK" }
						);
						break
					default:
						Alert.alert(
							"Something went wrong...",
							"Please try again later.",
							{ text: "OK" }
						);
						break
				};
			});
	};
};
