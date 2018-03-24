import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

export default class BoxWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.box}>{this.props.child}</View>;
  }
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    borderRadius: 5,
    marginVertical: 5,
    padding: 20,
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white"
  }
});

BoxWrapper.propTypes = {
  child: PropTypes.element
};
