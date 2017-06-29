import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';

import {Actions} from 'react-native-router-flux'


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
	  <Left>
	    <Thumbnail small source={require('../../images/avatar0.jpg')} />
	  </Left>
	  <Body>
	    <Title>Home</Title>
	  </Body>
	  <Right>
	    <Button transparent>
	      <Icon name='search' />
	    </Button>
	  </Right>
        </Header>
        <Content>
	  <Text>AAA</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button active onPress={Actions.signin}>
              <Icon name="home" />
	      <Text>Home</Text>
            </Button>
	    <Button>
              <Icon name="md-contacts" />
	      <Text>Contacts</Text>
            </Button>
            <Button>
              <Icon name="md-qr-scanner" />
	      <Text>Discover</Text>
            </Button>
            <Button onPress={Actions.me}>
              <Icon name="person" />
	      <Text>Me</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
