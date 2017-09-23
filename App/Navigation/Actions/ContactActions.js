import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	CONTACTS_FETCH_SUCCESS,
	CONTACT_ADD,
	CONTACT_UPDATE
} from './types';

export const contactsFetch = () => {
	return (dispatch) => {
		const api = create({baseURL: 'https://private-36f1e-contactstest.apiary-mock.com/contacts'});
		api
		.get()
		.then((response) => {
			switch (response.problem) {
				case null:
					dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: response.data });
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
			}
		});
	};
};

export const contactUpdate = ({ prop, value }) => {
	return {
		type: CONTACT_UPDATE,
		payload: { prop, value }
	}
};

export const contactAdd = ({ name, phone }) => {
	return (dispatch) => {
		const api = create({
			baseURL: 'https://private-36f1e-contactstest.apiary-mock.com',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const body = {
			"name": `"${name}"`,
			"phone": `"${phone}"`,
		}

		api
		.post(
			'/contacts',
			body,
			{headers: {
				'Content-Type': 'application/json'
			}}
		)
		.then(dispatch({ type: CONTACT_ADD }))
		.then(console.log)

	};
};
