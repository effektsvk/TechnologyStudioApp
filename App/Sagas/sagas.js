import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { contactsFetch, contactAdd } from '../Api/contacts';
import {
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_FETCH_ERROR,
	CONTACTS_FETCH_REQUEST,
	CONTACT_ADD,
	CONTACT_ADD_SUCCESSFUL,
	CONTACT_ADD_ERROR,
} from '../Navigation/Actions/types';

export function* fetchAllContacts() {
	const contacts = yield call(contactsFetch);
	if (contacts !== undefined) {
		yield put({ type: CONTACTS_FETCH_SUCCESS, contacts });
	} else {
		yield put({ type: CONTACTS_FETCH_ERROR })
	}
}

export function* contactAddRequest(action) {
	console.log(action);
	const { name, phone } = action;

	try {
		yield call(contactAdd);
		yield put({ type: CONTACT_ADD_SUCCESSFUL });
	} catch (error) {
		console.log(error);
		yield put({ type: CONTACT_ADD_ERROR });
	}

}

export function* watchFetchAllContacts() {
	yield takeEvery(CONTACTS_FETCH_REQUEST, fetchAllContacts);
}

export function* watchContactAdd(action) {
	yield takeEvery(CONTACT_ADD, contactAddRequest, action);
}

export function* rootSaga() {
	yield fork(watchFetchAllContacts);
	yield fork(watchContactAdd);
}
