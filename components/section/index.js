import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { H2 } from 'native-base';
import { Font } from 'expo';
import variables from '../../styles/variables';

const wrapBase = {
  padding: variables.spacing.root,
};

const wrapStyle = StyleSheet.create({
  blue: Object.assign({}, wrapBase, {
    backgroundColor: variables.color.blue,
  }),
  orange: Object.assign({}, wrapBase, {
    backgroundColor: variables.color.orange,
  }),
  yellow: Object.assign({}, wrapBase, {
    backgroundColor: variables.color.yellowLight,
  }),
  red: Object.assign({}, wrapBase, {
    backgroundColor: variables.color.red,
  }),
  white: Object.assign({}, wrapBase, {
  }),
});

const titleBase = {
  fontSize: variables.font.size.h2,
  fontFamily: variables.font.heading,
  marginBottom: variables.spacing.base,
}

const titleStyle = StyleSheet.create({
  blue: Object.assign({}, titleBase, {
    color: variables.color.yellowLight,
  }),
  orange: Object.assign({}, titleBase, {
    color: variables.color.yellowLight,
  }),
  yellow: Object.assign({}, titleBase, {
    color: variables.color.orange,
  }),
  red: Object.assign({}, titleBase, {
    color: variables.color.yellowLight,
  }),
  white: Object.assign({}, titleBase, {
    color: variables.color.orange,
  }),
});

const leadBase = {
  fontFamily: variables.font.body,
  fontSize: variables.font.size.lg,
  marginBottom: variables.spacing.base,
};

const leadStyle = StyleSheet.create({
  blue: Object.assign({}, leadBase, {
    color: variables.color.yellowLight,
  }),
  orange: Object.assign({}, leadBase, {
    color: variables.color.yellowLight,
  }),
  yellow: Object.assign({}, leadBase, {
    color: variables.color.orange,
  }),
  red: Object.assign({}, leadBase, {
    color: variables.color.yellowLight,
  }),
  white: Object.assign({}, leadBase, {
    color: variables.color.orange,
  }),
});


export default class Section extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'playfair': require('../../assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf'),
    });
  }

  render() {
    const { children, title, lead, theme } = this.props;
    return (
      <View style={wrapStyle[theme]}>
        <Text style={titleStyle[theme]}>{title}</Text>
        {lead ? <Text style={leadStyle[theme]}>{lead}</Text> : false}
        {children}
      </View>
    );
  }
}

Section.defaultProps = {
  theme: 'white',
};