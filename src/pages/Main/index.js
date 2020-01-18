import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator, Keyboard } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Name,
  Avatar,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

Icon.loadFont();

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main Page',
  };

  state = {
    loading: false,
    newUser: '',
    users: [],
  };

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('usr', JSON.stringify(users));
    }
  }

  async componentDidMount() {
    const usr = await AsyncStorage.getItem('usr');

    if (usr) {
      this.setState({ users: JSON.parse(usr) });
    }
  }

  handleSend = async () => {
    Keyboard.dismiss();

    const { newUser, users } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      loading: false,
      newUser: '',
      users: [...users, data],
    });
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  render() {
    const { loading, newUser, users } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search repo..."
            value={newUser}
            onChangeText={t => this.setState({ newUser: t })}
            returnKeyType="send"
            onSubmitEditing={this.handleSend}
          />
          <SubmitButton onPress={this.handleSend} loading={loading}>
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
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton
                onPress={() => {
                  this.handleNavigate(item);
                }}
              >
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
