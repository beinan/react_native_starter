import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import {Actions} from 'react-native-router-flux'


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
	  <Text>AAA</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={Actions.login}>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
