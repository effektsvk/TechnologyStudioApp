import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	ORDERS_FETCH_REQUEST
} from './types';
import I18n from '../../i18n/i18n';

export const ordersFetch = ({ id }) => {
	console.log("ordersFetch", id);
	return {
		type: ORDERS_FETCH_REQUEST,
		id: { id }
	};
};
