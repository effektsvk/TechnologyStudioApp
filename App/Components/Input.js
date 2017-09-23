import React from 'react';
import { TextInput, View, Text } from 'react-native';
import InputStyles from './Styles/InputStyles'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = InputStyles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export { Input };
