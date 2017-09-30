import { call, put, takeEvery, fork, select } from 'redux-saga/effects';
import { contactsFetch, contactAdd } from '../Api/contacts';
import {
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_FETCH_ERROR,
	CONTACTS_FETCH_REQUEST,
	CONTACT_ADD,
	CONTACT_ADD_SUCCESSFUL,
	CONTACT_ADD_ERROR,
} from '../Navigation/Actions/types';
import {
	newContactName,
	newContactPhone
} from '../Redux/selectors';

export function* fetchAllContacts() {
	const contacts = yield call(contactsFetch);
	if (contacts !== undefined) {
		yield put({ type: CONTACTS_FETCH_SUCCESS, contacts });
	} else {
		yield put({ type: CONTACTS_FETCH_ERROR })
	}
}

export function* contactAddRequest() {
	const name = yield select(newContactName);
	const phone = yield select(newContactPhone);
	const data = { name, phone }
	try {
		yield call(contactAdd, data);
		yield put({ type: CONTACT_ADD_SUCCESSFUL });
	} catch (error) {
		console.log(error);
		yield put({ type: CONTACT_ADD_ERROR });
	}

}

export function* watchFetchAllContacts() {
	yield takeEvery(CONTACTS_FETCH_REQUEST, fetchAllContacts);
}

export function* watchContactAdd() {
	yield takeEvery(CONTACT_ADD, contactAddRequest);
}

export function* rootSaga() {
	yield fork(watchFetchAllContacts);
	yield fork(watchContactAdd);
}
