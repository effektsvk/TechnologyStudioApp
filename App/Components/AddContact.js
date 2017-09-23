import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { contactAdd, contactUpdate } from '../Navigation/Actions';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { Button } from './Button';

class AddContact extends Component {
	onButtonPress() {
		const { name, phone } = this.props;

		this.props.contactAdd({ name, phone });
		Actions.contactList({ type: 'reset' });
	}

	render() {
		return (
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="Marián Zdeno"
						value={this.props.name}
						onChangeText={value => this.props.contactUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="0901000111"
						value={this.props.phone}
						onChangeText={value => this.props.contactUpdate({ prop: 'phone', value })}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Add Contact
					</Button>
				</CardSection>
			</View>
		)
	}
};

const mapStateToProps = (state) => {
	const { name, phone } = state.contacts;

	return { name, phone };
}

export default connect(mapStateToProps, {
	contactAdd,
	contactUpdate
})(AddContact);
