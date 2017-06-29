import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import {Actions} from 'react-native-router-flux'


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
	  <Text>AAA</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button active onPress={Actions.signin}>
              <Icon name="home" />
            </Button>
	    <Button>
              <Icon name="person" />
            </Button>
            <Button>
              <Icon name="navigate" />
            </Button>
            <Button>
              <Icon name="menu" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
