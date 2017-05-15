import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import variables from '../styles/variables';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{
            backgroundColor: variables.color.yellowLight,
          }}>
            <View style={{
              padding: variables.spacing.root,
            }}>
              <Text
                style={{
                  color: variables.color.blue,
                  fontFamily: variables.font.heading,
                  fontSize: variables.font.size.h1,
                  lineHeight: 72,
                }}
              >Gav & Elo are getting hitched <Icon name="heart" style={{ color: variables.color.red }} /></Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', overflow: 'hidden', justifyContent: 'space-between' }}>
              <View style={{
                width: '50%',
              }}>
                <Image
                  source={require('../assets/images/gav-kiss.jpg')}
                  style={{
                    width: 210,
                    height: 240,
                    transform: [{ translateX: -54}],
                  }}
                />
              </View>
              <View style={{
                width: '50%',
              }}>
                <Image
                  source={require('../assets/images/elo-kiss.jpg')}
                  style={{
                    width: 189,
                    height: 240,
                    transform: [{ translateY: 54}],
                  }}
                />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}