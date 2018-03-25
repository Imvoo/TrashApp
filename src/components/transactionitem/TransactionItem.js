import React from "react";
import BoxWrapper from "../boxwrapper/BoxWrapper";
import { primaryColour, accentColour } from "../../style/AppTheme";
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
            width: 80,
            marginLeft: -5,
            paddingRight: 10,
            borderRightColor: "rgba(0,0,0,0.2)",
            borderRightWidth: 1
          }}
        >
          <Text
            style={
              styles.text && {
                fontSize: 30,
                fontWeight: "800",
                marginBottom: -5,
                color: primaryColour
              }
            }
          >
            {this.props.item.input}
          </Text>
          <Text style={{ color: "rgba(0,0,0,0.5)" }}>points</Text>
        </View>
        <View style={{ marginLeft: 20, justifyContent: "center" }}>
          <Text style={{ color: "rgba(0,0,0,0.5)" }}>Voucher</Text>
          <Text
            style={
              styles.text && {
                color: accentColour
              }
            }
          >
            {this.props.item.output}
          </Text>
        </View>
      </View>
    );

    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.item)}>
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
