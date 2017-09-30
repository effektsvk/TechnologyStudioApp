import {
	CONTACTS_FETCH_REQUEST,
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_FETCH_ERROR,
	CONTACT_ADD,
	CONTACT_UPDATE
} from '../Navigation/Actions/types';

const INITIAL_STATE = {
	name: '',
	phone: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CONTACTS_FETCH_REQUEST:
			return INITIAL_STATE; // done
		case CONTACTS_FETCH_SUCCESS:
			return action.contacts; // done
		case CONTACTS_FETCH_ERROR:
			return state; // done
		case CONTACT_ADD:
			return state;
		case CONTACT_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
}
