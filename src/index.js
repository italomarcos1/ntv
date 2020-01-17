import React from 'react';
import { StatusBar, Text } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ad0000" />
      <Routes />
    </>
  );
}
