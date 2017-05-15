import { StyleSheet } from 'react-native';
import variables from './variables';

const textBase = {
  fontFamily: variables.font.body,
  fontSize: variables.font.size.base,
  marginBottom: variables.spacing.base,
};

export const textStyle = StyleSheet.create({
  blue: Object.assign({}, textBase, {
    color: variables.color.yellowLight,
  }),
  orange: Object.assign({}, textBase, {
    color: variables.color.yellowLight,
  }),
  yellow: Object.assign({}, textBase, {
    color: variables.color.orange,
  }),
  red: Object.assign({}, textBase, {
    color: variables.color.yellowLight,
  }),
  white: Object.assign({}, textBase, {
    color: variables.color.orange,
  }),
});

const h3Base = {
  fontFamily: variables.font.heading,
  fontSize: variables.font.size.h3,
  marginBottom: variables.spacing.sm,
}

export const h3Style = StyleSheet.create({
  blue: Object.assign({}, h3Base, {
    color: variables.color.yellowLight,
  }),
  orange: Object.assign({}, h3Base, {
    color: variables.color.yellowLight,
  }),
  yellow: Object.assign({}, h3Base, {
    color: variables.color.orange,
  }),
  red: Object.assign({}, h3Base, {
    color: variables.color.yellowLight,
  }),
  white: Object.assign({}, h3Base, {
    color: variables.color.orange,
  }),
});