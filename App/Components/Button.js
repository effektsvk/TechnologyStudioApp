import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ButtonStyles from './Styles/ButtonStyles';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = ButtonStyles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
