import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

export default class NameBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.name}>
          Hi there{"\n"}
          <Text style={styles.superbold}>{this.props.name}</Text>!
        </Text>
        <View style={styles.topspace}>
          <Text style={styles.text}>You have recycled nothing today!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: "100%"
  },
  text: {
    fontSize: 18,
    color: "white"
  },
  name: {
    fontSize: 50,
    color: "white",
    lineHeight: 55
  },
  superbold: {
    fontWeight: "800"
  },
  topspace: {
    marginTop: 10
  }
});

NameBox.propTypes = {
  name: PropTypes.string
};
