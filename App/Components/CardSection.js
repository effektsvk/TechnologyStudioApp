import React from 'react';
import { View } from 'react-native';
import CardSectionStyles from './Styles/CardSectionStyles';

const CardSection = (props) => {
  return (
    <View style={[CardSectionStyles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};



export { CardSection };
