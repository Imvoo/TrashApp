import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC143C",
    alignItems: "center",
    justifyContent: "center"
  }
});
