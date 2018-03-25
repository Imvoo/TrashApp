import React from "react";
import BoxWrapper from "../boxwrapper/BoxWrapper";
import { primaryColour } from "../../style/AppTheme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Circle as ProgressCircle } from "react-native-progress";

export default class TransactionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let child = (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15
          }}
        >
        </View>
        <View>
          <Text style={styles.text}>{this.props.item.input} points</Text>
          <Text style={styles.text}>{this.props.item.output}</Text>
        </View>
      </View>
    );

    return (
        <TouchableOpacity
            onPress={() => this.props.onPress(this.props.item)} >
        <BoxWrapper child={child} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black"
  }
});
