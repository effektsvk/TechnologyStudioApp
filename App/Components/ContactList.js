import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { contactsFetch } from '../Navigation/Actions';
import ListItem from './ListItem';

class ContactList extends Component {
	componentWillMount() {
		this.props.contactsFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ contacts }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(contacts);
	}

	renderRow(contact) {
		return <ListItem contact={contact} />;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const contacts = _.map(state.contacts.items, (name, uid) => {
		return { ...name, uid };
	});

	return { contacts };
};

export default connect(mapStateToProps, { contactsFetch })(ContactList);
