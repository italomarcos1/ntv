import './config/ReactotronConfig';
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#333" />
      <Routes />
    </>
  );
}
