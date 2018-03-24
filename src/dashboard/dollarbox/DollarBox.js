import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

export default class DollarBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.amount} Points</Text>
      </View>
    );
  }
}

DollarBox.propTypes = {
  amount: PropTypes.number
};
