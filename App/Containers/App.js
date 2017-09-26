import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../Redux';
import Router from '../Navigation/Router';
import '../Config/ReactotronConfig';

class App extends Component {

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return(
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;
