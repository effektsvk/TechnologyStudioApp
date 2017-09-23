import {
	CONTACTS_FETCH_SUCCESS,
	CONTACT_ADD,
	CONTACT_UPDATE
} from '../Navigation/Actions/types';

const INITIAL_STATE = {
	name: '',
	phone: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CONTACTS_FETCH_SUCCESS:
			return action.payload;
		case CONTACT_ADD:
			return INITIAL_STATE;
		case CONTACT_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
}
