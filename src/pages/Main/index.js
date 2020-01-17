import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { Container, Form, Input, SubmitButton } from './styles';

Icon.loadFont();

export default class Main extends Component {
  state = {
    users: [],
    newUser: '',
  };

  handleSend = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/user/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({ users: [...users, data], newUser: '' });

    Keyboard.dismiss();
  };

  render() {
    const { newUser } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add repository"
            value={newUser}
            onChangeText={t => this.setState({ newUser: t })}
            returnKeyType="send"
            onSubmitEditing={this.handleSend}
          />
          <SubmitButton onPress={this.handleSend}>
            <Icon name="add" size={20} color="black" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Main page',
};
