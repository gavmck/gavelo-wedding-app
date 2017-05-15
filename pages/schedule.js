import React from 'react';
import { View, Text } from 'react-native';
import variables from '../styles/variables';

export default class Schedule extends React.Component {
  render() {
    return (
      <Section
        title="Schedule"
        theme="orange"
      >
        <View>
          <Text style={h3Style['orange']}>Times</Text>
          <List>
            <ListItem>
              <Text>4pm Arrival - drinks, snacks and relax</Text>
            </ListItem>
            <ListItem>
              <Text>5pm Entertainment - a sing and a say</Text>
            </ListItem>
            <ListItem>
              <Text>6pm Food - bring on the buffet</Text>
            </ListItem>
            <ListItem>
              <Text>7pm DJs and dancing - let’s party!</Text>
            </ListItem>
            <ListItem>
              <Text>11pm Last orders - anything left at the bar?</Text>
            </ListItem>
            <ListItem>
              <Text>12am Game Over - bed time for bozos.</Text>
            </ListItem>
          </List>

          <Text style={textStyle['orange']}>
            We'd love you to sing a song, say some words, or spin some records. Let us know!
          </Text>
          <Text style={textStyle['orange']}>
            brideandgroom@gavelo.wedding
          </Text>
        </View>

        <View>
          <Text style={h3Style['orange']}>Lineup</Text>
          <List>
            <ListItem>
              <Text>Soda on the Rocks</Text>
            </ListItem>
            <ListItem>
              <Text>Inertia Fireheart</Text>
            </ListItem>
            <ListItem>
              <Text>Selector Pete</Text>
            </ListItem>
            <ListItem>
              <Text>DJ Knight-E</Text>
            </ListItem>
            <ListItem>
              <Text>DJ MonkeyChops</Text>
            </ListItem>
            <ListItem>
              <Text>DJ Genner8</Text>
            </ListItem>
          </List>
        </View>
      </Section>
    );
  }
}