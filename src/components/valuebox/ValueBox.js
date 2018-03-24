import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

export default class ValueBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.value}>{this.props.value}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center"
  },
  value: {
    fontSize: 25,
    fontWeight: "800",
    color: "white"
  },
  description: {
    fontSize: 12.5,
    color: "white",
    marginTop: -5
  }
});

ValueBox.propTypes = {
  value: PropTypes.number,
  description: PropTypes.string
};
