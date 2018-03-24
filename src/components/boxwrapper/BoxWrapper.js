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
    maxHeight: 50,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
    marginRight: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

BoxWrapper.propTypes = {
  child: PropTypes.element
};
