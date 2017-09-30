import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_FETCH_REQUEST,
	CONTACTS_FETCH_ERROR,
	CONTACT_ADD,
	CONTACT_ADD_SUCCESSFUL,
	CONTACT_ADD_ERROR,
	CONTACT_UPDATE,
} from '../Navigation/Actions/types';
import I18n from '../i18n/i18n';

export const contactsFetch = () => {
	const api = create({baseURL: 'https://private-36f1e-contactstest.apiary-mock.com/contacts'});

	return api
	.get()
	.then((response) => {
		switch (response.problem) {
			case null:
				return response.data
				break
			case 'NETWORK_ERROR':
				Alert.alert(
					I18n.t('error_title'),
					I18n.t('no_internet_connection'),
					{ text: "OK" }
				);
				break
			case 'CLIENT_ERROR':
				Alert.alert(
					I18n.t('error_title'),
					`${I18n.t('try_again_later')} ${I18n.t('error')}: ${response.data.error.message}`,
					{ text: "OK" }
				)
			default:
				Alert.alert(
					I18n.t('error_title'),
					I18n.t('try_again_later'),
					{ text: "OK" }
				);
				break
		}
	});
};

export const contactAdd = (name, phone) => {
	console.log(name, phone);
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

	return api
	.post(
		'/contacts',
		body,
		{headers: {
			'Content-Type': 'application/json'
		}}
	)
	.then(console.log)
}
