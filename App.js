import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  Container,
  Button,
  Content,
  Footer,
  FooterTab,
  Icon,
  H1,
  H2,
  List,
  ListItem,
  Form,
  Item,
  Input,
  Label,
  Radio,
} from 'native-base';
import Section from './components/section';
import variables from './styles/variables';
import { AppLoading, Font } from 'expo';

const textBase = {
  fontFamily: variables.font.body,
  fontSize: variables.font.size.base,
  marginBottom: variables.spacing.base,
};

const textStyle = StyleSheet.create({
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

const h3Style = StyleSheet.create({
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

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      playfair: require('./assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf'),
      fauna: require('./assets/fonts/Fauna_One/FaunaOne-Regular.ttf')
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />
    }

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
                  source={require('./assets/images/gav-kiss.jpg')}
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
                  source={require('./assets/images/elo-kiss.jpg')}
                  style={{
                    width: 189,
                    height: 240,
                    transform: [{ translateY: 54}],
                  }}
                />
              </View>
            </View>
          </View>
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
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>With <Icon name="heart" style={{ color: variables.color.red }} /> Gav & Elo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

/*
<header role="masthead" class="header">
            <img
              src="/images/gav-kiss-30.jpg"
              srcset="/images/gav-kiss-30.jpg 30w, /images/gav-kiss-650.jpg 650w"
              class="header__image header__image--gav header__image--small"
              alt="Gav kissing"
            />
            <img
              src="/images/gav-30.jpg"
              srcset="/images/gav-30.jpg 30w, /images/gav-650.jpg 650w"
              class="header__image header__image--gav header__image--large"
              alt="Gav smiling"
            />
            <div class="header__inner">
              <h1 class="header__title" itemprop="name">
                Gav & Elo are getting hitched <span class="heart header__heart"></span>
              </h1>
            </div>
            <img src="/images/elo-kiss-30.jpg"
              srcset="/images/elo-kiss-30.jpg 30w, /images/elo-kiss-650.jpg 650w"
              class="header__image header__image--elo header__image--small"
              alt="Elo kissing"
            />
            <img
              src="/images/elo-30.jpg"
              srcset="/images/elo-30.jpg 30w, /images/elo-650.jpg 650w"
              class="header__image header__image--elo header__image--large"
              alt="Elo smiling"
            />
            <span class="heart header__kiss"></span>
          </header>
          <nav role="navigation" class="nav">
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#date" class="nav__link">When</a>
                </li>
                <li class="nav__item">
                  <a href="#venue" class="nav__link">Where</a>
                </li>
                <li class="nav__item">
                  <a href="#schedule" class="nav__link">Schedule</a>
                </li>
                <li class="nav__item">
                  <a href="#accommodation" class="nav__link">Accomodation</a>
                </li>
                <li class="nav__item">
                  <a href="#dress" class="nav__link">Dress code</a>
                </li>
                <li class="nav__item">
                  <a href="#gifts" class="nav__link">Gifts</a>
                </li>
                <li class="nav__item">
                  <a href="#rsvp" class="nav__link">RSVP</a>
                </li>
              </ul>
            </nav>
*/
