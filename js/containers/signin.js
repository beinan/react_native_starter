import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';



export default class SignIn extends Component {

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
	    <Title>Sign In</Title>
	  </Body>
	  <Right />
	</Header>

	<Content>
	  <Form>
	    <Item floatingLabel>
	      <Label>Username</Label>
	      <Input />
	    </Item>
	    <Item floatingLabel last>
	      <Label>Password</Label>
	      <Input secureTextEntry={true} />
	    </Item>
	  </Form>
	  <Button block style={{ margin: 15, marginTop: 50 }}>
	    <Text>Sign In</Text>
	  </Button>
	</Content>
      </Container>
    );
  }
}


