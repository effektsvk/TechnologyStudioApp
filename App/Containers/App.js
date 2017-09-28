import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from '../Redux';
import Router from '../Navigation/Router';
import { helloSaga } from '../Sagas/sagas';
import '../Config/ReactotronConfig';

class App extends Component {

	render() {
		const sagaMiddleware = createSagaMiddleware()
		const store = createStore(
			reducers,
			{},
			compose(
				applyMiddleware(ReduxThunk, sagaMiddleware), autoRehydrate()
			)
		);

		sagaMiddleware.run(helloSaga);
		persistStore(store, {storage: AsyncStorage});

		return(
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
