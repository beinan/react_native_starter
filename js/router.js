import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';
import Home from './containers/home';
import Me from './containers/me';
import SignIn from './containers/signin';


export default class AppRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
	<Scene key="root">
	  <Scene key="home" component={Home} />
	  <Scene key="signin" component={SignIn} />
	  <Scene key="me" component={Me} />
	</Scene>
      </Router>
    )
  }
}
