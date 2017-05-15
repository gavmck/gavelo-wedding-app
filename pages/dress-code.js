import React from 'react';
import { View, Text } from 'react-native';
import variables from '../styles/variables';

export default class DressCode extends React.Component {
  render() {
    return (
      <Section
        theme="red"
        title="Dress Code"
        lead="Casual wedding wear"
      >
        <Text style={textStyle['red']}>
          Please wear whatever you feel comfortable in*
        </Text>
        <Text style={textStyle['red']}>*Stilettos are not allowed in the Barn</Text>
      </Section>
    );
  }
}