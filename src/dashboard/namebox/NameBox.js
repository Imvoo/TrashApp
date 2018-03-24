import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

export default class NameBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text>Hello</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

NameBox.propTypes = {
  name: PropTypes.string
};
