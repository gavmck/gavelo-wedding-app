import React from 'react';
import { View, Text } from 'react-native';
import variables from '../styles/variables';

export default class Gifts extends React.Component {
  render() {
    return (
      <Section
        title="Gifts"
        lead="Please do not feel like you should or need to give us a gift."
      >
        <Text>
          We really appreciate the time and money you are already spending in coming to celebrate with us! Thank you :)
        </Text>

        <Text>
          For those who would like to make an additional contribution there will be a card box at the Barn.
        </Text>
      </Section>
    );
  }
}