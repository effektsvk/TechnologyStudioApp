import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';
import ListItemStyles from './Styles/ListItemStyles';

class ListItem extends Component {
	onRowPress() {
		Actions.contactDetail({
			contact: this.props.contact,
			id: this.props.contact.id,
			title: this.props.contact.name
		});
	}

	renderImage() {
		const { pictureUrl } = this.props.contact;

		if (pictureUrl) {
			return ({uri: `${pictureUrl}`})
		} else {
			return (require('../Images/placeholder.png'))
		}
	}

	render() {
		const { id, name, phone, pictureUrl } = this.props.contact;
		const {
			containerStyle,
			imageStyle,
			nameLabelStyle,
			numberLabelStyle,
			textContainerStyle
		} = ListItemStyles;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection style={containerStyle}>
						<Image style={imageStyle} source={this.renderImage()} />
						<View style={textContainerStyle}>
							<Text style={nameLabelStyle}>{name}</Text>
							<Text style={numberLabelStyle}>{phone}</Text>
						</View>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

// const styles = {
// 	containerStyle: {
// 		display: 'flex',
// 		flexDirection: 'row',
// 		height: 70
// 	},
// 	imageStyle: {
// 		marginTop: 5,
// 		marginRight: 10,
// 		marginLeft: 5,
// 		width: 50,
// 		height: 50
// 	},
// 	nameLabelStyle: {
// 		fontSize: 26
// 	},
// 	numberLabelStyle: {
// 		fontSize: 16
// 	},
// 	textContainerStyle: {
// 		justifyContent: 'space-between'
// 	}
// }

export default ListItem;
