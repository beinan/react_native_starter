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
          
          <Separator />
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../../images/avatar0.jpg')} />
              <Body>
                <Text>Beinan</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-qr-scanner" style={{color:'black'}}/>
                </Button>  
              </Right>
            </ListItem>
          </List>

          <Separator bordered />
          <List>
            <ListItem icon>
              <Left>
                <Icon name="settings" style={{color: 'gray'}}/>
              </Left>
              <Body>
                <Text>Settings</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          
          <Separator bordered />           
          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" style={{color: 'red'}}/>
              </Left>
              <Body>
                <Text>My Trip</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="notifications" style={{color: 'blue'}}/>
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Right />
            </ListItem>     
            <ListItem icon>
              <Left>
                <Icon name="albums" style={{color: 'green'}}/>
              </Left>
              <Body>
                <Text>Albums</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="logo-youtube" style={{color: 'red'}}/>
              </Left>
              <Body>
                <Text>Videos</Text>
              </Body>
              <Right />
            </ListItem>
          </List>

          <Separator />
          <List>
            <ListItem icon>
              <Left>
                <Icon name="restaurant" style={{color: 'orange'}}/>
              </Left>
              <Body>
                <Text>My Restaurant</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={Actions.home}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="md-contacts" onPress={Actions.Contacts} />
              <Text>Contacts</Text>
            </Button>
            <Button>
              <Icon name="md-qr-scanner" />
              <Text>Discover</Text>
            </Button>
            <Button active>
              <Icon name="person" />
              <Text>Me</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
