import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './CardSection';

class OrderListItem extends Component {

	render() {
		const { orderStyle, textStyle, nameStyle, countStyle } = styles;
		const { name, count } = this.props.order;

		return (
				<CardSection style={orderStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={countStyle}>{count}</Text>
				</CardSection>
		);
	}
}

const styles = {
	orderStyle: {
		height: 40,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 40,
	},
	nameStyle: {
		fontSize: 25,
		paddingLeft: 10
	},
	countStyle: {
		fontSize: 22,
		paddingRight: 10
	}
}

export default OrderListItem;
