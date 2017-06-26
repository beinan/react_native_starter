import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';
import Main from './main';
import SignIn from './containers/signin'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
	<Scene key="root">
	  <Scene key="main" component={Main}/>
	  <Scene key="signin" component={SignIn} title="Login"/>
	  <Scene key="register" component={Main} title="Register"/>
	</Scene>
      </Router>
    )
  }
}
