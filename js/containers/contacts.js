import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, List, ListItem, Separator } from 'native-base';

import {Actions} from 'react-native-router-flux'


export default class Me extends Component {
  render() {
    return (
      <Container>
	<Header>
	  <Left>
	    <Button transparent onPress={() => Actions.pop()}>
	      <Icon name="arrow-back" />
	    </Button>
	  </Left>
	  <Body>
	    <Title>Me</Title>
	  </Body>
	  <Right />
	</Header>

        <Content>
	  
	  <List>
            <Separator>
	      <Text>A</Text>
	    </Separator>
	    <ListItem>
              <Thumbnail square size={80} source={require('../../images/avatar0.jpg')} />
              <Body>
                <Text>Ada</Text>
                <Text note>Ada is ...</Text>
              </Body>
	      <Right>
		<Button transparent>
		  <Icon name="md-shirt" />
		</Button>  
	      </Right>
            </ListItem>
	    <ListItem>
              <Thumbnail square size={80} source={require('../../images/avatar0.jpg')} />
              <Body>
                <Text>Alex</Text>
                <Text note>Alex is ...</Text>
              </Body>
	      <Right>
		<Button transparent>
		  <Icon name="md-shirt" />
		</Button>  
	      </Right>
            </ListItem>
	    
	    <Separator>
	      <Text>C</Text>
	    </Separator>
	    <ListItem>
              <Thumbnail square size={80} source={require('../../images/avatar0.jpg')} />
              <Body>
                <Text>Candy</Text>
                <Text note>Candy is ...</Text>
              </Body>
	      <Right>
		<Button transparent>
		  <Icon name="md-shirt" />
		</Button>  
	      </Right>
            </ListItem>
	    
	    <Separator>
	      <Text>M</Text>
	    </Separator>
	    <ListItem>
              <Thumbnail square size={80} source={require('../../images/avatar0.jpg')} />
              <Body>
                <Text>Mike</Text>
                <Text note>Mike is ...</Text>
              </Body>
	      <Right>
		<Button transparent>
		  <Icon name="md-shirt" />
		</Button>  
	      </Right>
            </ListItem>
          </List>

	  
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={Actions.home}>
              <Icon name="home" />
	      <Text>Home</Text>
            </Button>
	    <Button active onPress={Actions.contacts}>
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
