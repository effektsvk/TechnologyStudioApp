import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_ERROR,
	CONTACT_ADD,
	CONTACT_UPDATE
} from './types';
import I18n from '../../i18n/i18n';

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
