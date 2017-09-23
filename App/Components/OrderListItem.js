import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './CardSection';
import OrderListItemStyles from './Styles/OrderListItemStyles';

class OrderListItem extends Component {

	render() {
		const { orderStyle, textStyle, nameStyle, countStyle } = OrderListItemStyles;
		const { name, count } = this.props.order;

		return (
				<CardSection style={orderStyle}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={countStyle}>{count}</Text>
				</CardSection>
		);
	}
}

export default OrderListItem;
