import React from "react";
import { Text, View } from "react-native";

export default class NameBox extends React.Component {
  render() {
    return (
      <View style={{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>Hello</Text>
        <Text>Matty</Text>
      </View>
    );
  }
}
