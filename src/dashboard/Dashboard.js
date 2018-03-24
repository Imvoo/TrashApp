import React from "react";
import NameBox from "./namebox/NameBox";
import { Text, View } from "react-native";

export default class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
        <NameBox />
      </View>
    );
  }
}
