import Expo from 'expo';
import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import Router from './router'

import { View } from 'react-native'
import { StatusBar, Platform } from 'react-native';

//import configureStore from './configureStore';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { ApolloClient, ApolloProvider } from 'react-apollo';
import { createNetworkInterface } from 'apollo-client';

//import { todoReducer, userReducer } from './reducers';

//Customized theme
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';



const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://api.8gcool.com/graphql' }),
});
const store = createStore(
  combineReducers({
    //todos: todoReducer,
    //users: userReducer,
    apollo: client.reducer(),
  }),
  { }, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      store: store,
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <ApolloProvider store={this.state.store} client={client}>
	<StyleProvider style={getTheme()}>
	  <Router />
	</StyleProvider>
      </ApolloProvider>
    );
  }
}
