import React from 'react';
import { View, Text } from 'react-native';
import Section from '../components/section';
import variables from '../styles/variables';
import { h3Style, textStyle } from '../styles/typography';

export default class When extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Section
            title="When"
            lead="4pm Saturday 2nd September 2017"
          />

          <Section
            theme="blue"
            title="Where"
            lead="We will be celebrating at Kingston Village Barn, on the outskirts of Canterbury (about 15 minutes by car from Canterbury centre)."
          >
            <View>
              <Text style={h3Style['blue']}>Directions</Text>
              <Text style={textStyle['blue']}>
                By car from Canterbury/London: from the A2 take the exit towards Kingston/Barham/Bash 'bourne.  After about 4 miles on Bonny Bush Hill, turn right onto The Street.  The Barn is located on the left-hand side.
              </Text>

              <Text style={h3Style['blue']}>Transport and Taxis</Text>
              <Text style={textStyle['blue']}>
                There is parking available at the Barn for those who wish to drive. There are a number of taxi companies in Canterbury.
              </Text>
              <Text style={textStyle['blue']}>
                Longleys - 01227 710777
                Galaxy - 01227 450 150
              </Text>
            </View>

            <View>
              <Text style={h3Style['blue']}>Address</Text>
              <View>
                <Text style={textStyle['blue']}>Kingston Village Barn</Text>
                <Text style={textStyle['blue']}>25 The Street</Text>
                <Text style={textStyle['blue']}>Kingston</Text>
                <Text style={textStyle['blue']}>Canterbury</Text>
                <Text style={textStyle['blue']}>CT4 6JB</Text>
              </View>
            </View>
          </Section>
        </Content>
      </Container>
    );
  }
}