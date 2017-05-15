import React from 'react';
import { View, Text } from 'react-native';
import variables from '../styles/variables';

export default class Accommodation extends React.Component {
  render() {
    return (
      <Section
        theme="yellow"
        title="Accommodation"
        lead="We suggest looking at the options in Canterbury. There isn’t much in Kingston as it’s a tiny village!"
      >
        <Text style={textStyle['yellow']}>
          We have negotiated a 10% discount at the Falstaff Hotel in Canterbury which we think is very nice and is where we will be staying.
        </Text>
        <Text style={textStyle['yellow']}>
          To book please contact the hotel directly.
        </Text>
        <Text style={textStyle['yellow']}>
          They are holding a limited number of rooms for us and will require payment upon booking.
        </Text>
        <Text style={h3Style['yellow']}>Rates</Text>
        <List>
          <ListItem>
            <Text>Double/Twin including breakfast: £116.10</Text>
          </ListItem>
          <ListItem>
            <Text>Queen including breakfast: £94.50</Text>
          </ListItem>
        </List>

        <Text style={textStyle['yellow']}>If you need further advice please ask us.</Text>
      </Section>
    );
  }
}