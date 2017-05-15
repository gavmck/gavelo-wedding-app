import React from 'react';
import { View, Text } from 'react-native';
import variables from '../styles/variables';

export default class RSVP extends React.Component {
  render() {
    return (
      <Section
        title="RSVP"
      >
        <Form>

          <Item fixedLabel>
            <Label>Name(s)</Label>
            <Input />
          </Item>

          <Item fixedLabel>
            <Label>Email address</Label>
            <Input />
          </Item>

          <Item fixedLabel>
            <Label>Count me in</Label>
            <Radio selected />
          </Item>

          <Item fixedLabel>
            <Label>Sorry, can't make it</Label>
            <Radio />
          </Item>

          <Button>
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Section>
    );
  }
}