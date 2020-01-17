import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  User,
  Avatar,
  List,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

Icon.loadFont();

export default class Main extends Component {
  state = {
    loading: false,
    newUser: '',
    users: [],
  };

  async componentDidMount() {
    const usersList = await AsyncStorage.getItem('usersList');

    if (usersList) {
      this.setState({ users: JSON.parse(usersList) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('usersList', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    Keyboard.dismiss();

    const { newUser, users } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avt: response.data.avatar_url,
    };

    this.setState({ loading: false, newUser: '', users: [...users, data] });
  };

  render() {
    const { loading, newUser, users } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add repo..."
            onChangeText={txt => this.setState({ newUser: txt })}
            value={newUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="black" />
            ) : (
              <Icon name="add" size={20} color="black" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avt }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>See profile</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Main Page',
};
