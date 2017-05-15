import React from 'react';
import { Icon } from 'native-base';
import { AppLoading, Font } from 'expo';

import Home from './pages/home';
import When from './pages/when';

class App extends React.Component {
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
      <Home />
    );
  }
}
