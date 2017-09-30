import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	CONTACTS_FETCH_REQUEST,
	CONTACT_UPDATE,
	CONTACT_ADD,
} from './types';
import I18n from '../../i18n/i18n';

export function contactsFetchRequest() {
	return { type: CONTACTS_FETCH_REQUEST }
};

export const contactUpdate = ({ prop, value }) => {
	return {
		type: CONTACT_UPDATE,
		payload: { prop, value }
	}
};

export const contactAdd = (name, phone) => {
	return {
		type: CONTACT_ADD,
		name,
		phone
	}

	// return (dispatch) => {
	// 	const api = create({
	// 		baseURL: 'https://private-36f1e-contactstest.apiary-mock.com',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	});
	// 	const body = {
	// 		"name": `"${name}"`,
	// 		"phone": `"${phone}"`,
	// 	}
	//
	// 	api
	// 	.post(
	// 		'/contacts',
	// 		body,
	// 		{headers: {
	// 			'Content-Type': 'application/json'
	// 		}}
	// 	)
	// 	.then(dispatch({ type: CONTACT_ADD }))
	// 	.then(console.log)
	//
	// };
};
