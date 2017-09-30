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

export const contactAdd = (data) => {
	console.log(data);
	return {
		type: CONTACT_ADD,
		data
	}
};
