import React from "react";
import PropTypes from "prop-types";
import BoxWrapper from "../../components/boxwrapper/BoxWrapper";
import { StyleSheet, Text, View } from "react-native";

export default class DollarBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let child = (
      <View style={styles.view}>
        <Text style={styles.text}>{this.props.amount} Points</Text>
      </View>
    );

    return <BoxWrapper child={child} />;
  }
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    padding: 20
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff7675"
  }
});

DollarBox.propTypes = {
  amount: PropTypes.number
};
