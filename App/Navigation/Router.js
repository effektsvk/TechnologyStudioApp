import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ContactList from '../Components/ContactList';
import AddContact from '../Components/AddContact';
import ContactDetail from '../Components/ContactDetail';
import I18n from '../i18n/i18n';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="main">
				<Scene
					onRight={() => Actions.addContact()}
					rightTitle={I18n.t('add')}
					key="contactList"
					component={ContactList}
					title={I18n.t('contacts')}
					initial
				/>
				<Scene
					key="addContact"
					component={AddContact}
					title={I18n.t('add_contact')}
				/>
				<Scene
					key="contactDetail"
					component={ContactDetail}
					title=""
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
