import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ContactList from '../Components/ContactList';
import AddContact from '../Components/AddContact';
import ContactDetail from '../Components/ContactDetail';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="main">
				<Scene
					onRight={() => Actions.addContact()}
					rightTitle="+"
					key="contactList"
					component={ContactList}
					title="Contacts"
					initial
				/>
				<Scene
					key="addContact"
					component={AddContact}
					title="Add Contact"
				/>
				<Scene
					key="contactDetail"
					component={ContactDetail}
					title="TODO" // add contact's name
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
