import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { ordersFetch } from '../Navigation/Actions';
import OrderListItem from './OrderListItem';

class ContactDetail extends Component {
	componentWillMount() {
		const { id } = this.props;
		this.props.ordersFetch({id});
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ orders }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(orders);
	}

	renderRow(order) {
		return <OrderListItem order={order} />;
	}

	render() {
		const { name, phone, id } = this.props.contact;
		const { phoneInfoStyle, phoneTextStyle, phoneNumberStyle, ordersTableStyle, containerStyle } = styles;

		return (
			<View style={containerStyle}>
				<View style={phoneInfoStyle}>
					<Text style={phoneTextStyle}>Phone</Text>
					<Text style={phoneNumberStyle}>{phone}</Text>
				</View>
				<View style={ordersTableStyle}>
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={this.renderRow}
					/>
				</View>
			</View>
		);
	};
};

const styles = {
	phoneInfoStyle: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10
	},
	phoneTextStyle: {
		fontSize: 22,
	},
	phoneNumberStyle: {
		fontSize: 18,
	},
	ordersTableStyle: {
		backgroundColor: 'white',
		flex: 1,
	},
	containerStyle: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
	}
};

const mapStateToProps = state => {
	const orders = _.map(state.orders.items, (name, uid) => {
		return { ...name, uid };
	});

	return { orders };
};

export default connect(mapStateToProps, { ordersFetch })(ContactDetail);
