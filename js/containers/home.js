import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Card, CardItem } from 'native-base';

import {Image} from 'react-native'

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

	  <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../images/avatar0.jpg')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:"https://d267cvn3rvuq91.cloudfront.net/i/images/ja17tensorillo2a.jpg?cx=0&cy=0&cw=1830&ch=2038&sw=2360"}} style={{height: 400, width: 400, flex: 1}}/>
                <Text>
                  Early in 2015, artificial-intelligence researchers at Google created an obscure piece of software called ­TensorFlow. Two years later the tool, which is used in building machine-­learning software, underpins many future ambitions of Google and its parent company, Alphabet.

TensorFlow makes it much easier for the company’s engineers to translate new approaches to artificial intelligence into practical code, improving services such as search and the accuracy of speech recognition. But just months after TensorFlow was released to Google’s army of coders, the company also began offering it to the world for free.


                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        
        </Content>

	<Footer>
          <FooterTab>
            <Button active onPress={Actions.home}>
              <Icon name="home" />
	      <Text>Home</Text>
            </Button>
	    <Button onPress={Actions.contacts}>
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
