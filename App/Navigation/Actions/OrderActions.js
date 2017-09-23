import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	ORDERS_FETCH_SUCCESS
} from './types';
import I18n from '../../i18n/i18n';

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
							I18n.t('error_title'),
							I18n.t('no_internet_connection'),
							{ text: "OK" }
						);
						break
					default:
						Alert.alert(
							I18n.t('error_title'),
							I18n.t('try_again_later'),
							{ text: "OK" }
						);
						break
				};
			});
	};
};
