import { create } from 'apisauce';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from '../i18n/i18n';

export const ordersFetch = (id) => {
	const api = create({baseURL: `https://private-36f1e-contactstest.apiary-mock.com/contacts/${id}/order`});
	console.log(id);
	return api
	.get()
	.then((response) => {
		switch (response.problem) {
			case null:
			console.log(response.data);
			return response.data;
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
}
